import type { Metadata } from "next";
import Script from "next/script";
import { LanguageProvider } from "@/lib/LanguageContext";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "errnio - פיתוח אתרים ואפליקציות | Web & App Development",
  description: "סוכנות פיתוח דיגיטלי המתמחה בפיתוח אתרים, אפליקציות אינטרנט, אפליקציות מובייל וחנויות מקוונות. שירותי פיתוח מונעי AI לעסקים בישראל. Digital development agency specializing in web development, web apps, mobile apps and e-commerce solutions.",
  keywords: "פיתוח אתרים, פיתוח אפליקציות, בניית אתרים, פיתוח אפליקציות מובייל, חנות מקוונת, בוטים חכמים, AI bots, ChatGPT, web development, app development, mobile apps, e-commerce, AI automation, errnio, ארניו, בוסתן הגליל, ישראל",
  authors: [{ name: "errnio technologies ltd." }],
  creator: "errnio",
  publisher: "errnio technologies ltd.",
  metadataBase: new URL('https://errn.io'),
  alternates: {
    canonical: '/',
    languages: {
      'he': '/he',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    alternateLocale: 'en_US',
    url: 'https://errn.io',
    title: 'errnio - פיתוח אתרים ואפליקציות | Web & App Development',
    description: 'סוכנות פיתוח דיגיטלי המתמחה בפיתוח אתרים, אפליקציות אינטרנט, אפליקציות מובייל וחנויות מקוונות. שירותי פיתוח מונעי AI לעסקים בישראל.',
    siteName: 'errnio vibe dev shop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'errnio - פיתוח אתרים ואפליקציות',
    description: 'סוכנות פיתוח דיגיטלי המתמחה בפיתוח אתרים ואפליקציות בישראל',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <StructuredData />
        <link rel="canonical" href="https://errn.io" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WY93QTB6N0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WY93QTB6N0');
            gtag('config', 'AW-1062478822');
          `}
        </Script>

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
