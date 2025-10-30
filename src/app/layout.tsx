import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "IdeaChecker - Validate Your Business Ideas Instantly",
    template: "%s | IdeaChecker"
  },
  description: "Get honest, brutal feedback on your business ideas with AI-powered analysis. Validate market opportunity, identify risks, and get actionable insights in under 30 seconds. Trusted by 12K+ entrepreneurs.",
  keywords: ["IdeaChecker", "idea checker", "business ideas", "startup validation", "AI analysis", "entrepreneurship", "market research", "startup ideas", "business validation tool"],
  authors: [{ name: "IdeaChecker" }],
  creator: "IdeaChecker",
  publisher: "IdeaChecker",
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
  openGraph: {
    title: "IdeaChecker - Validate Your Business Ideas Instantly",
    description: "Get honest, brutal feedback on your business ideas with AI-powered analysis. Validate market opportunity in under 30 seconds.",
    type: "website",
    siteName: "IdeaChecker",
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'IdeaChecker Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "IdeaChecker - Validate Your Business Ideas Instantly",
    description: "Get honest, brutal feedback on your business ideas with AI-powered analysis.",
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'IdeaChecker',
    description: 'AI-powered business idea validation tool that provides instant feedback on startup ideas',
    url: 'https://ideachecker.vercel.app',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
    },
    featureList: [
      'AI-Powered Analysis',
      'Instant Results',
      'Market Opportunity Assessment',
      'Competition Analysis',
      'Idea Scoring System',
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
