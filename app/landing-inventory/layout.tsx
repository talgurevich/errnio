import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מערכת מלאי ומכירות מותאמת אישית ₪7,500 | errnio',
  description: 'מערכת ניהול מלאי, הזמנות ומכירות מלאה — מותאמת בדיוק לצרכים של העסק שלך. הקמה חד-פעמית + תחזוקה חודשית.',
  alternates: {
    canonical: '/landing-inventory',
  },
  openGraph: {
    title: 'מערכת מלאי ומכירות מותאמת אישית | errnio',
    description: 'מערכת ניהול מלאי, הזמנות ומכירות מלאה — מותאמת בדיוק לצרכים של העסק שלך.',
    url: 'https://errn.io/landing-inventory',
    type: 'website',
    images: ['/images/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מערכת מלאי ומכירות מותאמת אישית | errnio',
    description: 'מערכת ניהול מלאי, הזמנות ומכירות מותאמת לעסק שלך.',
    images: ['/images/logo.png'],
  },
};

export default function LandingInventoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
