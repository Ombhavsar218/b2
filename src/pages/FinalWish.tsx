import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';
import { StarField } from '../components/StarField';
import { CelestialIllustration } from '../components/CelestialIllustration';
import { launchCelestialFireworks } from '../utils/fireworks';

export const FinalWish: React.FC = () => {
  const { finalWish } = siteData;

  useEffect(() => {
    // Start celestial fireworks right when arriving on the page
    const timer = setTimeout(() => {
      launchCelestialFireworks();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-28 overflow-hidden select-none">
      {/* Background Moonlit Sky / Galaxy */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${finalWish.bgImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/85 via-[#0B1026]/75 to-[#0B1026]/90" />

      {/* Subtle StarField */}
      <StarField density="medium" />

      {/* Floating gentle Moon illustration */}
      <div className="absolute top-24 left-8 sm:left-24 opacity-60 pointer-events-none hidden sm:block animate-float">
        <CelestialIllustration type="moon" size={56} />
      </div>

      {/* Main Emotional Letter Card */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Animated small star / moon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center cursor-pointer"
          onClick={launchCelestialFireworks}
          title="Click to launch fireworks & sparkles"
        >
          <div className="w-12 h-12 rounded-full bg-[#E8D5A5]/10 border border-[#E8D5A5]/30 flex items-center justify-center hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-[#E8D5A5] animate-twinkle" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-wide leading-tight mb-8"
        >
          {finalWish.heading}
        </motion.h1>

        {/* Letter Paragraphs */}
        <div className="space-y-6 text-white/85 font-light text-base sm:text-lg leading-relaxed mb-8">
          {finalWish.paragraphs.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.15 }}
              className="font-serif text-lg sm:text-xl text-[#F5F4FF]/90 font-light leading-relaxed"
            >
              {para}
            </motion.p>
          ))}

          {/* Sibling Love Closing */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-serif text-2xl sm:text-3xl text-[#E8D5A5] italic font-normal pt-4"
          >
            {finalWish.closing}
          </motion.p>
        </div>

        {/* Bottom Note: MADE WITH LOVE, JUST FOR YOU */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="pt-10 border-t border-white/10 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-white/60">
            <Heart className="w-3.5 h-3.5 text-[#B9A9FF] fill-[#B9A9FF]/40 inline" />
            <span>{finalWish.footerNote}</span>
          </div>

          <button
            onClick={launchCelestialFireworks}
            className="mt-2 text-[11px] font-mono tracking-widest uppercase text-[#B9A9FF]/70 hover:text-[#E8D5A5] transition-colors cursor-pointer"
          >
            ✨ Celebrate with Sparkles & Fireworks ✨
          </button>
        </motion.div>
      </div>
    </div>
  );
};
