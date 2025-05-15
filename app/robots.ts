import { MetadataRoute } from 'next'

const baseUrl = 'https://neuralarc.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers for main content
      {
        userAgent: '*',
        allow: [
          '/',
          '/orb',
          '/nod',
          '/case-study/*',
          '/about',
          '/contact',
          '/careers',
          '/responsible-ai',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/*.xml$',
          '/_next/',
          '/static/',
          '/*?*', // Disallow URLs with query parameters
        ],
      },
      // Special rules for Googlebot
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/orb',
          '/nod',
          '/case-study/*',
          '/about',
          '/contact',
          '/careers',
          '/responsible-ai',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/*.xml$',
          '/_next/',
          '/static/',
          '/*?*',
        ],
        crawlDelay: 1, // Respect server load
      },
      // Special rules for Bingbot
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/orb',
          '/nod',
          '/case-study/*',
          '/about',
          '/contact',
          '/careers',
          '/responsible-ai',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/*.xml$',
          '/_next/',
          '/static/',
          '/*?*',
        ],
        crawlDelay: 2, // More conservative crawl rate
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 