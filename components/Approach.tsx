'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Approach() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-16 px-6 relative">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
          <span className="gradient-text neon-glow">{t.approach.title}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-12 leading-relaxed">
          {t.approach.subtitle}
        </p>

        {/* Approach Cards */}
        <div className="space-y-12">
          {/* Iterative Development */}
          <div className="group p-8 bg-black/40 backdrop-blur-sm border border-neon-blue/20 rounded-xl hover:border-neon-pink/50 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-6">
              <span className="gradient-text">{t.approach.iterative.title}</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.approach.iterative.description}
            </p>
          </div>

          {/* Product Management */}
          <div className="group p-8 bg-black/40 backdrop-blur-sm border border-neon-pink/20 rounded-xl hover:border-neon-blue/50 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-6">
              <span className="gradient-text">{t.approach.product.title}</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.approach.product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
