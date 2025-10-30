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
  keywords: ["IdeaChecker", "idea checker", "business idea validator", "startup validator", "idea validation tool", "business idea checker", "validate startup idea", "AI business validation", "startup idea analyzer", "business concept validator", "entrepreneur tool", "startup tool", "business validation software", "idea analyzer", "concept validator"],
  authors: [{ name: "IdeaChecker" }],
  creator: "IdeaChecker",
  publisher: "IdeaChecker",
  category: "Business Tools",
  classification: "Business Idea Validation",
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
        width: 1200,
        height: 630,
        alt: 'IdeaChecker - AI-Powered Business Idea Validation',
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
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webAppSchema = {
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

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IdeaChecker',
    url: 'https://ideachecker.vercel.app',
    logo: 'https://ideachecker.vercel.app/favicon.png',
    description: 'AI-powered business idea validation tool that helps entrepreneurs validate their startup ideas instantly',
    sameAs: [],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
