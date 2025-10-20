'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => setLanguage(language === 'he' ? 'en' : 'he');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleMenu}
          className="group relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-black/50 backdrop-blur-md border border-neon-blue/30 rounded-lg hover:border-neon-pink/50 transition-all duration-300"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-neon-blue to-neon-pink transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Language Toggle */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-black/50 backdrop-blur-md border border-neon-blue/30 rounded-lg hover:border-neon-pink/50 transition-all duration-300 text-sm font-medium"
        >
          <span className="gradient-text">{language === 'he' ? 'EN' : 'עב'}</span>
        </button>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-8">
          <MenuItem
            onClick={() => scrollToSection('services')}
            delay={0.1}
            isOpen={isOpen}
          >
            {t.nav.services}
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection('about')}
            delay={0.2}
            isOpen={isOpen}
          >
            {t.nav.about}
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection('portfolio')}
            delay={0.3}
            isOpen={isOpen}
          >
            {t.nav.portfolio}
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection('approach')}
            delay={0.4}
            isOpen={isOpen}
          >
            {t.nav.approach}
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection('contact')}
            delay={0.5}
            isOpen={isOpen}
          >
            {t.nav.contact}
          </MenuItem>
        </nav>
      </div>
    </>
  );
}

interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
  delay: number;
  isOpen: boolean;
}

function MenuItem({ children, onClick, delay, isOpen }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`text-4xl md:text-6xl font-bold hover:scale-110 transition-all duration-300 ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{
        transitionDelay: isOpen ? `${delay}s` : '0s',
      }}
    >
      <span className="gradient-text neon-glow">{children}</span>
    </button>
  );
}
