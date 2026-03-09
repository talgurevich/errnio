import { guides } from '@/lib/claude-code-guides';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'מדריכי Claude Code בעברית — כל מה שצריך לדעת',
  description: 'המדריך המלא בעברית ל-Claude Code. התקנה, הגדרות, טיפים, ופתרון בעיות. למתחילים ומתקדמים.',
  alternates: { canonical: '/guides/claude-code' },
  openGraph: {
    title: 'מדריכי Claude Code בעברית | errnio',
    description: 'המדריך המלא בעברית ל-Claude Code. למתחילים ומתקדמים.',
    url: 'https://errn.io/guides/claude-code',
  },
};

const categories = [
  {
    title: 'מתחילים כאן',
    icon: '🚀',
    slugs: ['what-is-claude-code', 'installation', 'pricing', 'api-key-setup'],
  },
  {
    title: 'למידה ועבודה',
    icon: '📚',
    slugs: ['beginners-guide', 'prompting', 'claude-md', 'git-workflow'],
  },
  {
    title: 'כלים מתקדמים',
    icon: '⚡',
    slugs: ['mcp-servers', 'skills-hooks', 'vs-cursor-copilot'],
  },
  {
    title: 'מה אפשר לבנות',
    icon: '🏗️',
    slugs: ['build-website', 'ecommerce'],
  },
  {
    title: 'למי זה מתאים',
    icon: '👥',
    slugs: ['for-businesses', 'for-non-developers', 'for-freelancers'],
  },
  {
    title: 'פתרון בעיות',
    icon: '🔧',
    slugs: ['common-errors', 'troubleshooting'],
  },
];

export default function ClaudeCodeGuidesHub() {
  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Segoe UI', 'Arial', sans-serif" }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}>
        <div className="absolute rounded-full opacity-20 blur-3xl" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', top: '-15%', right: '-5%' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
          <Link href="/" className="inline-block mb-8">
            <img src="/images/logo-errnio.webp" alt="errnio" className="h-10 md:h-14" />
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            מדריכי Claude Code
            <br />
            <span style={{ color: '#a855f7' }}>בעברית</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
            כל מה שצריך לדעת על Claude Code — מהתקנה ועד טכניקות מתקדמות. מדריכים מלאים, בעברית, בחינם.
          </p>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-5xl mx-auto">
          {categories.map((cat, ci) => (
            <div key={ci} className="mb-12">
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5 flex items-center gap-2">
                <span>{cat.icon}</span>
                {cat.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.slugs.map(slug => {
                  const guide = guides.find(g => g.slug === slug);
                  if (!guide) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/guides/claude-code/${slug}`}
                      className="group block bg-gray-50 hover:bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                    >
                      <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-1">
                        {guide.title.split('—')[0].trim()}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{guide.metaDescription}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA to course */}
      <section className="py-12 md:py-16 px-5" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            מעדיפים ללמוד עם מדריך אישי?
          </h2>
          <p className="text-blue-200 mb-6">שעה אחת של הדרכה פרטית בזום — מותאם לרמה שלכם</p>
          <Link
            href="/landing-course"
            className="inline-flex items-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: '#7c3aed' }}
          >
            לפרטים על הקורס
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-5 bg-gray-900 text-center">
        <p className="text-gray-500 text-xs">
          כל הזכויות שמורות &copy; {new Date().getFullYear()} ארניו טכנולוגיות בע&quot;מ
          {' | '}
          <a href="/privacy" className="underline hover:text-gray-300 transition-colors">מדיניות פרטיות</a>
          {' | '}
          <a href="/terms" className="underline hover:text-gray-300 transition-colors">תנאי שימוש</a>
        </p>
      </footer>
    </div>
  );
}
