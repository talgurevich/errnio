'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Technologies() {
  const { language } = useLanguage();

  const title = language === 'he' ? 'הטכנולוגיות שאנחנו אוהבים' : 'Technologies We Love';

  const technologies = [
    { name: 'Next.js', category: 'Frontend', logo: '/images/technologies/nextjs.svg' },
    { name: 'React', category: 'Frontend', logo: '/images/technologies/react.svg' },
    { name: 'Tailwind CSS', category: 'Styling', logo: '/images/technologies/tailwind.svg' },
    { name: 'Python', category: 'Backend', logo: '/images/technologies/python.svg' },
    { name: 'PostgreSQL', category: 'Database', logo: '/images/technologies/postgresql.svg' },
    { name: 'Supabase', category: 'Backend', logo: '/images/technologies/supabase.svg' },
    { name: 'Heroku', category: 'Infrastructure', logo: '/images/technologies/heroku.svg' },
    { name: 'Claude Code', category: 'AI Tools', logo: '/images/technologies/anthropic.svg' },
    { name: 'ChatGPT', category: 'AI Tools', logo: '/images/technologies/openai.svg' },
    { name: 'TypeScript', category: 'Language', logo: '/images/technologies/typescript.svg' },
    { name: 'Node.js', category: 'Backend', logo: '/images/technologies/nodejs.svg' },
    { name: 'Vercel', category: 'Infrastructure', logo: '/images/technologies/vercel.svg' },
  ];

  return (
    <section className="py-16 px-6 relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text neon-glow">{title}</span>
        </h2>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative p-6 bg-black/40 backdrop-blur-sm border border-neon-blue/20 rounded-xl hover:border-neon-pink/50 transition-all duration-300 hover:scale-105 text-center"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Technology Logo */}
              <div className="mb-4 flex items-center justify-center h-16">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="object-contain group-hover:scale-110 transition-transform duration-300 brightness-0 invert"
                />
              </div>

              {/* Technology Name */}
              <h3 className="text-xl font-bold mb-2">
                <span className="gradient-text">{tech.name}</span>
              </h3>

              {/* Category */}
              <p className="text-sm text-gray-400">{tech.category}</p>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-pink/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
