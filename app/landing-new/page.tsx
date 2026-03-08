'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const WHATSAPP_NUMBER = '972504425322';
const WHATSAPP_MESSAGE = encodeURIComponent('היי, אשמח לשמוע על בניית אתר לעסק שלי');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const portfolioItems = [
  {
    name: 'Wall Aura',
    description: 'חנות מקוונת למוצרי אמנות מתכת לקיר',
    image: '/images/portfolio/wallaura.webp',
    url: 'https://www.wallaura.art/',
  },
  {
    name: 'תחנת הלחם עכו',
    description: 'אתר הזמנות למאפייה ואירוח',
    image: '/images/portfolio/breadstation.webp',
    url: 'https://www.breadstationakko.co.il/',
  },
  {
    name: 'בוטיק יוסף שטיחים',
    description: 'חנות מקוונת לשטיחים ועיצוב הבית',
    image: '/images/portfolio/boutique-yossef.webp',
    url: 'https://www.boutique-yossef.co.il/',
  },
  {
    name: 'Hit Quote',
    description: 'מערכת ניהול הצעות מחיר לעסקים',
    image: '/images/portfolio/hitquote.webp',
    url: 'https://hitquote.online/',
  },
  {
    name: 'FitnessPro',
    description: 'פלטפורמת הזמנות למאמני כושר',
    image: '/images/portfolio/trainer-booking.webp',
    url: 'https://trainer-booking.com/',
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export default function LandingNewPage() {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setError(false);

    try {
      const serviceId = 'service_lp16xmn';
      const templateId = 'template_n9zej2e';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(serviceId, templateId, {
        from_name: 'ליד מדף נחיתה חדש',
        from_email: '',
        from_phone: phone,
        message: 'ליד חדש מדף נחיתה - בניית אתרים. טלפון: ' + phone,
        to_name: 'errnio',
      }, publicKey);

      // Google Ads conversion tracking
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-1062478822/VDWmCM6jjdYaEObH0PoD',
        });
      }

      setSubmitted(true);
      setPhone('');
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Segoe UI', 'Arial', sans-serif" }}>
      {/* Mesh gradient animation keyframes */}
      <style>{`
        @keyframes mesh-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 40px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.95); }
        }
        @keyframes mesh-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(1.1); }
        }
        @keyframes mesh-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, -20px) scale(1.15); }
          66% { transform: translate(30px, 40px) scale(0.9); }
        }
      `}</style>

      {/* ============================================= */}
      {/* HERO SECTION */}
      {/* ============================================= */}
      <section className="relative overflow-hidden" style={{ background: '#0f172a', minHeight: '85vh' }}>
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-workspace.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'translateZ(0)' }}
            ref={(el) => {
              if (!el) return;
              const handler = () => {
                const scroll = window.scrollY;
                const sectionHeight = el.closest('section')?.offsetHeight || 1;
                if (scroll <= sectionHeight) {
                  el.style.transform = `translateY(${scroll * 0.4}px)`;
                }
              };
              window.addEventListener('scroll', handler, { passive: true });
              (el as any)._cleanup = () => window.removeEventListener('scroll', handler);
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(30,41,59,0.80) 100%)' }} />
          {/* Animated blobs blended on top */}
          <div
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{
              width: '600px', height: '600px',
              background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
              top: '-10%', right: '-10%',
              animation: 'mesh-float-1 8s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full opacity-15 blur-3xl"
            style={{
              width: '500px', height: '500px',
              background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
              bottom: '-15%', left: '-5%',
              animation: 'mesh-float-2 10s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              width: '400px', height: '400px',
              background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
              top: '30%', left: '40%',
              animation: 'mesh-float-3 12s ease-in-out infinite',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 py-16 md:py-24 text-center flex flex-col items-center justify-center" style={{ minHeight: '85vh' }}>
          {/* Logo */}
          <div className="mb-10">
            <img src="/images/logo-errnio.webp" alt="errnio" className="h-16 md:h-24" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            צריכים אתר לעסק?
            <br />
            <span style={{ color: '#38bdf8' }}>תנו לנו 30 שניות.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            אתר מקצועי עם מערכת ניהול, אחסון ותמיכה
            <br />
            <strong className="text-white">מנוי חודשי פשוט. ללא עלות הקמה — במחיר שיפתיע אתכם.</strong>
          </p>

          {/* Trust badge */}
          <p className="text-sm text-blue-200 mb-10">
            בנינו אתרים לעסקים בכל הארץ — מסעדות, חנויות, נותני שירות ועוד
          </p>

          {/* Primary CTA: WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-bold text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: '#25D366' }}
          >
            <WhatsAppIcon className="w-7 h-7" />
            דברו איתנו בוואטסאפ
          </a>

          <p className="text-blue-300 text-sm mt-4">מענה תוך דקות, גם בערב</p>

          {/* Scroll hint */}
          <div className="mt-12 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* VALUE PROPS — 3 quick bullets */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: 'מהיר ויעיל',
                desc: 'אתר מוכן תוך ימים — לא חודשים. אנחנו עובדים מהר כי אנחנו משתמשים בטכנולוגיה הכי מתקדמת.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: 'מחיר הוגן, בלי הפתעות',
                desc: 'מנוי חודשי פשוט וללא התחייבות. כולל אחסון, תחזוקה, SSL וגיבויים. ללא עלות הקמה.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
                title: 'ליווי אישי',
                desc: 'אנחנו לא נעלמים אחרי ההשקה. תמיכה טכנית, עדכונים ושיפורים — אנחנו תמיד כאן.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* PORTFOLIO SECTION */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
              אתרים שבנינו ללקוחות שלנו
            </h2>
            <p className="text-gray-500 text-lg">כל אתר מותאם אישית, מעוצב ובנוי מאפס</p>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {portfolioItems.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Screenshot */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-lg text-sm">
                      צפה באתר
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Mid-section CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4 text-lg">רוצים אתר כזה לעסק שלכם?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#25D366' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              בואו נדבר על זה
            </a>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* REVIEWS — Google reviews */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm">ב-Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: 'מסע אל האופק',
                rating: 5,
                text: 'טל בנה לנו אתר נפלא לעמותה של מסע אל האופק - נותן שירות מצוין ועיצוב נדיר!',
              },
              {
                name: 'Wall Aura',
                rating: 5,
                text: 'בנו לנו אתר מכירות מעולה שעדיין עובד חזק היום! שירות מצוין.',
              },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#2563eb' }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-gray-400 text-xs">ביקורת מ-Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* WHAT YOU GET — compact checklist */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
            מה כולל השירות?
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              'אתר מותאם אישית ומעוצב',
              'מותאם למובייל (רספונסיבי)',
              'מערכת ניהול תוכן מלאה',
              'אחסון מאובטח + SSL',
              'גיבויים אוטומטיים',
              'תמיכה טכנית שוטפת',
              'אופטימיזציה ל-Google',
              'עדכונים ושיפורים שוטפים',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                  <svg className="w-4 h-4" fill="none" stroke="#16a34a" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FINAL CTA — Phone form + WhatsApp */}
      {/* ============================================= */}
      <section id="contact" className="py-14 md:py-20 px-5" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
            מוכנים להתחיל?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            השאירו מספר טלפון ונחזור אליכם תוך 5 דקות
          </p>

          {/* Phone-only form */}
          {!submitted ? (
            <form onSubmit={handlePhoneSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <div className="flex-1 relative">
                <PhoneIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="מספר הטלפון שלכם"
                  required
                  className="w-full pr-10 pl-4 py-4 rounded-xl text-gray-900 text-base border-0 outline-none focus:ring-2 focus:ring-blue-400"
                  style={{ direction: 'ltr', textAlign: 'right' }}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 whitespace-nowrap"
                style={{ backgroundColor: '#2563eb' }}
              >
                {isSubmitting ? 'שולח...' : 'חזרו אליי'}
              </button>
            </form>
          ) : (
            <div className="mb-6 px-6 py-4 rounded-xl text-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.4)' }}>
              <p className="text-green-300 font-bold text-lg">תודה! נחזור אליכם בהקדם.</p>
            </div>
          )}

          {error && (
            <p className="text-red-300 text-sm mb-4">משהו השתבש, נסו שוב או שלחו הודעה בוואטסאפ</p>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 max-w-md mx-auto mb-6">
            <div className="flex-1 h-px bg-blue-800" />
            <span className="text-blue-400 text-sm font-medium">או</span>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: '#25D366' }}
          >
            <WhatsAppIcon className="w-6 h-6" />
            שלחו הודעה בוואטסאפ
          </a>

          <p className="text-blue-300 text-sm mt-3">מענה מהיר גם בשעות הערב</p>
        </div>
      </section>

      {/* ============================================= */}
      {/* MINIMAL FOOTER — legal only, no distractions */}
      {/* ============================================= */}
      <footer className="py-6 px-5 bg-gray-900 text-center">
        <p className="text-gray-500 text-xs">
          כל הזכויות שמורות &copy; {new Date().getFullYear()} ארניו טכנולוגיות בע&quot;מ
          {' | '}
          <a href="/privacy" className="underline hover:text-gray-300 transition-colors">מדיניות פרטיות</a>
          {' | '}
          <a href="/terms" className="underline hover:text-gray-300 transition-colors">תנאי שימוש</a>
        </p>
      </footer>
    </div>
  );
}
