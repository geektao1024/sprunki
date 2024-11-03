import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// 确保语言代码正确
export const locales = ['en', 'zh', 'fr', 'es'] as const
export const languageNames = {
  en: 'English',
  zh: '中文',
  fr: 'Français',
  es: 'Español',
} as const

export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'
export const localePrefix = 'always'

export default getRequestConfig(async ({ locale }) => {
  // 验证 locale 参数
  if (!locales.includes(locale as any)) notFound()

  try {
    return {
      messages: (await import(`../messages/${locale}.json`)).default,
    }
  } catch (error) {
    notFound()
  }
})
