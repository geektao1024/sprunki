import { Locale } from '@/i18n'

interface GameDescriptionProps {
  locale: Locale
}

export function GameDescription({ locale }: GameDescriptionProps) {
  const titles = {
    en: 'Level Devil: Free Puzzle Adventure',
    zh: '恶魔关卡：免费解谜冒险',
    fr: 'Level Devil : Aventure de Puzzle Gratuite',
    es: 'Level Devil: Aventura de Puzles Gratuita',
    ja: 'レベルデビル：無料パズルアドベンチャー'
  }

  const descriptions = {
    en: 'Welcome to Level Devil, your destination...',
    zh: '欢迎来到恶魔关卡，这里是您免费在线解谜刺激的目的地！...',
    fr: 'Bienvenue dans Level Devil, votre destination...',
    es: '¡Bienvenido a Level Devil, tu destino para emocionantes puzles en línea gratuitos! Desafíate con Level Devil 2 y 3, repletos de trampas ingeniosas y sorpresas ocultas. Juega sin problemas en PC o móvil sin necesidad de descargas. Colecciona llaves, navega por obstáculos y conquista cada nivel diabólico. ¡Únete a la aventura hoy y demuestra tus habilidades!',
    ja: 'レベルデビルへようこそ！無料オンラインパズルの世界で冒険を始めましょう。レベルデビル2と3で、巧妙な罠や隠された驚きに挑戦してください。PCやモバイルでダウンロード不要で楽しめます。鍵を集め、障害物を乗り越え、悪魔的なレベルを征服しましょう。今すぐ冒険に参加して、あなたのスキルを証明しましょう！'
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