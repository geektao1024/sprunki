import Link from 'next/link'
import { getSiteConfig } from '@/config/site-i18n'
import { buttonVariants } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Icons } from '@/components/icons'
import Image from 'next/image'
import { jsonLdScriptProps } from 'react-schemaorg'
import { WithContext, VideoGame } from 'schema-dts'
import { GameDescription } from '@/components/game-description'
import { GameInstructions } from '@/components/game-instructions'
import { GameFeatures } from '@/components/game-features'
import { GameIntro } from '@/components/game-intro'
import { GameWindow } from '@/components/game-window'
import { GameList } from '@/components/game-list'
import { GameFAQ } from '@/components/game-faq'

export default function IndexPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index')
  const siteConfig = getSiteConfig(locale as 'en' | 'zh' | 'fr')

  // 修复结构化数据类型
  const jsonLd: WithContext<VideoGame> = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Level Devil',
    description: 'The ultimate free online puzzle game with challenging levels',
    applicationCategory: 'Game',
    gamePlatform: ['Web Browser'],
    genre: ['Puzzle', 'Platform'],
    url: 'https://leveldevil.club',
    inLanguage: ['en', 'zh', 'fr'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.86',
      ratingCount: '1000',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <script {...jsonLdScriptProps(jsonLd)} type="application/ld+json" />
      <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="w-full max-w-[1200px] space-y-6">
          {/* 游戏窗口 */}
          <GameWindow locale={locale} />

          {/* 游戏列表 */}
          <GameList />

          {/* 游戏介绍 */}
          <GameDescription locale={locale as 'en' | 'zh' | 'fr'} />

          {/* 游戏详细介绍 */}
          <GameIntro locale={locale as 'en' | 'zh' | 'fr'} />

          {/* 游戏玩法说明 */}
          <GameInstructions locale={locale as 'en' | 'zh' | 'fr'} />

          {/* 游戏特点 */}
          <GameFeatures locale={locale as 'en' | 'zh' | 'fr'} />

          <GameFAQ locale={locale as 'en' | 'zh' | 'fr'} />
        </div>
      </section>
    </>
  )
}
