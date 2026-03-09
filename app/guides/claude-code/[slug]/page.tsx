import { guides, getGuideBySlug, getRelatedGuides } from '@/lib/claude-code-guides';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return guides.map(guide => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | errnio`,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/claude-code/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `https://errn.io/guides/claude-code/${guide.slug}`,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = getRelatedGuides(guide);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    inLanguage: 'he',
    url: `https://errn.io/guides/claude-code/${guide.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'errnio',
      url: 'https://errn.io',
    },
    author: {
      '@type': 'Person',
      name: 'Tal Gurevich',
    },
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Segoe UI', 'Arial', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}>
        <div className="absolute rounded-full opacity-15 blur-3xl" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', top: '-10%', right: '-5%' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-5 py-12 md:py-16">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="inline-block">
              <img src="/images/logo-errnio.webp" alt="errnio" className="h-8 md:h-10" />
            </Link>
            <span className="text-blue-400">/</span>
            <Link href="/guides/claude-code" className="text-blue-300 hover:text-white transition-colors text-sm">
              מדריכי Claude Code
            </Link>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-blue-200">{guide.heroSubtitle}</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-10 md:py-14 px-5">
        <div className="max-w-3xl mx-auto">
          {guide.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Course CTA */}
      <section className="py-10 px-5 bg-purple-50 border-y border-purple-100">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">
            רוצים ללמוד Claude Code עם הדרכה אישית?
          </h3>
          <p className="text-gray-600 mb-4">שעה אחת בזום, 1-על-1, מותאם לרמה שלכם. 300 ₪ בלבד.</p>
          <Link
            href="/landing-course"
            className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: '#7c3aed' }}
          >
            לפרטים ולהרשמה
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-10 md:py-14 px-5">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-5">
              מדריכים קשורים
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedGuides.map(related => (
                <Link
                  key={related.slug}
                  href={`/guides/claude-code/${related.slug}`}
                  className="group block bg-gray-50 hover:bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                >
                  <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm mb-1">
                    {related.title.split('—')[0].trim()}
                  </h4>
                  <p className="text-gray-500 text-xs line-clamp-2">{related.heroSubtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to all guides */}
      <div className="px-5 pb-10">
        <div className="max-w-3xl mx-auto">
          <Link href="/guides/claude-code" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            חזרה לכל המדריכים
          </Link>
        </div>
      </div>

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
