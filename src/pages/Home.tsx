import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import { StarField } from '../components/StarField';

export const Home: React.FC = () => {
  const { home, brotherName } = siteData;

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden select-none">
      {/* Background Cinematic Starry Sky */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${home.bgImage}')`,
        }}
      />

      {/* Gentle dark overlays for readability & peaceful mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/75 via-[#0B1026]/60 to-[#0B1026]/90" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#0B1026]/40 to-[#0B1026]/85" />

      {/* Subtle StarField */}
      <StarField density="medium" />

      {/* Centered Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center py-20">
        {/* Intro Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-6 sm:w-10 h-[1px] bg-[#E8D5A5]/60" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#E8D5A5]">
            {home.tagline}
          </span>
          <span className="w-6 sm:w-10 h-[1px] bg-[#E8D5A5]/60" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-wide leading-tight"
        >
          {home.mainHeading}
        </motion.h1>

        {/* Birthday Greeting with Brother's Name */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-6 mb-3 flex items-center justify-center gap-2 sm:gap-3"
        >
          <Sparkles className="w-4 h-4 text-[#E8D5A5]" />
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#E8D5A5] tracking-wider uppercase font-light">
            {home.birthdayLine} {brotherName}
          </p>
          <Sparkles className="w-4 h-4 text-[#E8D5A5]" />
        </motion.div>

        {/* Short Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-base sm:text-lg text-[#B9D9FF]/80 max-w-lg font-light leading-relaxed"
        >
          {home.shortMessage}
        </motion.p>

        {/* Single Minimal Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-10"
        >
          <NavLink
            to="/message"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B9A9FF]/20 via-[#B9D9FF]/20 to-[#E8D5A5]/20 hover:from-[#B9A9FF]/30 hover:to-[#E8D5A5]/30 text-white font-medium text-xs sm:text-sm tracking-[0.25em] uppercase border border-[#B9A9FF]/40 hover:border-[#E8D5A5]/60 transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>{home.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#E8D5A5] group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </motion.div>

        {/* Subtle Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 sm:mt-24 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono">Scroll</span>
          <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#B9A9FF]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
