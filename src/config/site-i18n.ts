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
    docs: 'https://leveldevil.club',
    github: 'https://leveldevil.club',
  },
}

const translations = {
  en: {
    name: 'Level Devil',
    description: 'Level Devil, free online puzzle game! Tackle challenging levels with traps and surprises.',
  },
  zh: {
    name: '恶魔关卡',
    description: '恶魔关卡，免费在线解谜游戏！挑战充满陷阱和惊喜的关卡。',
  },
  fr: {
    name: 'Level Devil',
    description: 'Level Devil, jeu de puzzle en ligne gratuit ! Relevez des défis avec pièges et surprises.',
  },
  es: {
    name: 'Level Devil',
    description: 'Level Devil, ¡juego de puzles en línea gratis! Supera niveles desafiantes con trampas y sorpresas.',
  },
  ja: {
    name: 'レベルデビル',
    description: 'レベルデビル、無料オンラインパズルゲーム！罠とサプライズに満ちた挑戦的なレベルに挑戦。',
  },
}

export function getSiteConfig(locale: Locale): SiteConfig {
  return {
    ...baseConfig,
    name: translations[locale].name,
    description: translations[locale].description,
  }
}