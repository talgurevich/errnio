'use client';

import React from 'react';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://errn.io",
    "name": "errnio technologies ltd.",
    "alternateName": ["ארניו טכנולוגיות בע\"מ", "errnio vibe dev shop"],
    "description": "סוכנות פיתוח דיגיטלי המתמחה בפיתוח אתרים, אפליקציות אינטרנט, אפליקציות מובייל וחנויות מקוונות",
    "url": "https://errn.io",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bustan Hagalil",
      "addressRegion": "Northern District",
      "addressCountry": "IL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.990198",
      "longitude": "35.448664"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Israel"
    },
    "sameAs": [
      "https://www.linkedin.com/in/talgurevich/",
      "https://github.com/talgurevich/errnio"
    ],
    "priceRange": "$$",
    "image": "https://errn.io/images/logo.png",
    "logo": "https://errn.io/images/logo.png",
    "knowsLanguage": ["Hebrew", "English"],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "פיתוח אתרים",
          "alternateName": "Web Development",
          "description": "אתרים מודרניים ורספונסיביים הבנויים לביצועים ומעורבות"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "פיתוח אפליקציות אינטרנט",
          "alternateName": "Web Application Development",
          "description": "אפליקציות full-stack הפותרות בעיות עסקיות אמיתיות"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "פיתוח אפליקציות מובייל",
          "alternateName": "Mobile App Development",
          "description": "חוויות מובייל native וחוצות פלטפורמות"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "חנויות מקוונות",
          "alternateName": "E-commerce Development",
          "description": "פלטפורמות מסחר אלקטרוני מלאות עם ניהול מוצרים ותשלומים"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "בוטים חכמים",
          "alternateName": "AI Bot Development",
          "description": "פיתוח בוטי AI מותאמים אישית לשירות לקוחות ואוטומציה עסקית"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
