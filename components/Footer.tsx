'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-12 px-6 border-t border-neon-blue/20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Tagline */}
          <div className="col-span-full md:col-span-1">
            <p className="text-lg gradient-text font-medium italic">
              {Array.isArray(t.footer.tagline) ? (
                <>
                  {t.footer.tagline[0]}
                  <br />
                  {t.footer.tagline[1]}
                </>
              ) : (
                t.footer.tagline
              )}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">{t.footer.links}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-neon-blue transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-neon-blue transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#approach" className="text-gray-300 hover:text-neon-blue transition-colors">
                  {t.nav.approach}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-neon-blue transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-neon-pink transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-neon-pink transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">{t.footer.contact}</h3>
            <div className="space-y-4">
              <div className="text-gray-300">
                <span className="font-medium gradient-text">{t.footer.location}:</span>
                <br />
                {t.footer.locationText}
              </div>

              {/* Google Maps Embed */}
              <div className="border border-neon-blue/30 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53418.88795486087!2d35.44866437832029!3d32.99019817431647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dbb9f4ce0e97b%3A0x6a47d5923e60e3a7!2sBustan%20HaGalil!5e0!3m2!1sen!2sil!4v1710000000000!5m2!1sen!2sil"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <a
                href="https://www.linkedin.com/in/talgurevich/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-neon-blue transition-colors inline-flex items-center gap-2"
              >
                {t.footer.linkedin}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-neon-blue/10 space-y-2">
          <p className="text-gray-400">
            {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </p>
          <p className="text-gray-500 text-sm">
            Photo by{' '}
            <a
              href="https://unsplash.com/@timovaknar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-blue transition-colors underline"
            >
              Timo Wagner
            </a>
            {' '}on{' '}
            <a
              href="https://unsplash.com/photos/lighted-lamp-posts-during-nighttime-RydQGTPRELQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-blue transition-colors underline"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
