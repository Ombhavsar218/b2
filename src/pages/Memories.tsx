import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { StarField } from '../components/StarField';
import { useLightbox } from '../context/LightboxContext';
import type { MemoryItem } from '../types';

export const Memories: React.FC = () => {
  const { memories } = siteData;
  const { openLightbox } = useLightbox();

  const handleOpenPhoto = (index: number) => {
    const formatted = memories.items.map((item: MemoryItem) => ({
      src: item.image || '',
      title: item.caption,
      caption: item.date ? `Memory • ${item.date}` : undefined
    }));
    openLightbox(formatted, index);
  };

  return (
    <div className="relative min-h-screen px-6 py-28 overflow-hidden select-none">
      {/* Background soft starry sky */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${memories.bgImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/90 via-[#0B1026]/85 to-[#0B1026]/95" />

      {/* Subtle StarField */}
      <StarField density="medium" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9A9FF]/10 border border-[#B9A9FF]/20 text-xs font-mono uppercase tracking-[0.25em] text-[#B9D9FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#E8D5A5]" />
            <span>Memories Together</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-wide leading-tight">
            {memories.heading}
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#E8D5A5]/90 font-light">
            “{memories.subtitle}”
          </p>
        </div>

        {/* Polaroid Scrapbook Layout (4-6 photos with varied sizes & subtle tilt) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full mb-16">
          {memories.items.map((item: MemoryItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              style={{ rotate: `${item.rotation || 0}deg` }}
              onClick={() => handleOpenPhoto(idx)}
              className="bg-[#111831]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/10 shadow-2xl hover:shadow-[#B9A9FF]/20 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              {/* Photo Area */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-lg bg-black/40">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Polaroid Bottom Note */}
              <div className="pt-4 pb-2 px-1 space-y-1">
                <p className="font-serif text-sm sm:text-base text-white/90 font-normal leading-snug group-hover:text-[#E8D5A5] transition-colors">
                  {item.caption}
                </p>
                {item.date && (
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 block">
                    {item.date}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="text-center max-w-xl mx-auto space-y-6 pt-6">
          <p className="font-serif text-lg sm:text-xl text-white/80 font-light leading-relaxed">
            “{memories.closingMessage}”
          </p>

          <NavLink
            to="/things-you-love"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B9A9FF]/20 via-[#B9D9FF]/20 to-[#E8D5A5]/20 hover:from-[#B9A9FF]/30 hover:to-[#E8D5A5]/30 text-white font-medium text-xs sm:text-sm tracking-[0.25em] uppercase border border-[#B9A9FF]/40 hover:border-[#E8D5A5]/60 transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>{memories.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#E8D5A5] group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
