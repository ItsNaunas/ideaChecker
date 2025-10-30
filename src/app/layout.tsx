import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IdeaChecker - Validate Your Business Ideas Instantly",
  description: "Get honest, brutal feedback on your business ideas with AI-powered analysis. Validate market opportunity, identify risks, and get actionable insights.",
  keywords: "business ideas, startup validation, AI analysis, entrepreneurship, market research",
  openGraph: {
    title: "IdeaChecker - Validate Your Business Ideas Instantly",
    description: "Get honest, brutal feedback on your business ideas with AI-powered analysis.",
    type: "website",
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
