import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export interface LightboxImage {
  src: string;
  title?: string;
  caption?: string;
}

interface LightboxContextType {
  isOpen: boolean;
  currentIndex: number;
  images: LightboxImage[];
  openLightbox: (images: LightboxImage[] | string[], startIndex?: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((imgs: LightboxImage[] | string[], startIndex = 0) => {
    const formatted: LightboxImage[] = imgs.map((img) =>
      typeof img === 'string' ? { src: img } : img
    );
    setImages(formatted);
    setCurrentIndex(startIndex);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  return (
    <LightboxContext.Provider
      value={{ isOpen, currentIndex, images, openLightbox, closeLightbox, nextImage, prevImage }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
