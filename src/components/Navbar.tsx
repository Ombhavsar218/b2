import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'MESSAGE', path: '/message' },
  { name: 'MEMORIES', path: '/memories' },
  { name: 'THINGS YOU LOVE', path: '/things-you-love' },
  { name: 'ROAD AHEAD', path: '/road-ahead' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1026]/80 backdrop-blur-md py-3.5 border-b border-[#B9A9FF]/10 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Simple Minimal Brand */}
        <NavLink to="/" className="flex items-center gap-2 group text-decoration-none">
          <Sparkles className="w-4 h-4 text-[#E8D5A5] group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-serif tracking-[0.2em] text-xs sm:text-sm text-white/90 uppercase font-light">
            A Universe Made for You
          </span>
        </NavLink>

        {/* Desktop Links: Simple text links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs tracking-[0.2em] uppercase font-light transition-colors duration-200 ${
                  isActive
                    ? 'text-[#E8D5A5] font-normal border-b border-[#E8D5A5]/60 pb-0.5'
                    : 'text-white/60 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          className="md:hidden p-1.5 text-white/70 hover:text-white cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1026]/95 backdrop-blur-xl border-b border-[#B9A9FF]/20 px-6 py-6 mt-2 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block text-xs tracking-[0.2em] uppercase py-2 transition-colors ${
                  isActive ? 'text-[#E8D5A5] font-medium' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
