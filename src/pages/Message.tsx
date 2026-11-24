import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import { StarField } from '../components/StarField';
import { CelestialIllustration } from '../components/CelestialIllustration';

export const Message: React.FC = () => {
  const { message } = siteData;

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden select-none">
      {/* Background Moon/Galaxy Landscape */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${message.bgImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/85 via-[#0B1026]/75 to-[#0B1026]/90" />

      {/* Subtle StarField */}
      <StarField density="medium" />

      {/* Floating 2D Moon Ornament */}
      <div className="absolute top-28 right-8 sm:right-24 opacity-60 pointer-events-none hidden sm:block animate-float">
        <CelestialIllustration type="moon" size={64} />
      </div>

      {/* Centered Minimal Message Container */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9A9FF]/10 border border-[#B9A9FF]/20 text-xs font-mono uppercase tracking-[0.25em] text-[#B9D9FF] mb-6"
        >
          <span>A Message For You</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl font-light text-white tracking-wide leading-tight"
        >
          {message.heading}
        </motion.h1>

        {/* Paragraphs with subtle staggered fade */}
        <div className="mt-8 sm:mt-10 space-y-6 text-white/80 font-light text-base sm:text-lg leading-relaxed">
          {message.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
              className="font-serif text-lg sm:text-xl text-[#F5F4FF]/90 font-light leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Single Minimal Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12"
        >
          <NavLink
            to="/memories"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B9A9FF]/20 via-[#B9D9FF]/20 to-[#E8D5A5]/20 hover:from-[#B9A9FF]/30 hover:to-[#E8D5A5]/30 text-white font-medium text-xs sm:text-sm tracking-[0.25em] uppercase border border-[#B9A9FF]/40 hover:border-[#E8D5A5]/60 transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>{message.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#E8D5A5] group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};
