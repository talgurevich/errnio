import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'קורס Claude Code | שעה אישית 1-על-1 | errnio',
  description: 'קורס מזורז ב-Claude Code. שעה אחת של הדרכה אישית בזום. למדו לעבוד עם AI כמו מקצוענים. 300 ₪ בלבד.',
  alternates: {
    canonical: '/landing-course',
  },
  openGraph: {
    title: 'קורס Claude Code | הדרכה אישית | errnio',
    description: 'שעה אחת, אחד-על-אחד, ותתחילו לעבוד עם AI כמו מקצוענים. 300 ₪ בלבד.',
    url: 'https://errn.io/landing-course',
    type: 'website',
    images: ['/images/logo.png'],
  },
};

export default function LandingCourseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
