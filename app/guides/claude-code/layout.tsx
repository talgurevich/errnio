import type { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    images: ['/images/logo.png'],
  },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
