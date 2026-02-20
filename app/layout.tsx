import type { Metadata } from "next";
import Script from "next/script";
import { LanguageProvider } from "@/lib/LanguageContext";
import StructuredData from "@/components/StructuredData";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: "errnio - פיתוח אתרים ואפליקציות | Web & App Development",
  description: "סוכנות פיתוח דיגיטלי המתמחה בפיתוח אתרים, אפליקציות ופתרונות AI לעסקים בישראל.",
  authors: [{ name: "errnio technologies ltd." }],
  creator: "errnio",
  publisher: "errnio technologies ltd.",
  metadataBase: new URL('https://errn.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    alternateLocale: 'en_US',
    url: 'https://errn.io',
    title: 'errnio - פיתוח אתרים ואפליקציות | Web & App Development',
    description: 'סוכנות פיתוח דיגיטלי המתמחה בפיתוח אתרים, אפליקציות ופתרונות AI לעסקים בישראל.',
    siteName: 'errnio vibe dev shop',
    images: ['/images/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'errnio - פיתוח אתרים ואפליקציות',
    description: 'סוכנות פיתוח דיגיטלי המתמחה בפיתוח אתרים ואפליקציות בישראל',
    images: ['/images/logo.png'],
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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NGGC2LV4');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGGC2LV4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
