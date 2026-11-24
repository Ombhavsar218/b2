import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { StarField } from '../components/StarField';

export const RoadAhead: React.FC = () => {
  const { roadAhead } = siteData;

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-28 overflow-hidden select-none">
      {/* Background scenic mountain road / sunset */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${roadAhead.bgImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/90 via-[#0B1026]/80 to-[#0B1026]/95" />

      {/* Subtle StarField */}
      <StarField density="medium" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9A9FF]/10 border border-[#B9A9FF]/20 text-xs font-mono uppercase tracking-[0.25em] text-[#B9D9FF] mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E8D5A5]" />
          <span>The Road Ahead</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-wide leading-tight mb-12"
        >
          {roadAhead.heading}
        </motion.h1>

        {/* Sequential Messages (one after another) */}
        <div className="space-y-4 sm:space-y-5 mb-12">
          {roadAhead.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 + idx * 0.15 }}
              className="flex items-center justify-center gap-3 text-lg sm:text-2xl font-serif text-[#F5F4FF]/90 font-light"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5A5]" />
              <span>{step}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5A5]" />
            </motion.div>
          ))}
        </div>

        {/* Closing Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="font-serif italic text-lg sm:text-2xl text-[#E8D5A5] max-w-xl font-light leading-relaxed mb-12"
        >
          “{roadAhead.closingQuote}”
        </motion.p>

        {/* Button to Final Birthday Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <NavLink
            to="/final-wish"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B9A9FF]/20 via-[#B9D9FF]/20 to-[#E8D5A5]/20 hover:from-[#B9A9FF]/30 hover:to-[#E8D5A5]/30 text-white font-medium text-xs sm:text-sm tracking-[0.25em] uppercase border border-[#B9A9FF]/40 hover:border-[#E8D5A5]/60 transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>{roadAhead.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#E8D5A5] group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};
