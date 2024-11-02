// 导入React库
import * as React from 'react'
// 导入Next.js的Link组件
import Link from 'next/link'

// 导入NavItem类型定义
import { NavItem } from '@/types/nav'
// 导入站点配置信息的获取函数
import { getSiteConfig } from '@/config/site-i18n'
// 导入样式类名处理函数
import { cn } from '@/lib/utils'
// 导入国际化Locale类型定义
import { Locale } from '@/i18n'

// 定义MainNavProps接口，包含items和locale属性
interface MainNavProps {
  items?: NavItem[] // items为NavItem类型数组，可选
  locale: Locale // locale为Locale类型
}

// MainNav组件接受items和locale属性，返回一个React元素
export function MainNav({ items, locale }: MainNavProps) {
  // 获取特定locale下的站点配置信息
  const siteConfig = getSiteConfig(locale)

  // 返回一个包含站点名称和导航链接的组件
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href={`/${locale}`} className="flex items-center">
        <h1 className="text-lg font-bold normal-case sm:text-3xl">
          {siteConfig.name}
        </h1>
      </Link>
      {items?.length ? ( // 如果items存在且长度不为0
        <nav className="flex gap-6">
          {items?.map( // 遍历items数组
            (item, index) =>
              item.href && ( // 如果item有href属性
                <Link
                  key={index} // 设置key属性为index
                  href={item.href} // 设置链接地址为item.href
                  className={cn( // 动态设置组件类名
                    'flex items-center text-sm font-medium text-muted-foreground', // 基本样式
                    item.disabled && 'cursor-not-allowed opacity-80', // 根据disabled属性添加额外样式
                  )}
                >
                  {item.title} // 显示导航项标题
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  )
}