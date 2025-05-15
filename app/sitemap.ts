import { MetadataRoute } from 'next'

const baseUrl = 'https://neuralarc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base routes that are always present
  const baseRoutes = [
    '',
    '/orb',
    '/nod',
    '/contact',
    '/careers',
    '/case-study/nod',
    '/case-study/orb',
    '/about',
    '/disclaimer',
    '/privacy-policy',
    '/terms-of-service',
    '/responsible-ai',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Orb case studies
  const orbCaseStudies = [
    '/case-study/orb/market-expansion',
    '/case-study/orb/strategic-research',
    '/case-study/orb/product-development',
    '/case-study/orb/pricing-optimization',
    '/case-study/orb/market-position',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Nod case studies
  const nodCaseStudies = [
    '/case-study/nod/manufacturing',
    '/case-study/nod/global-retailer',
    '/case-study/nod/insurance-corporation',
    '/case-study/nod/pharmaceutical-enterprise',
    '/case-study/nod/financial-services',
    '/case-study/nod/telecommunications-provider',
    '/case-study/nod/supply-chain',
    '/case-study/nod/channel-retail',
    '/case-study/nod/healthcare',
    '/case-study/nod/food-service',
    '/case-study/nod/service-business',
    '/case-study/nod/ecommerce',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...baseRoutes, ...orbCaseStudies, ...nodCaseStudies]
} 