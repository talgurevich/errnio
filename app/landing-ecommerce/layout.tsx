import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'חנות מקוונת מותאמת אישית | errnio',
  description: 'חנות אינטרנטית מלאה עם ניהול מוצרים, סליקת תשלומים ומשלוחים — מותאמת בדיוק לצרכים שלך. הקמה חד-פעמית ותחזוקה חודשית.',
  alternates: {
    canonical: '/landing-ecommerce',
  },
  openGraph: {
    title: 'חנות מקוונת מותאמת אישית | errnio',
    description: 'חנות אינטרנטית מלאה עם ניהול מוצרים, סליקת תשלומים ומשלוחים — מותאמת בדיוק לצרכים שלך.',
    url: 'https://errn.io/landing-ecommerce',
    type: 'website',
    images: ['/images/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'חנות מקוונת מותאמת אישית | errnio',
    description: 'חנות אינטרנטית מלאה עם ניהול מוצרים, סליקת תשלומים ומשלוחים.',
    images: ['/images/logo.png'],
  },
};

export default function LandingEcommerceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
