'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Rain from '@/components/Rain';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function LandingCrmPage() {
  const { t, language, setLanguage } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      title: t.landingCrm.features.contacts.title,
      description: t.landingCrm.features.contacts.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: t.landingCrm.features.pipeline.title,
      description: t.landingCrm.features.pipeline.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      ),
    },
    {
      title: t.landingCrm.features.analytics.title,
      description: t.landingCrm.features.analytics.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: t.landingCrm.features.custom.title,
      description: t.landingCrm.features.custom.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
  ];

  const portfolioHighlights = [
    {
      name: t.portfolio.projects.oshaBustan.name,
      description: t.portfolio.projects.oshaBustan.description,
      url: 'https://www.osha-bustan.co.il/',
    },
    {
      name: t.portfolio.projects.breadstationAkko.name,
      description: t.portfolio.projects.breadstationAkko.description,
      url: 'https://www.breadstationakko.co.il/',
    },
    {
      name: t.portfolio.projects.hitQuote.name,
      description: t.portfolio.projects.hitQuote.description,
      url: 'https://hitquote.online/',
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
              {t.landingCrm.hero.title}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            {t.landingCrm.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-5 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">{t.landingCrm.hero.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===== WHAT'S INCLUDED SECTION ===== */}
      <section className="py-20 px-6 relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-14"
          >
            <span className="gradient-text neon-glow">{t.landingCrm.features.title}</span>
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
            <span className="gradient-text neon-glow">{t.landingCrm.whyUs.title}</span>
          </motion.h2>

          {/* Value pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {t.landingCrm.whyUs.pills.map((pill: string, index: number) => (
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
            {t.landingCrm.whyUs.description}
          </motion.p>
        </div>
      </section>

      {/* ===== PORTFOLIO HIGHLIGHTS SECTION ===== */}
      <section className="py-20 px-6 relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-14"
          >
            <span className="gradient-text neon-glow">{t.landingCrm.portfolioHighlights.title}</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioHighlights.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-black/60 backdrop-blur-sm border border-neon-blue/30 rounded-xl hover:border-neon-pink/50 transition-all duration-300 flex flex-col min-h-[200px]">
                  {/* Accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mb-4 rounded-full" />

                  {/* Project Name */}
                  <h3 className="text-xl font-bold mb-3">
                    <span className="gradient-text">{project.name}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-neon-blue/30 via-neon-pink/30 to-transparent my-4" />

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 text-neon-blue group-hover:text-neon-pink transition-colors">
                    <span className="text-sm font-medium">{t.portfolio.visitProject}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-pink/0 group-hover:from-neon-blue/5 group-hover:to-neon-pink/5 transition-all duration-300 pointer-events-none rounded-xl" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <a
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-lg gradient-text hover:opacity-80 transition-opacity"
            >
              {t.landingCrm.portfolioHighlights.viewAll}
              <svg className="w-5 h-5" fill="none" stroke="url(#arrow-gradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--neon-blue)" />
                    <stop offset="100%" stopColor="var(--neon-pink)" />
                  </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <Contact />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
