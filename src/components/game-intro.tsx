import { Locale } from '@/i18n'

interface GameIntroProps {
  locale: Locale
}

export function GameIntro({ locale }: GameIntroProps) {
  const titles = {
    en: 'Play Level Devil for Free & Unblocked on leveldevil.club',
    zh: '在 leveldevil.club 免费畅玩恶魔关卡',
    fr: 'Jouez à Level Devil Gratuitement et Sans Restriction sur leveldevil.club',
    es: 'Juega Level Devil Gratis y Sin Bloqueos en leveldevil.club'
  }

  const descriptions = {
    en: 'Are you searching for a new and exciting game to captivate your senses? Look no further than Level Devil, a thrilling adventure designed to keep you on the edge of your seat. The best part? Experience all the adrenaline-pumping action for free on leveldevil.club, with no restrictions or limitations. In this article, we\'ll explore what makes Level Devil unblocked so addictive and why you should dive into this exhilarating journey today.',
    zh: '你在寻找一款能让你着迷的全新刺激游戏吗？恶魔关卡就是你的不二之选，这是一款让你欲罢不能的冒险游戏。最棒的是什么？你可以在 leveldevil.club 上完全免费体验所有令人肾上腺素飙升的动作，没有任何限制。让我们一起来探索是什么让恶魔关卡如此令人上瘾，以及为什么你今天就应该投入到这个令人兴奋的冒险中。',
    fr: 'Vous cherchez un nouveau jeu passionnant pour captiver vos sens ? Ne cherchez pas plus loin que Level Devil, une aventure palpitante conçue pour vous tenir en haleine. Le meilleur ? Vivez toute l\'action palpitante gratuitement sur leveldevil.club, sans restrictions ni limitations. Découvrons ce qui rend Level Devil si addictif et pourquoi vous devriez vous lancer dans ce voyage exaltant dès aujourd\'hui.',
    es: '¿Estás buscando un juego nuevo y emocionante que cautive tus sentidos? No busques más que Level Devil, una aventura emocionante diseñada para mantenerte al borde de tu asiento. ¿La mejor parte? Experimenta toda la acción llena de adrenalina gratis en leveldevil.club, sin restricciones ni limitaciones. Descubramos qué hace que Level Devil sea tan adictivo y por qué deberías sumergirte en este viaje emocionante hoy mismo.'
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