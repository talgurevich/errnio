'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

// Portfolio item interface
interface PortfolioItem {
  name: string;
  url: string; // Website URL
  description: string; // Project description
}

export default function Portfolio() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems: PortfolioItem[] = [
    {
      name: t.portfolio.projects.applicationTracker.name,
      url: 'https://www.application-tracker.pro/',
      description: t.portfolio.projects.applicationTracker.description,
    },
    {
      name: t.portfolio.projects.hitQuote.name,
      url: 'https://hitquote.online/',
      description: t.portfolio.projects.hitQuote.description,
    },
    {
      name: t.portfolio.projects.trainerBooking.name,
      url: 'https://www.trainer-booking.com/',
      description: t.portfolio.projects.trainerBooking.description,
    },
    {
      name: t.portfolio.projects.wallAura.name,
      url: 'https://www.wallaura.art/',
      description: t.portfolio.projects.wallAura.description,
    },
    {
      name: t.portfolio.projects.resumeBot.name,
      url: 'https://chatgpt.com/g/g-6841a251d9c481919c9b8839dd1829d2-ms-l-hvpq-bvnh-qvrvt-khyym-b-bryt',
      description: t.portfolio.projects.resumeBot.description,
    },
    {
      name: t.portfolio.projects.oshaBustan.name,
      url: 'https://www.osha-bustan.co.il/',
      description: t.portfolio.projects.oshaBustan.description,
    },
  ];

  // Items per page based on screen size
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentItems = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return portfolioItems.slice(start, end);
  };

  return (
    <section id="portfolio" className="py-16 px-6 relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
          <span className="gradient-text neon-glow">{t.portfolio.title}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-12">
          {t.portfolio.subtitle}
        </p>

        {/* Main Content Container */}
        <div className="relative p-8 md:p-12 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-lg border-2 border-neon-blue/30 rounded-2xl shadow-2xl">
          {/* Accent corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-pink/50 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-pink/50 rounded-br-2xl"></div>

          {/* Carousel Container */}
          {portfolioItems.length > 0 ? (
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 border-2 border-neon-blue/50 hover:border-neon-pink/50 transition-all duration-300 hover:scale-110"
                aria-label="Previous projects"
              >
                <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 border-2 border-neon-blue/50 hover:border-neon-pink/50 transition-all duration-300 hover:scale-110"
                aria-label="Next projects"
              >
                <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Items */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {getCurrentItems().map((item, index) => {
                      const globalIndex = currentIndex * itemsPerPage + index;
                      return (
                        <a
                          key={globalIndex}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group"
                        >
                          {/* Card */}
                          <div className="relative h-full p-6 bg-black/60 backdrop-blur-sm border border-neon-blue/30 rounded-lg hover:border-neon-pink/50 transition-all duration-300 overflow-hidden flex flex-col min-h-[280px]">
                            {/* Number indicator */}
                            <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 border border-neon-blue/30">
                              <span className="text-xs font-bold gradient-text">{globalIndex + 1}</span>
                            </div>

                            {/* Accent line */}
                            <div className="w-12 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mb-4 rounded-full"></div>

                            {/* Project Name */}
                            <h3 className="text-2xl font-bold mb-3">
                              <span className="gradient-text">{item.name}</span>
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                              {item.description}
                            </p>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-neon-blue/30 via-neon-pink/30 to-transparent mb-4"></div>

                            {/* Link indicator */}
                            <div className="flex items-center gap-2 text-neon-blue group-hover:text-neon-pink transition-colors">
                              <span className="text-sm font-medium">{t.portfolio.visitProject}</span>
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-neon-pink/0 to-neon-blue/0 group-hover:from-neon-blue/5 group-hover:via-neon-pink/5 group-hover:to-neon-blue/5 transition-all duration-300 pointer-events-none rounded-lg"></div>
                          </div>
                        </a>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-neon-blue to-neon-pink w-8'
                        : 'bg-neon-blue/30 hover:bg-neon-blue/50'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Placeholder when no items
            <div className="text-center py-12">
              <p className="text-xl text-gray-400 mb-2">Portfolio items coming soon...</p>
              <p className="text-sm text-gray-500">
                Add your portfolio items in <code className="text-neon-blue">components/Portfolio.tsx</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
