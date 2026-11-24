import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  startPlay: () => void;
  pausePlay: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getAudio = (): HTMLAudioElement | null => {
    return document.getElementById('celestial-audio') as HTMLAudioElement | null;
  };

  const startPlay = useCallback(() => {
    const audio = getAudio();
    if (!audio) return;

    audio.volume = 0.40;
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      // Browser blocked autoplay until user gesture
    });
  }, []);

  const pausePlay = useCallback(() => {
    const audio = getAudio();
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    const audio = getAudio();
    if (!audio) return;

    if (audio.paused) {
      startPlay();
    } else {
      pausePlay();
    }
  }, [startPlay, pausePlay]);

  useEffect(() => {
    const audio = getAudio();
    if (!audio) return;

    // Track audio state changes
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // 1. Attempt autoplay immediately on mount
    audio.volume = 0.40;
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });

    // 2. Global unlock on ANY first user gesture (click, tap, touch, keydown)
    const handleFirstGesture = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      removeListeners();
    };

    const removeListeners = () => {
      document.removeEventListener('pointerdown', handleFirstGesture, true);
      document.removeEventListener('click', handleFirstGesture, true);
      document.removeEventListener('touchstart', handleFirstGesture, true);
      document.removeEventListener('keydown', handleFirstGesture, true);
    };

    document.addEventListener('pointerdown', handleFirstGesture, true);
    document.addEventListener('click', handleFirstGesture, true);
    document.addEventListener('touchstart', handleFirstGesture, true);
    document.addEventListener('keydown', handleFirstGesture, true);

    return () => {
      removeListeners();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay, startPlay, pausePlay }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
