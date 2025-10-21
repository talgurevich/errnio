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

              <div>
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

              <div>
                <a
                  href="https://wa.me/972504425322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-500 transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
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
