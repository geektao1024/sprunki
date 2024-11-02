import Link from 'next/link'
import { getSiteConfig } from '@/config/site-i18n'
import { buttonVariants } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Icons } from '@/components/icons'
import Image from 'next/image'

export default function IndexPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index')
  const siteConfig = getSiteConfig(locale as "en" | "zh" | "fr")
  
  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="w-full max-w-[1200px] space-y-6">
        {/* 游戏窗口 */}
        <div className="relative mx-auto w-full overflow-hidden rounded-lg border shadow-lg">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe 
              src="https://classroom-6x.org/games/level2/"
              className="absolute inset-0 h-full w-full"
              allow="fullscreen"
              style={{ 
                transform: 'translateZ(0)',
                margin: '0 auto'
              }}
            />
          </div>
        </div>

        {/* 游戏信息和分享区域 */}
        <div className="rounded-lg border bg-card p-6 shadow-lg transition-all hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex h-18 w-18 items-center justify-center rounded-lg bg-background p-2 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Level Devil Logo"
                  width={56}
                  height={56}
                  style={{ objectFit: 'contain' }}
                  unoptimized
                  priority
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">LEVEL DEVIL</h2>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-lg font-semibold text-muted-foreground">4.86</span>
                </div>
              </div>
            </div>

            {/* 分享按钮组 */}
            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com/sharer.php?t=Level%20Devil%20Dash&u=https%3A%2F%2Fclassroom-6x.org%2Fgames%2Flevel2%2F"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ 
                  variant: "outline", 
                  size: "icon",
                  className: "hover:bg-blue-100 dark:hover:bg-blue-900"
                })}
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="https://x.com/intent/tweet?text=Level%20Devil%20Dash&url=https%3A%2F%2Fclassroom-6x.org%2Fgames%2Flevel2%2F"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ 
                  variant: "outline", 
                  size: "icon",
                  className: "hover:bg-blue-100 dark:hover:bg-blue-900"
                })}
              >
                <Icons.twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.reddit.com/submit?title=Level+Devil+Dash&url=https%3A%2F%2Fclassroom-6x.org%2Fgames%2Flevel2%2F"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ 
                  variant: "outline", 
                  size: "icon",
                  className: "hover:bg-orange-100 dark:hover:bg-orange-900"
                })}
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
