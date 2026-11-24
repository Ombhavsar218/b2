import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-white/30 text-xs font-light tracking-[0.25em] uppercase border-t border-white/5 pointer-events-none select-none">
      <div className="flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-[#E8D5A5]/60" />
        <span>A Universe Made For You</span>
        <Sparkles className="w-3 h-3 text-[#E8D5A5]/60" />
      </div>
    </footer>
  );
};
