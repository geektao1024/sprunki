import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/api/', 
          '/admin/', 
          '/_next/', 
          '/static/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/*.js', '/*.css'],
      },
    ],
    sitemap: 'https://sprunkiincrediboxonline.org/sitemap.xml',
    host: 'https://sprunkiincrediboxonline.org'
  }
} 