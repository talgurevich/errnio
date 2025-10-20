'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import HamburgerMenu from '@/components/HamburgerMenu';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  const { t, language } = useLanguage();

  const content = {
    he: {
      title: 'מדיניות פרטיות',
      lastUpdated: 'עדכון אחרון',
      sections: [
        {
          title: 'מבוא',
          content: 'ארניו טכנולוגיות בע"מ ("החברה", "אנחנו") מחויבת להגן על פרטיותך. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך בעת שימוש באתר שלנו או בשירותים שלנו.',
        },
        {
          title: 'מידע שאנו אוספים',
          content: 'אנו עשויים לאסוף מידע אישי שאתה מספק לנו ישירות, כגון:\n• שם מלא\n• כתובת דוא"ל\n• מספר טלפון\n• פרטי החברה\n• כל מידע אחר שתבחר לספק לנו דרך טפסי יצירת קשר או תקשורת אחרת',
        },
        {
          title: 'כיצד אנו משתמשים במידע שלך',
          content: 'אנו משתמשים במידע שאנו אוספים עבור:\n• מענה לפניותיך ומתן שירותים\n• תקשורת איתך לגבי הפרויקטים והשירותים שלנו\n• שיפור האתר והשירותים שלנו\n• שליחת עדכונים שיווקיים (רק עם הסכמתך)\n• עמידה בדרישות חוקיות',
        },
        {
          title: 'הגנת מידע',
          content: 'אנו מיישמים אמצעי אבטחה מתאימים כדי להגן על המידע האישי שלך מפני גישה, שינוי, גילוי או השמדה לא מורשים. עם זאת, אף שיטת העברה דרך האינטרנט או שיטת אחסון אלקטרוני אינה מאובטחת ב-100%.',
        },
        {
          title: 'שיתוף מידע עם צדדים שלישיים',
          content: 'אנו לא מוכרים, סוחרים או מעבירים בדרך אחרת את המידע האישי שלך לצדדים שלישיים, למעט:\n• ספקי שירות מהימנים המסייעים לנו בתפעול האתר או ניהול העסק שלנו\n• כאשר נדרש על פי חוק\n• להגן על זכויותינו, רכושנו או בטיחותנו',
        },
        {
          title: 'עוגיות (Cookies)',
          content: 'האתר שלנו עשוי להשתמש בעוגיות כדי לשפר את חווית המשתמש שלך. אתה יכול לבחור להשבית עוגיות באמצעות הגדרות הדפדפן שלך, אך זה עשוי להשפיע על פונקציונליות מסוימות של האתר.',
        },
        {
          title: 'הזכויות שלך',
          content: 'יש לך את הזכות:\n• לגשת למידע האישי שלך\n• לתקן מידע לא מדויק\n• לבקש מחיקת המידע האישי שלך\n• להתנגד לעיבוד המידע האישי שלך\n• למשוך הסכמה בכל עת',
        },
        {
          title: 'שינויים במדיניות זו',
          content: 'אנו שומרים לעצמנו את הזכות לעדכן את מדיניות הפרטיות הזו בכל עת. שינויים יפורסמו בעמוד זה עם תאריך "עדכון אחרון" מעודכן.',
        },
        {
          title: 'צור קשר',
          content: 'אם יש לך שאלות לגבי מדיניות פרטיות זו, אנא צור איתנו קשר דרך טופס יצירת הקשר באתר.',
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated',
      sections: [
        {
          title: 'Introduction',
          content: 'errnio technologies ltd. ("Company", "we") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services.',
        },
        {
          title: 'Information We Collect',
          content: 'We may collect personal information that you provide to us directly, such as:\n• Full name\n• Email address\n• Phone number\n• Company details\n• Any other information you choose to provide through contact forms or other communications',
        },
        {
          title: 'How We Use Your Information',
          content: 'We use the information we collect to:\n• Respond to your inquiries and provide services\n• Communicate with you regarding our projects and services\n• Improve our website and services\n• Send marketing updates (only with your consent)\n• Comply with legal requirements',
        },
        {
          title: 'Data Protection',
          content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.',
        },
        {
          title: 'Third-Party Sharing',
          content: 'We do not sell, trade, or otherwise transfer your personal information to third parties, except:\n• Trusted service providers who assist us in operating our website or conducting our business\n• When required by law\n• To protect our rights, property, or safety',
        },
        {
          title: 'Cookies',
          content: 'Our website may use cookies to enhance your user experience. You can choose to disable cookies through your browser settings, but this may affect certain functionalities of the site.',
        },
        {
          title: 'Your Rights',
          content: 'You have the right to:\n• Access your personal information\n• Correct inaccurate information\n• Request deletion of your personal information\n• Object to processing of your personal information\n• Withdraw consent at any time',
        },
        {
          title: 'Changes to This Policy',
          content: 'We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last Updated" date.',
        },
        {
          title: 'Contact Us',
          content: 'If you have questions about this Privacy Policy, please contact us through the contact form on our website.',
        },
      ],
    },
  };

  const currentContent = language === 'he' ? content.he : content.en;
  const currentDate = new Date().toLocaleDateString(language === 'he' ? 'he-IL' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <HamburgerMenu />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="gradient-text neon-glow">{currentContent.title}</span>
        </h1>

        {/* Last Updated */}
        <p className="text-center text-gray-400 mb-12">
          {currentContent.lastUpdated}: {currentDate}
        </p>

        {/* Content */}
        <div className="space-y-8">
          {currentContent.sections.map((section, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm border border-neon-blue/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">
                <span className="gradient-text">{section.title}</span>
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300"
          >
            {language === 'he' ? 'חזרה לדף הבית' : 'Back to Home'}
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
