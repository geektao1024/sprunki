import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from './i18n'
import { NextRequest, NextResponse } from 'next/server'

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
  
  const response = NextResponse.next()

  // 添加安全相关的 headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')

  // 设置缓存策略
  response.headers.set(
    'Cache-Control',
    'public, max-age=3600, must-revalidate'
  )

  return response
}

export const config = {
  matcher: ['/', '/(zh|en|fr)/:path*']
}
