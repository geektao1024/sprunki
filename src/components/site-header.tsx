import { getSiteConfig } from '@/config/site-i18n'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { Locale } from '@/i18n'
import { LanguageToggle } from './language-toggle'

interface SiteHeaderProps {
  locale: Locale
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const siteConfig = getSiteConfig(locale)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <MainNav items={siteConfig.mainNav} locale={locale} />
        <div className="flex items-center space-x-2">
          <LanguageToggle locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
