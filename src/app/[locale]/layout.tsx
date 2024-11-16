import '@/styles/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Locale, locales } from '@/i18n'
import { unstable_setRequestLocale } from 'next-intl/server'
import Script from 'next/script'

import { getSiteConfig } from '@/config/site-i18n'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import { GoogleAnalytics } from '@/components/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const siteConfig = getSiteConfig(locale)

  const titles = {
    en: 'Sprunki Incredibox: Music Game | Create & Play Online',
    zh: 'Sprunki Incredibox：音乐游戏 | 创作与在线游玩',
    fr: 'Sprunki Incredibox : Jeu Musical | Créez et Jouez en Ligne',
    es: 'Sprunki Incredibox: Juego Musical | Crea y Juega en Línea',
    ja: 'Sprunki Incredibox：音楽ゲーム | 創作とオンラインプレイ',
  }

  const descriptions = {
    en: 'Play Sprunki Incredibox online - A free music creation game where you mix sounds, create beats, and share your musical masterpieces. Join now to unleash your creativity!',
    zh: '在线游玩 Sprunki Incredibox - 一款免费音乐创作游戏，让您混音、创作节拍并分享音乐作品。立即加入，释放您的创造力！',
    fr: "Jouez à Sprunki Incredibox en ligne - Un jeu gratuit de création musicale où vous mixez des sons, créez des rythmes et partagez vos chefs-d'œuvre musicaux. Rejoignez-nous et libérez votre créativité !",
    es: 'Juega a Sprunki Incredibox en línea - Un juego gratuito de creación musical donde mezclas sonidos, creas ritmos y compartes tus obras maestras musicales. ¡Únete ahora y libera tu creatividad!',
    ja: 'Sprunki Incredibox をオンラインでプレイ - サウンドをミックスし、ビートを作成し、音楽作品を共有できる無料の音楽創作ゲーム。今すぐ参加して、創造性を解き放とう！',
  }

  const canonicalUrl = `https://sprunkiincrediboxonline.org/${locale}`

  return {
    title: {
      default: titles[locale as keyof typeof titles],
      template: `%s | ${siteConfig.name}`,
    },
    description: descriptions[locale as keyof typeof descriptions],
    metadataBase: new URL('https://sprunkiincrediboxonline.org'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: '/en',
        zh: '/zh',
        fr: '/fr',
        es: '/es',
        ja: '/ja',
      },
    },
    openGraph: {
      type: 'website',
      url: `https://sprunkiincrediboxonline.org/${locale}`,
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Sprunki Incredibox: Music Game',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: ['/images/og-image.png'],
    },
    keywords: [
      'Sprunki Incredibox',
      'music game',
      'online music creation',
      'free music mod',
      'music remix',
      'creative music game',
      'fan-made music game',
      'online music game',
      'incredibox mod',
      'music creation platform',
      'interactive music experience'
    ],
    other: {
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'X-DNS-Prefetch-Control': 'on',
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
  }
}

export type PageProps = Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>

export default function RootLayout({
  children,
  params: { locale },
}: PageProps) {
  unstable_setRequestLocale(locale)
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="msvalidate.01" content="A6C0A43795DDC80BDC982CE017D38B8B" />
        
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <Script
          defer
          data-domain="sprunkiincrediboxonline.org"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          inter.className,
        )}
      >
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader locale={locale} />
            <NextIntlClientProvider locale={locale}>
              <div className="flex-1">{children}</div>
            </NextIntlClientProvider>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
