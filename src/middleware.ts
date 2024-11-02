import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from './i18n'
import { NextRequest } from 'next/server'

// 创建中间件处理函数
const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  localePrefix
})

export default function middleware(request: NextRequest) {
  // 如果是根路径，直接重定向到英文版本
  if (request.nextUrl.pathname === '/') {
    return Response.redirect(new URL(`/en`, request.url))
  }
  
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(zh|en|fr)/:path*']
}
