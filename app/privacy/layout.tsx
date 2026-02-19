import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | Privacy Policy - errnio',
  description: 'מדיניות הפרטיות של ארניו טכנולוגיות בע"מ. Privacy Policy for errnio technologies ltd.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - errnio',
    description: 'Privacy Policy for errnio technologies ltd.',
    url: 'https://errn.io/privacy',
    type: 'website',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
