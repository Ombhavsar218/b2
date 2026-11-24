import React from 'react';
import { VolumeX, Music, Volume2 } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

export const AudioToggle: React.FC = () => {
  const { isPlaying, togglePlay } = useMusic();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={togglePlay}
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
              Play Music
            </span>
          </>
        )}
      </button>
    </div>
  );
};
