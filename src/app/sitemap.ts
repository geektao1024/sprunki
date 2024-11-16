import { locales } from '@/i18n'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sprunkiincrediboxonline.org'

  // 建议添加更多页面路由
  const routes = [
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // 为每个游戏模式添加独立路由
    ...['incredibox', 'incredibox-v2', 'incredibox-v3', 'incredibox-v4', 'incredibox-v5', 'incredibox-v6', 'incredibox-v7', 'incredibox-v8'].map(game => ({
      url: `${baseUrl}/games/${game}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    }))
  ]

  return routes as MetadataRoute.Sitemap
}