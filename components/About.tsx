'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
    },
    {
      title: t.about.values.speed.title,
      description: t.about.values.speed.description,
    },
    {
      title: t.about.values.quality.title,
      description: t.about.values.quality.description,
    },
  ];

  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          <span className="gradient-text neon-glow">{t.about.title}</span>
        </h2>

        {/* Main Content Container */}
        <div className="relative p-8 md:p-12 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-lg border-2 border-neon-blue/30 rounded-2xl shadow-2xl">
          {/* Accent corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-pink/50 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-pink/50 rounded-br-2xl"></div>

          {/* Description */}
          <div className="relative mb-12">
            <p className="text-xl md:text-2xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Divider Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent mb-12"></div>

          {/* Values Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span className="gradient-text">{t.about.values.title}</span>
          </h3>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="relative h-full p-6 bg-black/60 backdrop-blur-sm border border-neon-blue/30 rounded-lg hover:border-neon-pink/50 transition-all duration-300 overflow-hidden">
                  {/* Number indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 border border-neon-blue/30">
                    <span className="text-xs font-bold gradient-text">{index + 1}</span>
                  </div>

                  {/* Accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mb-4 rounded-full"></div>

                  <h4 className="text-xl font-bold mb-3">
                    <span className="gradient-text">{value.title}</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {value.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-neon-pink/0 to-neon-blue/0 group-hover:from-neon-blue/5 group-hover:via-neon-pink/5 group-hover:to-neon-blue/5 transition-all duration-300 pointer-events-none rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
