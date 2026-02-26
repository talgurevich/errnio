'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Rain from '@/components/Rain';
import PortfolioHighlights from '@/components/PortfolioHighlights';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function LandingEcommercePage() {
  const { t, language, setLanguage } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      title: t.landingEcommerce.features.catalog.title,
      description: t.landingEcommerce.features.catalog.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: t.landingEcommerce.features.payments.title,
      description: t.landingEcommerce.features.payments.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: t.landingEcommerce.features.orders.title,
      description: t.landingEcommerce.features.orders.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      title: t.landingEcommerce.features.design.title,
      description: t.landingEcommerce.features.design.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Rain />

      {/* Language Toggle */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
          className="px-4 py-2 bg-black/50 backdrop-blur-md border border-neon-blue/30 rounded-lg hover:border-neon-pink/50 transition-all duration-300 text-sm font-medium"
        >
          <span className="gradient-text">{language === 'he' ? 'EN' : 'עב'}</span>
        </button>
      </div>

      {/* ===== HERO / OFFER SECTION ===== */}
      <section className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden py-20">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg7.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6 px-6"
        >
          {/* Logo */}
          <a href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="errnio"
              width={280}
              height={145}
              className="mx-auto neon-flicker"
              priority
            />
          </a>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text neon-glow">
              {t.landingEcommerce.hero.title}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            {t.landingEcommerce.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-5 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">{t.landingEcommerce.hero.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===== PORTFOLIO HIGHLIGHTS SECTION ===== */}
      <PortfolioHighlights
        title={t.landingEcommerce.portfolioHighlights.title}
        viewAllText={t.landingEcommerce.portfolioHighlights.viewAll}
      />

      {/* ===== WHAT'S INCLUDED SECTION ===== */}
      <section className="py-20 px-6 relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-14"
          >
            <span className="gradient-text neon-glow">{t.landingEcommerce.features.title}</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 bg-black/60 backdrop-blur-sm border border-neon-blue/30 rounded-xl hover:border-neon-pink/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 border border-neon-blue/30 mb-4 text-neon-blue group-hover:text-neon-pink transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">
                  <span className="gradient-text">{feature.title}</span>
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-pink/0 group-hover:from-neon-blue/5 group-hover:to-neon-pink/5 transition-all duration-300 pointer-events-none rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="py-20 px-6 relative">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="gradient-text neon-glow">{t.landingEcommerce.whyUs.title}</span>
          </motion.h2>

          {/* Value pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {t.landingEcommerce.whyUs.pills.map((pill: string, index: number) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-neon-blue/10 to-neon-pink/10 border border-neon-blue/40 rounded-full text-lg font-medium gradient-text hover:border-neon-pink/60 transition-all duration-300"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Trust paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            {t.landingEcommerce.whyUs.description}
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <Contact />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
