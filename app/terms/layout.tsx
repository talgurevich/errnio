import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'תנאי שימוש | Terms & Conditions - errnio',
  description: 'תנאי השימוש של ארניו טכנולוגיות בע"מ. Terms & Conditions for errnio technologies ltd.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms & Conditions - errnio',
    description: 'Terms & Conditions for errnio technologies ltd.',
    url: 'https://errn.io/terms',
    type: 'website',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
