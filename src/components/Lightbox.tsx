import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';

export const Lightbox: React.FC = () => {
  const { isOpen, currentIndex, images, closeLightbox, nextImage, prevImage } = useLightbox();

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 select-none"
        onClick={closeLightbox}
      >
        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/80 z-10 pointer-events-none">
          <span className="text-xs uppercase tracking-widest font-mono bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-auto">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer pointer-events-auto backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prev Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Image"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-sm z-10 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Image"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-sm z-10 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image & Caption Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.title || 'Photograph'}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
          />
          {(current.title || current.caption) && (
            <div className="mt-4 text-center max-w-xl">
              {current.title && (
                <h4 className="text-white font-serif text-lg md:text-xl font-medium tracking-wide">
                  {current.title}
                </h4>
              )}
              {current.caption && (
                <p className="text-white/70 text-sm mt-1 font-light leading-relaxed">
                  {current.caption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
