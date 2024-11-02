import { Locale } from '@/i18n'

interface GameDescriptionProps {
  locale: Locale
}

export function GameDescription({ locale }: GameDescriptionProps) {
  const titles = {
    en: 'Level Devil: Free Puzzle Adventure',
    zh: '恶魔关卡：免费解谜冒险',
    fr: 'Level Devil : Aventure de Puzzle Gratuite'
  }

  const descriptions = {
    en: 'Welcome to Level Devil, your destination for free online puzzle thrills! Challenge yourself with Level Devil 2 & 3, packed with tricky traps and hidden surprises. Play seamlessly on PC or mobile without downloads. Collect keys, navigate obstacles, and conquer each devilish level. Join the adventure today and prove your skills!',
    zh: '欢迎来到恶魔关卡，这里是您免费在线解谜刺激的目的地！挑战自我，体验恶魔关卡 2 & 3，充满巧妙的陷阱和隐藏的惊喜。在电脑或手机上无需下载即可流畅游戏。收集钥匙，穿越障碍，征服每一个魔鬼关卡。今天就加入冒险，证明你的实力！',
    fr: 'Bienvenue dans Level Devil, votre destination pour des sensations fortes de puzzle en ligne gratuites ! Défiez-vous avec Level Devil 2 & 3, rempli de pièges astucieux et de surprises cachées. Jouez sans problème sur PC ou mobile sans téléchargement. Collectez des clés, naviguez à travers les obstacles et conquérez chaque niveau diabolique. Rejoignez l\'aventure aujourd\'hui et prouvez vos compétences !'
  }

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="rounded-lg border bg-card p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          {titles[locale]}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {descriptions[locale]}
        </p>
      </div>
    </div>
  )
} 