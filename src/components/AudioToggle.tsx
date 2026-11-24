import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Music, Volume2 } from 'lucide-react';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Single shared instance of Moonlight Piano (Clair de Lune)
    const audio = new Audio('/celestial-music.mp3');
    audio.loop = true;
    audio.volume = 0.40;
    audioRef.current = audio;

    const tryAutoPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        cleanupInteractionListeners();
      }).catch(() => {
        // Autoplay policy paused it until first user touch/click/scroll
        setIsPlaying(false);
      });
    };

    // Attempt autoplay immediately on mount
    tryAutoPlay();

    // Trigger on first user interaction anywhere on the website
    const handleFirstInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      cleanupInteractionListeners();
    };

    const cleanupInteractionListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });

    return () => {
      cleanupInteractionListeners();
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleSound}
        title={isPlaying ? "Mute Moonlight Piano" : "Play Moonlight Piano"}
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full celestial-glass text-white/90 hover:text-white hover:border-[#E8D5A5]/40 transition-all duration-300 shadow-xl group cursor-pointer"
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8D5A5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8D5A5]"></span>
            </span>
            <Music className="w-4 h-4 text-[#E8D5A5] animate-pulse" />
            <span className="text-xs tracking-wider uppercase font-mono text-[#E8D5A5]">
              Moonlight Piano
            </span>
            <Volume2 className="w-3.5 h-3.5 text-white/50" />
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-white/50 group-hover:text-white/80" />
            <span className="text-xs tracking-wider uppercase font-mono text-white/60 group-hover:text-white/80">
              Music Muted
            </span>
          </>
        )}
      </button>
    </div>
  );
};
