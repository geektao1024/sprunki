import '@/styles/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Locale, locales } from '@/i18n'
import { unstable_setRequestLocale } from 'next-intl/server'

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
    en: 'Level Devil - Free Online Games | Play Level Devil 2 & 3',
    zh: '恶魔关卡 - 免费在线游戏 | 畅玩恶魔关卡 2 & 3',
    fr: 'Level Devil - Jeux en Ligne Gratuits | Jouez à Level Devil 2 & 3'
  }
  
  const descriptions = {
    en: 'Level Devil, free online puzzle game! Tackle challenging levels with traps and surprises. Play Level Devil 2 & 3 on PC or mobile, no downloads needed.',
    zh: '恶魔关卡，免费在线解谜游戏！挑战充满陷阱和惊喜的关卡。在电脑或手机上畅玩恶魔关卡 2 & 3，无需下载。',
    fr: 'Level Devil, jeu de puzzle en ligne gratuit ! Relevez des défis avec pièges et surprises. Jouez à Level Devil 2 & 3 sur PC ou mobile, sans téléchargement.'
  }

  return {
    title: {
      default: titles[locale],
      template: `%s | ${siteConfig.name}`,
    },
    description: descriptions[locale],
    metadataBase: new URL('https://leveldevil.club'),
    alternates: {
      canonical: `https://leveldevil.club/${locale}`,
      languages: {
        'en': '/en',
        'zh': '/zh',
        'fr': '/fr',
      },
    },
    openGraph: {
      type: 'website',
      url: `https://leveldevil.club/${locale}`,
      title: titles[locale],
      description: descriptions[locale],
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Level Devil Game',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: ['/images/og-image.png'],
    },
    icons: {
      icon: [
        {
          url: '/favicon/favicon.ico',
          sizes: '32x32',
          type: 'image/x-icon',
        },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      apple: {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    },
    keywords: [
      'Level Devil',
      'puzzle game',
      'online game',
      'free game',
      'brain teaser',
      'Level Devil 2',
      'Level Devil 3',
      'platform game',
    ],
    other: {
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'X-DNS-Prefetch-Control': 'on',
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
      <head />
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
