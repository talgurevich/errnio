'use client';

import React, { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/tal-gurevich-1/meet-with-me';

function openCalendly() {
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
}

export default function LandingCoursePage() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Segoe UI', 'Arial', sans-serif" }}>

      {/* ============================================= */}
      {/* HERO */}
      {/* ============================================= */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)', minHeight: '80vh' }}>
        {/* Subtle glow accents */}
        <div className="absolute rounded-full opacity-20 blur-3xl" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', top: '-10%', right: '-5%' }} />
        <div className="absolute rounded-full opacity-15 blur-3xl" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', bottom: '-10%', left: '-5%' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-5 py-16 md:py-24 text-center flex flex-col items-center justify-center" style={{ minHeight: '80vh' }}>
          {/* Logo */}
          <div className="mb-8">
            <a href="/">
              <img src="/images/logo-errnio.webp" alt="errnio" className="h-12 md:h-16" />
            </a>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.4)' }}>
            <span className="text-purple-300 text-sm font-medium">הדרכה אישית 1-על-1 בזום</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            קורס מזורז ב-Claude Code
            <br />
            <span style={{ color: '#a855f7' }}>שעה אחת. מאפס למקצוען.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            למדו לכתוב קוד עם AI בצורה הכי יעילה שיש.
            <br />
            <strong className="text-white">שיעור פרטי בזום, מותאם אישית לרמה שלכם.</strong>
          </p>

          {/* Price */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 mb-8">
            <span className="text-3xl font-extrabold text-white">300 ₪</span>
            <span className="text-blue-200 text-sm">בלבד</span>
          </div>

          {/* CTA */}
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-3 text-white font-bold text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: '#7c3aed' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            קבעו שיעור עכשיו
          </button>

          <p className="text-blue-300 text-sm mt-4">בחרו מועד שנוח לכם ונתראה בזום</p>
        </div>
      </section>

      {/* ============================================= */}
      {/* WHAT YOU'LL LEARN */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
            מה תלמדו בשעה אחת?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {[
              {
                icon: '🚀',
                title: 'מה זה Claude Code ולמה זה משנה הכל',
                desc: 'הבנה מעמיקה של הכלי ואיך הוא שונה מ-ChatGPT ו-Copilot',
              },
              {
                icon: '⚙️',
                title: 'התקנה והגדרות',
                desc: 'נגדיר את הסביבה שלכם מאפס — Terminal, API keys, והגדרות מתקדמות',
              },
              {
                icon: '💬',
                title: 'Prompting שעובד',
                desc: 'איך לתת הוראות ל-AI ולקבל קוד שעובד מהניסיון הראשון',
              },
              {
                icon: '🏗️',
                title: 'עבודה על פרויקט אמיתי',
                desc: 'Git, עריכת קבצים, דיבאגינג — נתרגל על הקוד שלכם או על פרויקט לדוגמה',
              },
              {
                icon: '📋',
                title: 'CLAUDE.md ו-Best Practices',
                desc: 'איך להגדיר פרויקט שעובד מעולה עם Claude Code לאורך זמן',
              },
              {
                icon: '🔌',
                title: 'טיפים מתקדמים',
                desc: 'MCP servers, hooks, אוטומציות ועוד כלים שיחסכו לכם שעות עבודה',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* WHO IS THIS FOR */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
            למי הקורס מתאים?
          </h2>

          <div className="grid gap-4">
            {[
              {
                title: 'כל מי שרוצה להיכנס לעולם ה-AI',
                desc: 'לא צריך להיות מתכנת — מספיק סקרנות ורצון ללמוד',
              },
              {
                title: 'יזמים ובעלי עסקים',
                desc: 'שרוצים לבנות דברים בעצמם בלי להיות תלויים במפתח',
              },
              {
                title: 'אנשים עם חשיבה טכנולוגית',
                desc: 'שמרגישים שה-AI משנה את הכללים ורוצים להיות חלק מזה',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-100">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#ede9fe' }}>
                  <svg className="w-5 h-5" fill="none" stroke="#7c3aed" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* HOW IT WORKS */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
            איך זה עובד?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'בוחרים מועד',
                desc: 'לוח זמנים גמיש — בחרו שעה שנוחה לכם',
              },
              {
                step: '2',
                title: 'מקבלים לינק לזום',
                desc: 'אישור ותזכורת נשלחים אוטומטית למייל',
              },
              {
                step: '3',
                title: 'שעה של הדרכה אישית',
                desc: 'שיעור 1-על-1 מותאם לרמה ולצרכים שלכם',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg" style={{ backgroundColor: '#7c3aed' }}>
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* BUILT WITH CLAUDE CODE — portfolio proof */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              אתרים שנבנו עם Claude Code
            </h2>
            <p className="text-gray-500">פרויקטים אמיתיים שבנינו — עם אותם הכלים שתלמדו בקורס</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Hit Quote', image: '/images/portfolio/hitquote.webp', url: 'https://hitquote.online/' },
              { name: 'Wall Aura', image: '/images/portfolio/wallaura.webp', url: 'https://www.wallaura.art/' },
              { name: 'תחנת הלחם עכו', image: '/images/portfolio/breadstation.webp', url: 'https://www.breadstationakko.co.il/' },
              { name: 'בוטיק יוסף', image: '/images/portfolio/boutique-yossef.webp', url: 'https://www.boutique-yossef.co.il/' },
              { name: 'FitnessPro', image: '/images/portfolio/trainer-booking.webp', url: 'https://trainer-booking.com/' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-32 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <span className="text-gray-800 font-medium text-xs md:text-sm">{item.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* ABOUT INSTRUCTOR */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
            מי מלמד?
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 inline-block text-right max-w-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">טל גורביץ׳</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              מפתח Full Stack ומייסד <a href="/" className="text-purple-600 font-medium hover:underline">errnio</a>.
              בונה אתרים ומערכות עם Claude Code על בסיס יומי, ומלווה עסקים בהטמעת AI בתהליכי הפיתוח שלהם.
            </p>
            <p className="text-gray-500 text-sm">
              בנה עשרות פרויקטים עם Claude Code — מחנויות מקוונות ועד מערכות ניהול מורכבות.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FAQ */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 px-5 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
            שאלות נפוצות
          </h2>

          <div className="grid gap-4">
            {[
              {
                q: 'מה צריך להכין לפני השיעור?',
                a: 'מחשב עם Terminal (Mac/Linux/Windows), חשבון Anthropic עם API key. אשלח הנחיות מפורטות אחרי ההרשמה.',
              },
              {
                q: 'איך משלמים?',
                a: 'העברה ב-Bit, PayBox או העברה בנקאית. פרטים נשלחים אחרי קביעת המועד.',
              },
              {
                q: 'האם אפשר להקליט את השיעור?',
                a: 'בטח! תוכלו להקליט את השיחה בזום לצפייה חוזרת.',
              },
              {
                q: 'מה אם אני צריך לבטל?',
                a: 'ביטול עד 24 שעות לפני — ללא עלות. פחות מ-24 שעות — נתאם מועד חדש.',
              },
              {
                q: 'אני לא מתכנת, זה מתאים לי?',
                a: 'בהחלט! השיעור מותאם אישית לרמה שלכם. כל מה שצריך זה סקרנות ורצון ללמוד.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FINAL CTA */}
      {/* ============================================= */}
      <section className="py-14 md:py-20 px-5" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
            מוכנים להתחיל?
          </h2>
          <p className="text-blue-200 text-lg mb-2">
            שעה אחת שתשנה את הדרך שלכם לכתוב קוד
          </p>
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-3xl font-extrabold text-white">300 ₪</span>
            <span className="text-blue-300 text-sm">| שיעור פרטי בזום</span>
          </div>
          <div>
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-3 text-white font-bold text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#7c3aed' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              קבעו שיעור עכשיו
            </button>
          </div>
          <p className="text-blue-300 text-sm mt-4">מקומות מוגבלים — הזמינו היום</p>
        </div>
      </section>

      {/* ============================================= */}
      {/* FOOTER */}
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
