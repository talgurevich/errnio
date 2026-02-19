import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מערכת CRM מותאמת אישית ₪7,500 | errnio',
  description: 'מערכת ניהול לקוחות, לידים ומכירות מלאה — מותאמת בדיוק לצרכים של העסק שלך. הקמה חד-פעמית + תחזוקה חודשית.',
  alternates: {
    canonical: '/landing-crm',
  },
  openGraph: {
    title: 'מערכת CRM מותאמת אישית | errnio',
    description: 'מערכת ניהול לקוחות, לידים ומכירות מלאה — מותאמת בדיוק לצרכים של העסק שלך.',
    url: 'https://errn.io/landing-crm',
    type: 'website',
    images: ['/images/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מערכת CRM מותאמת אישית | errnio',
    description: 'מערכת ניהול לקוחות, לידים ומכירות מותאמת לעסק שלך.',
    images: ['/images/logo.png'],
  },
};

export default function LandingCrmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
