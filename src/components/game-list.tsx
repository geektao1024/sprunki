'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

interface Game {
  title: string
  image: string
  url: string
  isHot?: boolean
  isNew?: boolean
}

const GAMES: Game[] = [
  {
    title: 'Sprunki Halloween',
    image: '/images/games/sprunki-halloween.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  {
    title: 'Sprunki Retake',
    image: '/images/games/sprunki-retake.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  {
    title: 'Sprunki Greencore',
    image: '/images/games/sprunki-greencore.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  {
    title: 'Sprunked Scratch',
    image: '/images/games/sprunked-scratch.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  {
    title: 'Sprunki Rejoyed',
    image: '/images/games/sprunki-rejoyed.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  // 第二行
  {
    title: 'Sprunki Mastered',
    image: '/images/games/sprunki-mastered.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  {
    title: 'Sprunki But Everyone Is Alive',
    image: '/images/games/sprunki-everyone-alive.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  {
    title: 'Incredibox Mustard',
    image: '/images/games/incredibox-mustard.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  {
    title: 'Sprejecz',
    image: '/images/games/sprejecz.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  {
    title: 'Sprunki But I Ruined It',
    image: '/images/games/sprunki-ruined.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isHot: true,
  },
  // 第三行
  {
    title: 'Sprunki Ruang Roblox',
    image: '/images/games/sprunki-ruang-roblox.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  {
    title: 'Sprunki Ralr',
    image: '/images/games/sprunki-ralr.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  {
    title: 'Sprunki Trevor',
    image: '/images/games/sprunki-trevor.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  {
    title: 'Sprunki X Orin Ayo',
    image: '/images/games/sprunki-orin-ayo.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  {
    title: 'Sprunki Terror Forms',
    image: '/images/games/sprunki-terror-forms.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  // 第四行
  {
    title: 'Sprunki Fnaf 4',
    image: '/images/games/sprunki-fnaf-4.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  {
    title: 'Sprunki Eddsworld Mod',
    image: '/images/games/sprunki-eddsworld.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  {
    title: 'Sprunki Tadc Game',
    image: '/images/games/sprunki-tadc.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  {
    title: 'Sprunki But Something Is Wrong',
    image: '/images/games/sprunki-something-wrong.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
  {
    title: 'Incredibox V1',
    image: '/images/games/incredibox-v1.png',
    url: 'https://iframegame.com/embed/incredibox-sprunki/index.html',
    isNew: true,
  },
]

export function GameList() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentGameUrl, setCurrentGameUrl] = useState('')

  // 处理游戏加载
  const handleGameLoad = async (gameUrl: string) => {
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // 将路由转换为实际的游戏 URL
      const actualGameUrl = `https://iframegame.com/embed${gameUrl}/index.html`
      setCurrentGameUrl(actualGameUrl)

      // 触发父组件的游戏加载
      window.dispatchEvent(
        new CustomEvent('loadGame', {
          detail: { url: actualGameUrl },
        }),
      )

      // 平滑滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Failed to load game:', error)
    } finally {
      setIsLoading(false)
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

      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">
          More Incredibox Sprunki Mod Games
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {GAMES.map((game, index) => (
            <button
              key={game.title}
              onClick={() => handleGameLoad(game.url)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="relative h-full w-full">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 240px"
                  priority={index < 10}
                  loading={index < 10 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    console.error(`Failed to load image: ${game.image}`)
                    ;(e.target as HTMLImageElement).src =
                      '/images/placeholder.jpg'
                  }}
                />
              </div>

              {(game.isHot || game.isNew) && (
                <div
                  className={`absolute left-2 top-2 rounded px-2 py-0.5 text-xs font-medium text-white ${
                    game.isHot ? 'bg-red-500' : 'bg-green-500'
                  }`}
                >
                  {game.isHot ? 'HOT' : 'NEW'}
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-3">
                <h3 className="mb-2 line-clamp-2 text-sm font-medium text-white">
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

              <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-blue-500/50" />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
