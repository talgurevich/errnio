import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אתר מקצועי + מערכת ניהול ₪450/חודש | errnio',
  description: 'אתר מותאם אישית עם מערכת ניהול מלאה, אחסון, תחזוקה ותמיכה טכנית. ללא עלות הקמה, מנוי חודשי פשוט.',
  alternates: {
    canonical: '/landing',
  },
  openGraph: {
    title: 'אתר מקצועי + מערכת ניהול ₪450/חודש | errnio',
    description: 'אתר מותאם אישית עם מערכת ניהול מלאה, אחסון, תחזוקה ותמיכה טכנית. מנוי חודשי פשוט.',
    url: 'https://errn.io/landing',
    type: 'website',
    images: ['/images/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אתר מקצועי + מערכת ניהול ₪450/חודש | errnio',
    description: 'אתר מותאם אישית עם מערכת ניהול מלאה. מנוי חודשי ללא עלות הקמה.',
    images: ['/images/logo.png'],
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
