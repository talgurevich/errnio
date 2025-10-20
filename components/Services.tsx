'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.web.title,
      description: t.services.web.description,
      icon: '/images/services/web.svg',
    },
    {
      title: t.services.webapp.title,
      description: t.services.webapp.description,
      icon: '/images/services/webapp.svg',
    },
    {
      title: t.services.mobile.title,
      description: t.services.mobile.description,
      icon: '/images/services/mobile.svg',
    },
  ];

  return (
    <section id="services" className="pt-64 pb-16 px-6 relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          <span className="gradient-text neon-glow">{t.services.title}</span>
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-black/40 backdrop-blur-sm border border-neon-blue/20 rounded-xl hover:border-neon-pink/50 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center h-16">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain group-hover:scale-110 transition-transform duration-300 brightness-0 invert"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">{service.title}</span>
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-pink/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
