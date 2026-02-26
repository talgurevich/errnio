'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { BrowserMockup } from '@/components/Portfolio';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

interface PortfolioHighlightsProps {
  title: string;
  viewAllText: string;
}

export default function PortfolioHighlights({ title, viewAllText }: PortfolioHighlightsProps) {
  const { t } = useLanguage();

  const projects = [
    {
      name: t.portfolio.projects.hitQuote.name,
      description: t.portfolio.projects.hitQuote.description,
      url: 'https://hitquote.online/',
      image: '/images/portfolio/hitquote.webp',
      imageHeight: 6626,
    },
    {
      name: t.portfolio.projects.wallAura.name,
      description: t.portfolio.projects.wallAura.description,
      url: 'https://www.wallaura.art/',
      image: '/images/portfolio/wallaura.webp',
      imageHeight: 6822,
    },
    {
      name: t.portfolio.projects.boutiqueYossef.name,
      description: t.portfolio.projects.boutiqueYossef.description,
      url: 'https://www.boutique-yossef.co.il/',
      image: '/images/portfolio/boutique-yossef.webp',
      imageHeight: 5106,
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          <span className="gradient-text neon-glow">{title}</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
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
              <div className="relative h-full bg-black/60 backdrop-blur-sm border border-neon-blue/30 rounded-xl hover:border-neon-pink/50 transition-all duration-300 overflow-hidden flex flex-col">
                <BrowserMockup url={project.url} image={project.image} imageHeight={project.imageHeight} />

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="gradient-text">{project.name}</span>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="h-px bg-gradient-to-r from-neon-blue/30 via-neon-pink/30 to-transparent my-3" />

                  <div className="flex items-center gap-2 text-neon-blue group-hover:text-neon-pink transition-colors">
                    <span className="text-sm font-medium">{t.portfolio.visitProject}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-pink/0 group-hover:from-neon-blue/5 group-hover:to-neon-pink/5 transition-all duration-300 pointer-events-none rounded-xl" />
              </div>
            </motion.a>
          ))}
        </div>

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
            {viewAllText}
            <svg className="w-5 h-5" fill="none" stroke="url(#arrow-gradient-ph)" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="arrow-gradient-ph" x1="0%" y1="0%" x2="100%" y2="0%">
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
  );
}
