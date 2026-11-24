import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { StarField } from '../components/StarField';
import { useLightbox } from '../context/LightboxContext';
import type { DreamCar } from '../types';

export const ThingsYouLove: React.FC = () => {
  const { thingsYouLove } = siteData;
  const { openLightbox } = useLightbox();

  const handleOpenCar = (index: number) => {
    const formatted = thingsYouLove.cars.map((car: DreamCar) => ({
      src: car.image,
      title: car.name,
      caption: car.tagline
    }));
    openLightbox(formatted, index);
  };

  return (
    <div className="relative min-h-screen px-6 py-28 overflow-hidden select-none">
      {/* Background: Range Rover on scenic road */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${thingsYouLove.bgImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/90 via-[#0B1026]/80 to-[#0B1026]/95" />

      {/* Subtle StarField */}
      <StarField density="low" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9A9FF]/10 border border-[#B9A9FF]/20 text-xs font-mono uppercase tracking-[0.25em] text-[#B9D9FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#E8D5A5]" />
            <span>Passions & Machines</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-wide leading-tight">
            {thingsYouLove.heading}
          </h1>

          <p className="font-serif text-base sm:text-lg text-[#F5F4FF]/85 font-light leading-relaxed">
            “{thingsYouLove.message}”
          </p>
        </div>

        {/* Small Photographic Section of Dream Cars (Minimal, No Dealership or Specs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {thingsYouLove.cars.map((car: DreamCar, idx: number) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => handleOpenCar(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#111831]/60 backdrop-blur-md border border-white/10 hover:border-[#E8D5A5]/40 transition-all duration-300 cursor-pointer h-60 sm:h-64 flex flex-col justify-end p-5 shadow-xl hover:shadow-[#E8D5A5]/10"
            >
              <img
                src={car.image}
                alt={car.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-[#0B1026]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              <div className="relative z-10 space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#E8D5A5] transition-colors">
                  {car.name}
                </h3>
                {car.tagline && (
                  <p className="text-xs text-white/70 font-light line-clamp-1">
                    {car.tagline}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <div className="pt-4 text-center">
          <NavLink
            to="/road-ahead"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B9A9FF]/20 via-[#B9D9FF]/20 to-[#E8D5A5]/20 hover:from-[#B9A9FF]/30 hover:to-[#E8D5A5]/30 text-white font-medium text-xs sm:text-sm tracking-[0.25em] uppercase border border-[#B9A9FF]/40 hover:border-[#E8D5A5]/60 transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>{thingsYouLove.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#E8D5A5] group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
