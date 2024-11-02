import { NavItem } from '@/types/nav'
import { Locale } from '@/i18n'

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    docs: string
    github: string
  }
}

const baseConfig: Omit<SiteConfig, 'name' | 'description'> = {
  mainNav: [],
  links: {
    docs: 'https://ui.shadcn.com',
    github: 'https://github.com/shadcn/ui',
  },
}

const translations = {
  en: {
    name: 'Level Devil',
    description: 'A modern front-end development template',
  },
  zh: {
    name: '恶魔关卡',
    description: '这是一个现代化的前端开发模板',
  },
  fr: {
    name: 'Level Devil',
    description: 'Un modèle de développement frontal moderne',
  },
}

export function getSiteConfig(locale: Locale): SiteConfig {
  return {
    ...baseConfig,
    name: translations[locale].name,
    description: translations[locale].description,
  }
}