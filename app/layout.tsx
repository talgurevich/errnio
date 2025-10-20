import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "errnio vibe dev shop - AI-Powered Development",
  description: "A digital development agency harnessing the power of AI to deliver cutting-edge web and mobile solutions for small and medium businesses.",
  keywords: "AI development, web development, mobile apps, Next.js, React, Python, errnio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
