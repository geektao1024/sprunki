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
    name: 'Sprunki Incredibox',
    description:
      'Play Sprunki Incredibox online - A free music creation game where you mix sounds, create beats, and share your musical masterpieces. Join now to unleash your creativity!',
  },
  zh: {
    name: 'Sprunki Incredibox',
    description:
      '在线游玩 Sprunki Incredibox - 一款免费音乐创作游戏，让您混音、创作节拍并分享音乐作品。立即加入，释放您的创造力！',
  },
  fr: {
    name: 'Sprunki Incredibox',
    description:
      "Jouez à Sprunki Incredibox en ligne - Un jeu gratuit de création musicale où vous mixez des sons, créez des rythmes et partagez vos chefs-d'œuvre musicaux. Rejoignez-nous et libérez votre créativité !",
  },
  es: {
    name: 'Sprunki Incredibox',
    description:
      'Juega a Sprunki Incredibox en línea - Un juego gratuito de creación musical donde mezclas sonidos, creas ritmos y compartes tus obras maestras musicales. ¡Únete ahora y libera tu creatividad!',
  },
  ja: {
    name: 'Sprunki Incredibox',
    description:
      'Sprunki Incredibox をオンラインでプレイ - サウンドをミックスし、ビートを作成し、音楽作品を共有できる無料の音楽創作ゲーム。今すぐ参加して、創造性を解き放とう！',
  },
}

export function getSiteConfig(locale: Locale): SiteConfig {
  return {
    ...baseConfig,
    name: translations[locale].name,
    description: translations[locale].description,
  }
}
