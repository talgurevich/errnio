'use client';

import React, { useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface PortfolioItem {
  name: string;
  url: string;
  description: string;
  image?: string;
  imageHeight?: number;
}

export function BrowserMockup({ url, image, imageHeight }: { url: string; image: string; imageHeight: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const displayUrl = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  // Viewport is 280px; scroll distance is proportional to image aspect ratio
  const viewportHeight = 280;
  // The image is displayed at full width (100%), so rendered height = imageHeight * (containerWidth / 1200)
  // Since containerWidth varies, we use percentage-based translateY
  // scrollPercent = ((imageHeight - viewportEquivalent) / imageHeight) * 100
  // viewportEquivalent in image pixels = 280 * (1200 / containerWidth) — but since img is width:100%,
  // we can compute: the img element's rendered height = (imageHeight/1200) * containerWidth
  // scroll distance in px = renderedHeight - viewportHeight
  // As a percentage of renderedHeight: ((renderedHeight - viewportHeight) / renderedHeight) * 100
  // This varies with container width, so we use a pixel-based approach with CSS calc isn't straightforward.
  // Instead, use a fixed translateY in pixels based on a reasonable card width (~350px).
  // Actually, the cleanest approach: use object-position animation.
  // Let's use top/transform approach: position the image absolutely, and translate it up.
  // scrollDistance = renderedHeight - viewportHeight. At 350px card width: renderedHeight = imageHeight * 350/1200
  // For consistent scroll speed (~400px/s), duration = scrollDistance / 400

  const getScrollStyle = useCallback((): React.CSSProperties => {
    // Estimate rendered height at a typical card width
    const estimatedCardWidth = 350;
    const renderedHeight = (imageHeight / 1200) * estimatedCardWidth;
    const scrollDistance = Math.max(0, renderedHeight - viewportHeight);
    const duration = scrollDistance / 400; // ~400px per second

    if (isHovered) {
      return {
        transform: `translateY(-${scrollDistance}px)`,
        transition: `transform ${duration.toFixed(1)}s linear`,
      };
    }
    return {
      transform: 'translateY(0)',
      transition: 'transform 0.6s ease-out',
    };
  }, [isHovered, imageHeight]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2e] rounded-t-lg border-b border-white/10">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        {/* Address bar */}
        <div className="flex-1 mx-2 px-3 py-1 bg-black/40 rounded-md text-[11px] text-gray-400 truncate font-mono">
          {displayUrl}
        </div>
      </div>

      {/* Viewport */}
      <div
        className="relative overflow-hidden bg-gray-900"
        style={{ height: viewportHeight }}
      >
        <img
          ref={imgRef}
          src={image}
          alt=""
          loading="lazy"
          className="portfolio-screenshot w-full absolute top-0 left-0"
          style={getScrollStyle()}
        />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

function ChatGPTFallback() {
  return (
    <div>
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2e] rounded-t-lg border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 bg-black/40 rounded-md text-[11px] text-gray-400 truncate font-mono">
          chatgpt.com
        </div>
      </div>

      {/* Content area */}
      <div
        className="relative flex flex-col items-center justify-center bg-gray-900"
        style={{ height: 280 }}
      >
        {/* Chat bubble icon */}
        <svg className="w-16 h-16 text-[#10a37f] mb-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4091-.6765zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0974-2.3616l2.603-1.5018 2.6032 1.5018v3.0036l-2.6032 1.5018-2.603-1.5018z" />
        </svg>
        <span className="text-gray-300 font-medium text-sm">ChatGPT GPT</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { t } = useLanguage();

  const portfolioItems: PortfolioItem[] = [
    {
      name: t.portfolio.projects.hitQuote.name,
      url: 'https://hitquote.online/',
      description: t.portfolio.projects.hitQuote.description,
      image: '/images/portfolio/hitquote.webp',
      imageHeight: 6626,
    },
    {
      name: t.portfolio.projects.wallAura.name,
      url: 'https://www.wallaura.art/',
      description: t.portfolio.projects.wallAura.description,
      image: '/images/portfolio/wallaura.webp',
      imageHeight: 6822,
    },
    {
      name: t.portfolio.projects.resumeBot.name,
      url: 'https://chatgpt.com/g/g-6841a251d9c481919c9b8839dd1829d2-ms-l-hvpq-bvnh-qvrvt-khyym-b-bryt',
      description: t.portfolio.projects.resumeBot.description,
    },
    {
      name: t.portfolio.projects.breadstationAkko.name,
      url: 'https://www.breadstationakko.co.il/',
      description: t.portfolio.projects.breadstationAkko.description,
      image: '/images/portfolio/breadstation.webp',
      imageHeight: 4263,
    },
    {
      name: t.portfolio.projects.boutiqueYossef.name,
      url: 'https://www.boutique-yossef.co.il/',
      description: t.portfolio.projects.boutiqueYossef.description,
      image: '/images/portfolio/boutique-yossef.webp',
      imageHeight: 5106,
    },
    {
      name: t.portfolio.projects.trainerBooking.name,
      url: 'https://trainer-booking.com/',
      description: t.portfolio.projects.trainerBooking.description,
      image: '/images/portfolio/trainer-booking.webp',
      imageHeight: 2425,
    },
  ];

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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative h-full bg-black/60 backdrop-blur-sm border border-neon-blue/30 rounded-lg hover:border-neon-pink/50 transition-all duration-300 overflow-hidden flex flex-col">
                {/* Browser Mockup / Fallback */}
                {item.image && item.imageHeight ? (
                  <BrowserMockup url={item.url} image={item.image} imageHeight={item.imageHeight} />
                ) : (
                  <ChatGPTFallback />
                )}

                {/* Text content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="gradient-text">{item.name}</span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-neon-blue/30 via-neon-pink/30 to-transparent mb-3" />

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 text-neon-blue group-hover:text-neon-pink transition-colors">
                    <span className="text-sm font-medium">{t.portfolio.visitProject}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-neon-pink/0 to-neon-blue/0 group-hover:from-neon-blue/5 group-hover:via-neon-pink/5 group-hover:to-neon-blue/5 transition-all duration-300 pointer-events-none rounded-lg" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
