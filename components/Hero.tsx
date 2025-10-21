'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/images/bg7.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text visibility - 50% opacity */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 max-w-6xl mx-auto text-center space-y-4 px-6 py-16"
      >
        <div className="animate-float neon-flicker mt-24 md:mt-32 lg:mt-40">
          <Image
            src="/images/logo.png"
            alt="errnio"
            width={600}
            height={310}
            className="mx-auto"
            priority
          />
        </div>

        <div className="animate-float" style={{ animationDelay: '0.5s' }}>
          <Image
            src="/images/logo5.png"
            alt="vibe dev shop"
            width={500}
            height={150}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="gradient-text neon-glow">
            {t.hero.title}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>

        <div className="pt-8 pb-24">
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
