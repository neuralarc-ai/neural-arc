import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script'

const fustat = Fustat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// Base URL for the site
const baseUrl = 'https://neuralarc.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "NeuralArc - AI-Powered Business Intelligence Solutions",
    template: "%s | NeuralArc"
  },
  description: "NeuralArc delivers advanced AI solutions for business intelligence and data analytics. Our products ORB and NOD transform how businesses make decisions through predictive intelligence and real-time analytics.",
  keywords: [
    "AI business intelligence",
    "predictive analytics",
    "data analytics",
    "machine learning",
    "business intelligence platform",
    "ORB AI",
    "NOD analytics",
    "competitive intelligence",
    "neural architecture",
    "real-time analytics"
  ],
  authors: [{ name: "NeuralArc" }],
  creator: "NeuralArc",
  publisher: "NeuralArc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'sLPKeIanYr2GqX8z3ktPDzkMmD_7X_0SGbeuyckoCIY',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'NeuralArc',
    title: 'NeuralArc - AI-Powered Business Intelligence Solutions',
    description: 'Transform your business with NeuralArc\'s AI-powered intelligence solutions. ORB and NOD deliver predictive insights and real-time analytics for smarter decision-making.',
    images: [
      {
        url: `${baseUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'NeuralArc - AI-Powered Business Intelligence',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuralArc - AI-Powered Business Intelligence Solutions',
    description: 'Transform your business with NeuralArc\'s AI-powered intelligence solutions. ORB and NOD deliver predictive insights and real-time analytics.',
    images: [`${baseUrl}/images/twitter-image.png`],
    creator: '@neuralarc',
    site: '@neuralarc',
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
  alternates: {
    canonical: baseUrl,
  },
  category: 'technology',
};

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NeuralArc',
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  description: 'NeuralArc delivers advanced AI solutions for business intelligence and data analytics through our products ORB and NOD.',
  sameAs: [
    'https://twitter.com/neuralarc',
    'https://linkedin.com/company/neuralarc',
    // Add other social media profiles
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  offers: {
    '@type': 'AggregateOffer',
    offers: [
      {
        '@type': 'Offer',
        name: 'ORB AI Platform',
        description: 'AI-powered competitive intelligence and predictive analytics platform',
      },
      {
        '@type': 'Offer',
        name: 'NOD Analytics',
        description: 'Advanced business intelligence and real-time analytics solution',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YBC9ZMC65Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YBC9ZMC65Y', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${fustat.className} antialiased bg-[#F8F7F3] grain-texture`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
