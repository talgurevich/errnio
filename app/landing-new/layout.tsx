import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'בניית אתרים לעסקים | אתר מקצועי לעסק שלך | errnio',
  description: 'צריכים אתר לעסק? אתר מקצועי עם מערכת ניהול, אחסון ותמיכה. ללא עלות הקמה. דברו איתנו עכשיו בוואטסאפ.',
  alternates: {
    canonical: '/landing-new',
  },
  openGraph: {
    title: 'בניית אתרים לעסקים | errnio',
    description: 'אתר מקצועי עם מערכת ניהול מלאה. מנוי חודשי פשוט, ללא עלות הקמה.',
    url: 'https://errn.io/landing-new',
    type: 'website',
    images: ['/images/logo.png'],
  },
};

export default function LandingNewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
