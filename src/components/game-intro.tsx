import { Locale } from '@/i18n'

interface GameIntroProps {
  locale: Locale
}

export function GameIntro({ locale }: GameIntroProps) {
  const titles = {
    en: 'Play Level Devil for Free & Unblocked on leveldevil.club',
    zh: '在 leveldevil.club 免费畅玩恶魔关卡',
    fr: 'Jouez à Level Devil Gratuitement et Sans Restriction sur leveldevil.club',
    es: 'Juega Level Devil Gratis y Sin Bloqueos en leveldevil.club',
    ja: 'レベルデビルを leveldevil.club で無料＆制限なしでプレイ'
  }

  const descriptions = {
    en: 'Are you searching for a new and exciting game...',
    zh: '你在寻找一款能让你着迷的全新刺激游戏吗？...',
    fr: 'Vous cherchez un nouveau jeu passionnant...',
    es: '¿Estás buscando un juego nuevo y emocionante que cautive tus sentidos? No busques más allá de Level Devil, una aventura emocionante diseñada para mantenerte al borde de tu asiento. ¿La mejor parte? Experimenta toda la acción llena de adrenalina gratis en leveldevil.club, sin restricciones ni limitaciones. En este artículo, exploraremos qué hace que Level Devil sea tan adictivo y por qué deberías sumergirte en esta emocionante aventura hoy mismo.',
    ja: '新しい刺激的なゲームをお探しですか？レベルデビルは、あなたを夢中にさせる冒険です。最高の部分は？leveldevil.club で、制限や制約なしで、アドレナリン満載のアクションを無料で体験できることです。この記事では、レベルデビルが中毒性のある理由と、今すぐこのエキサイティングな冒険に飛び込むべき理由をご紹介します。'
  }

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="rounded-lg border bg-card p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          {titles[locale]}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {descriptions[locale]}
        </p>
      </div>
    </div>
  )
} 