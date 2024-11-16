'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Loader2, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GameWindowProps {
  locale: string
}

const GAME_LIST = [
  {
    title: 'Sprunki Incredibox',
    image: '/images/games/sprunki-incredibox.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
  },
  {
    title: "Sprunki Dandy's World",
    image: '/images/games/sprunki-dandys-world.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
  },
  {
    title: 'Incredibox Abgerny',
    image: '/images/games/incredibox-abgerny.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
  },
  {
    title: 'Sprunki Infected Mode',
    image: '/images/games/sprunki-infected.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
  },
  {
    title: 'Incredibox Sprunked',
    image: '/images/games/incredibox-sprunked.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
  },
  {
    title: 'Sprunki Babies',
    image: '/images/games/sprunki-babies.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
  },
]

export function GameWindow({ locale }: GameWindowProps) {
  const [isGameLoaded, setIsGameLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentGameUrl, setCurrentGameUrl] = useState(
    'https://iframegame.com/embed/incredibox-sprunki/index.html',
  )
  const gameWindowRef = useRef<HTMLDivElement>(null)

  const titles = {
    en: 'Sprunki Incredibox: Music Game | Create, Mod & Play Online',
    zh: 'Sprunki Incredibox：音乐游戏 | 创作、模组和在线游玩',
    fr: 'Sprunki Incredibox : Jeu Musical | Créez, Moddez et Jouez en Ligne',
    es: 'Sprunki Incredibox: Juego Musical | Crea, Modifica y Juega en Línea',
    ja: 'Sprunki Incredibox：音楽ゲーム | 作成、モディファイ、オンラインプレイ',
  }

  const descriptions = {
    en: 'Explore Sprunki Incredibox: A free fan-made music game. Download mods, mix unique sounds, meet characters, and create epic tracks. Join the community, unleash creativity online!',
    zh: '探索Sprunki Incredibox：一款免费的粉丝制作音乐游戏。下载模组，混合独特音效，结识角色，创作史诗音轨。加入社区，在线释放创造力！',
    fr: 'Découvrez Sprunki Incredibox : Un jeu musical gratuit créé par des fans. Téléchargez des mods, mixez des sons uniques, rencontrez des personnages et créez des pistes épiques. Rejoignez la communauté, libérez votre créativité en ligne !',
    es: 'Explora Sprunki Incredibox: Un juego musical gratuito creado por fans. Descarga mods, mezcla sonidos únicos, conoce personajes y crea pistas épicas. ¡Únete a la comunidad y libera tu creatividad en línea!',
    ja: 'Sprunki Incrediboxを探索：ファンが作った無料の音楽ゲーム。MODをダウンロード、ユニークな音を混ぜ、キャラクターと出会い、エピックなトラックを作成。コミュニティに参加し、オンラインで創造性を解放！',
  }

  // 处理游戏加载
  const handleGameLoad = async (gameUrl: string) => {
    setIsLoading(true)

    try {
      // 模拟加载过程
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setCurrentGameUrl(gameUrl)
      setIsGameLoaded(true)
    } catch (error) {
      console.error('Failed to load game:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // 处理全屏
  const handleFullscreen = () => {
    if (!gameWindowRef.current) return
    
    if (!document.fullscreenElement) {
      gameWindowRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <>
      {/* 全屏加载动画 */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16">
              <Image
                src="/images/sprunki-logo.png"
                alt="Loading"
                fill
                className="animate-spin"
              />
            </div>
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Loading game...</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {/* 游戏主窗口 */}
          <div 
            ref={gameWindowRef}
            className="relative h-[600px] w-[800px] overflow-hidden rounded-lg border bg-card shadow-lg"
          >
            {!isGameLoaded ? (
              <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500/30 via-green-500/30 to-orange-500/30 backdrop-blur-xl">
                {/* 增强渐变背景动画效果 */}
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-yellow-500/30" />
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-500/30 via-emerald-500/30 to-red-500/30 delay-75" />

                <div className="relative z-10 flex w-full items-center justify-between px-16">
                  <div className="max-w-lg space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {titles[locale as keyof typeof titles]}
                    </h2>
                    <p className="text-base text-muted-foreground sm:text-lg">
                      {descriptions[locale as keyof typeof descriptions]}
                    </p>
                    <button
                      onClick={() => {
                        setIsGameLoaded(true)
                        // 添加平滑滚动到游戏窗口
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        })
                      }}
                      className={cn(
                        'group relative flex h-16 min-w-[240px] items-center justify-center overflow-hidden rounded-full bg-black/90 px-8 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 sm:h-20 sm:min-w-[280px] sm:text-xl',
                      )}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <svg
                          className="h-6 w-6 animate-pulse sm:h-7 sm:w-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        PLAY GAME
                      </span>
                      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-75 transition-all duration-500 group-hover:opacity-100" />
                    </button>
                  </div>

                  {/* 角色图片部分增加点击触发 */}
                  <div
                    className="group relative cursor-pointer"
                    onClick={() => {
                      setIsGameLoaded(true)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-pink-500 via-yellow-300 to-gray-500 opacity-75 blur transition duration-300 group-hover:opacity-100" />
                    <div className="relative h-52 w-52 overflow-hidden rounded-full ring-2 ring-white/50 transition-all duration-300 group-hover:scale-105 group-hover:ring-4">
                      <Image
                        src="/images/sprunki-characters.png"
                        alt="Sprunki Characters"
                        fill
                        sizes="(max-width: 768px) 100vw, 208px"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-full w-full transition-all duration-500 ease-in-out">
                <iframe
                  src={currentGameUrl}
                  className="h-full w-full"
                  allow="fullscreen; autoplay; clipboard-write"
                  style={{
                    border: 'none',
                    transform: 'translateZ(0)',
                    margin: '0 auto',
                  }}
                />
                {/* 全屏按钮 */}
                <Button
                  variant="secondary"
                  className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-md bg-zinc-700/90 px-4 py-2 text-sm font-medium text-white shadow-md backdrop-blur-sm transition-colors hover:bg-zinc-700/95"
                  onClick={handleFullscreen}
                >
                  <Maximize2 className="h-4 w-4" />
                  <span>Fullscreen</span>
                </Button>
              </div>
            )}
          </div>

          {/* 分享按钮组 */}
          <div className="flex items-center justify-end gap-2 rounded-lg border bg-card px-4 py-2 shadow-sm">
            <Link
              href={`https://twitter.com/intent/tweet?text=Play%20Sprunki%20Game%20Online&url=${encodeURIComponent('https://sprunkiincrediboxonline.org')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-black/90 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Tweet</span>
            </Link>

            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://sprunkiincrediboxonline.org')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#1877F2] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1877F2]/90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Share</span>
            </Link>

            <Link
              href={`https://reddit.com/submit?url=${encodeURIComponent('https://sprunkiincrediboxonline.org')}&title=Play%20Sprunki%20Game%20Online`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#FF4500] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FF4500]/90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
              <span>Share</span>
            </Link>

            <Link
              href={`https://t.me/share/url?url=${encodeURIComponent('https://sprunkiincrediboxonline.org')}&text=Play%20Sprunki%20Game%20Online`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#0088cc] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0088cc]/90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>Share</span>
            </Link>

            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://sprunkiincrediboxonline.org')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0A66C2]/90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>Share</span>
            </Link>
          </div>
        </div>

        {/* 右侧游戏列表 - 调整宽度和对齐方式 */}
        <div className="grid h-[668px] w-[360px] grid-cols-2 gap-3">
          {GAME_LIST.map((game, index) => (
            <button
              key={game.title}
              onClick={() => handleGameLoad(game.url)}
              className="group relative h-[216px] overflow-hidden rounded-lg border bg-card shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="absolute inset-0">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 2}
                />
              </div>

              {/* Featured 标签 */}
              <div className="absolute left-2 top-2 rounded bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">
                Featured
              </div>

              {/* 渐变遮罩层 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* 标题和按钮容器 */}
              <div className="absolute inset-x-0 bottom-0 p-3">
                <h3 className="mb-2 line-clamp-1 text-sm font-medium text-white">
                  {game.title}
                </h3>

                {/* Play Now 按钮 */}
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-medium text-white/80">
                    Play Now
                  </span>
                  <svg
                    className="h-3 w-3 text-white/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* 鼠标悬停时的高亮效果 */}
              <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-blue-500/50" />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
