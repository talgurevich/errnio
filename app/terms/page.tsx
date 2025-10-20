'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import HamburgerMenu from '@/components/HamburgerMenu';
import Footer from '@/components/Footer';

export default function TermsPage() {
  const { t, language } = useLanguage();

  const content = {
    he: {
      title: 'תנאי שימוש',
      lastUpdated: 'עדכון אחרון',
      sections: [
        {
          title: 'קבלת התנאים',
          content: 'על ידי גישה לאתר זה או שימוש בו, אתה מסכים להיות מחויב לתנאי השימוש הללו. אם אינך מסכים לכל התנאים והתנאים הללו, אינך מורשה להשתמש באתר זה או בשירותים שלנו.',
        },
        {
          title: 'שימוש באתר',
          content: 'אתה מסכים להשתמש באתר זה רק למטרות חוקיות ובאופן שאינו פוגע בזכויות של אחרים או מגביל או מונע את השימוש והנאתם של אתר זה. התנהגות אסורה כוללת:\n• הטרדה או גרימת מצוקה לכל אדם\n• העברת תוכן גס או פוגעני\n• שיבוש הפעולה הרגילה של האתר\n• ניסיון לגשת לאזורים מוגבלים של המערכת שלנו',
        },
        {
          title: 'קניין רוחני',
          content: 'תוכן האתר, כולל אך לא מוגבל לטקסט, גרפיקה, לוגואים, תמונות וקוד, הוא קניינה של ארניו טכנולוגיות בע"מ ומוגן בחוקי זכויות יוצרים ישראליים ובינלאומיים. אינך רשאי לשכפל, לחלק או ליצור עבודות נגזרות מתוכן כלשהו ללא רשותנו המפורשת בכתב.',
        },
        {
          title: 'שירותים',
          content: 'אנו מספקים שירותי פיתוח דיגיטלי כפי שמתואר באתר. פרטי השירות, התמחור ותנאי המסירה יפורטו בהסכמים נפרדים עם לקוחות. אנו שומרים לעצמנו את הזכות לשנות, להשהות או להפסיק כל שירות בכל עת ללא הודעה מוקדמת.',
        },
        {
          title: 'הגבלת אחריות',
          content: 'האתר והשירותים מסופקים "כמות שהם" ללא אחריות מכל סוג. ארניו טכנולוגיות בע"מ לא תהיה אחראית לכל נזק ישיר, עקיף, מקרי, מיוחד או תוצאתי הנובע מהשימוש או חוסר היכולת להשתמש באתר או בשירותים.',
        },
        {
          title: 'שיפוי',
          content: 'אתה מסכים לשפות ולהגן על ארניו טכנולוגיות בע"מ, עובדיה, סוכניה ושותפיה מפני כל תביעה, נזק, עלות או הוצאה, כולל שכר טרחת עורכי דין סבירים, הנובעים מהשימוש שלך באתר או מהפרת תנאי שימוש אלה.',
        },
        {
          title: 'קישורים לאתרים של צד שלישי',
          content: 'האתר שלנו עשוי להכיל קישורים לאתרים של צד שלישי. אנו לא אחראים לתוכן, מדיניות הפרטיות או נוהלי אתרים אלו. אתה מכיר בכך ומסכים שארניו טכנולוגיות בע"מ לא תהיה אחראית לכל נזק או אובדן שנגרם בקשר לשימוש באתרים כאלה.',
        },
        {
          title: 'דין חל ושיפוט',
          content: 'תנאי שימוש אלה יהיו כפופים ויפורשו בהתאם לחוקי מדינת ישראל. כל סכסוך הנובע מתנאים אלה יהיה נתון לסמכות השיפוט הבלעדית של בתי המשפט בישראל.',
        },
        {
          title: 'שינויים בתנאים',
          content: 'אנו שומרים לעצמנו את הזכות לשנות תנאי שימוש אלה בכל עת. שינויים ייכנסו לתוקף מיד עם פרסומם באתר. המשך השימוש שלך באתר לאחר שינויים כאלה מהווה את הסכמתך לתנאים החדשים.',
        },
        {
          title: 'צור קשר',
          content: 'לשאלות לגבי תנאי שימוש אלה, אנא צור איתנו קשר דרך טופס יצירת הקשר באתר.',
        },
      ],
    },
    en: {
      title: 'Terms & Conditions',
      lastUpdated: 'Last Updated',
      sections: [
        {
          title: 'Acceptance of Terms',
          content: 'By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms and conditions, you are not authorized to use this website or our services.',
        },
        {
          title: 'Use of Website',
          content: 'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use and enjoyment of this website. Prohibited behavior includes:\n• Harassing or causing distress to any person\n• Transmitting obscene or offensive content\n• Disrupting the normal flow of the website\n• Attempting to access restricted areas of our system',
        },
        {
          title: 'Intellectual Property',
          content: 'The content of the website, including but not limited to text, graphics, logos, images, and code, is the property of errnio technologies ltd. and is protected by Israeli and international copyright laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.',
        },
        {
          title: 'Services',
          content: 'We provide digital development services as described on the website. Service details, pricing, and delivery terms will be outlined in separate agreements with clients. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.',
        },
        {
          title: 'Limitation of Liability',
          content: 'The website and services are provided "as is" without warranty of any kind. errnio technologies ltd. shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the website or services.',
        },
        {
          title: 'Indemnification',
          content: 'You agree to indemnify and hold harmless errnio technologies ltd., its employees, agents, and partners from any claim, damage, cost, or expense, including reasonable attorney fees, arising from your use of the website or violation of these Terms and Conditions.',
        },
        {
          title: 'Third-Party Links',
          content: 'Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these sites. You acknowledge and agree that errnio technologies ltd. shall not be liable for any damage or loss caused in connection with the use of such websites.',
        },
        {
          title: 'Governing Law and Jurisdiction',
          content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Israel. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the courts of Israel.',
        },
        {
          title: 'Changes to Terms',
          content: 'We reserve the right to modify these Terms and Conditions at any time. Changes will become effective immediately upon posting on the website. Your continued use of the website after such changes constitutes your acceptance of the new terms.',
        },
        {
          title: 'Contact Us',
          content: 'For questions regarding these Terms and Conditions, please contact us through the contact form on our website.',
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
