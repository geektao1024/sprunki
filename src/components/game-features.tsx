import { Locale } from '@/i18n'

interface GameFeaturesProps {
  locale: Locale
}

export function GameFeatures({ locale }: GameFeaturesProps) {
  const titles = {
    en: 'Sprunki Incredibox Game Features',
    zh: 'Sprunki Incredibox 游戏特色',
    fr: 'Fonctionnalités de Sprunki Incredibox',
    es: 'Características de Sprunki Incredibox',
    ja: 'Sprunki Incredibox ゲームの特徴',
  }

  const subtitles = {
    en: 'Explore the amazing features that make Sprunki Incredibox a must-play game!',
    zh: '探索让 Sprunki Incredibox 成为必玩游戏的精彩特色！',
    fr: 'Découvrez les fonctionnalités incroyables qui font de Sprunki Incredibox un jeu incontournable !',
    es: '¡Explora las increíbles características que hacen de Sprunki Incredibox un juego imprescindible!',
    ja: 'Sprunki Incredibox を必須プレイにする素晴らしい特徴をご覧ください！',
  }

  const features = {
    en: [
      {
        title: 'Unique Soundscapes',
        content:
          'Offers a variety of quirky sounds and samples, allowing players to create one-of-a-kind musical compositions.',
      },
      {
        title: 'Quirky and Lovable Characters',
        content:
          'Features a diverse cast of characters, from robots to yetis, each adding their unique flavor to the music creation process.',
      },
      {
        title: 'Vibrant Visuals',
        content:
          'Immerses players in a colorful, animated world that enhances the overall visual experience.',
      },
      {
        title: 'Intuitive Drag-and-Drop Interface',
        content:
          'Easy-to-use interface that enables anyone to start creating music effortlessly.',
      },
      {
        title: 'Zany Effects and Transitions',
        content:
          'Adds unique sound effects and transitions, enriching the depth and fun of musical creations.',
      },
      {
        title: 'Community Sharing and Interaction',
        content:
          'Allows players to easily share their musical creations and engage with other players for inspiration and collaboration.',
      },
    ],
    zh: [
      {
        title: '独特音景',
        content: '提供各种独特的声音和采样，让玩家创作独一无二的音乐作品。',
      },
      {
        title: '古怪可爱的角色',
        content:
          '拥有多样化的角色阵容，从机器人到雪人，每个角色都为音乐创作过程增添独特风味。',
      },
      {
        title: '生动的视觉效果',
        content: '让玩家沉浸在色彩缤纷的动画世界中，提升整体视觉体验。',
      },
      {
        title: '直观的拖放界面',
        content: '简单易用的界面，让任何人都能轻松开始创作音乐。',
      },
      {
        title: '有趣的效果和转场',
        content: '添加独特的音效和转场，丰富音乐创作的深度和乐趣。',
      },
      {
        title: '社区分享与互动',
        content:
          '让玩家轻松分享他们的音乐创作，并与其他玩家互动以获得灵感和合作机会。',
      },
    ],
    fr: [
      {
        title: 'Paysages Sonores Uniques',
        content:
          "Propose une variété de sons et d'échantillons originaux, permettant aux joueurs de créer des compositions musicales uniques.",
      },
      {
        title: 'Personnages Attachants',
        content:
          'Présente une distribution variée de personnages, des robots aux yétis, chacun apportant sa touche unique au processus de création musicale.',
      },
      {
        title: 'Visuels Vibrants',
        content:
          "Immerge les joueurs dans un monde coloré et animé qui améliore l'expérience visuelle globale.",
      },
      {
        title: 'Interface Glisser-Déposer Intuitive',
        content:
          'Interface facile à utiliser permettant à chacun de commencer à créer de la musique sans effort.',
      },
      {
        title: 'Effets et Transitions Originaux',
        content:
          'Ajoute des effets sonores et des transitions uniques, enrichissant la profondeur et le plaisir des créations musicales.',
      },
      {
        title: 'Partage et Interaction Communautaire',
        content:
          "Permet aux joueurs de partager facilement leurs créations musicales et d'interagir avec d'autres joueurs pour s'inspirer et collaborer.",
      },
    ],
    es: [
      {
        title: 'Paisajes Sonoros Únicos',
        content:
          'Ofrece una variedad de sonidos y muestras peculiares, permitiendo a los jugadores crear composiciones musicales únicas.',
      },
      {
        title: 'Personajes Peculiares y Adorables',
        content:
          'Presenta un elenco diverso de personajes, desde robots hasta yetis, cada uno aportando su sabor único al proceso de creación musical.',
      },
      {
        title: 'Visuales Vibrantes',
        content:
          'Sumerge a los jugadores en un mundo colorido y animado que mejora la experiencia visual general.',
      },
      {
        title: 'Interfaz Intuitiva de Arrastrar y Soltar',
        content:
          'Interfaz fácil de usar que permite a cualquiera comenzar a crear música sin esfuerzo.',
      },
      {
        title: 'Efectos y Transiciones Divertidos',
        content:
          'Añade efectos de sonido y transiciones únicas, enriqueciendo la profundidad y diversión de las creaciones musicales.',
      },
      {
        title: 'Compartir e Interactuar en Comunidad',
        content:
          'Permite a los jugadores compartir fácilmente sus creaciones musicales e interactuar con otros jugadores para inspirarse y colaborar.',
      },
    ],
    ja: [
      {
        title: 'ユニークなサウンドスケープ',
        content:
          '個性的なサウンドとサンプルを多数提供し、プレイヤーが独自の音楽作品を作れます。',
      },
      {
        title: '個性的で愛らしいキャラクター',
        content:
          'ロボットからイエティまで、多様なキャラクターが音楽制作に独自の味わいを加えます。',
      },
      {
        title: '鮮やかなビジュアル',
        content:
          'カラフルでアニメーションのある世界にプレイヤーを没入させ、視覚体験を向上させます。',
      },
      {
        title: '直感的なドラッグ＆ドロップ操作',
        content: '誰でも簡単に音楽制作を始められる使いやすいインターフェース。',
      },
      {
        title: 'ユニークな効果と転換',
        content:
          '独特な音響効果とトランジションを追加し、音楽制作の深みと楽しさを豊かにします。',
      },
      {
        title: 'コミュニティ共有と交流',
        content:
          'プレイヤーが音楽作品を簡単に共有し、他のプレイヤーとインスピレーションや協力のために交流できます。',
      },
    ],
  }

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="rounded-lg border bg-card p-6 shadow-lg">
        <h2 className="mb-2 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          {titles[locale]}
        </h2>
        <p className="mb-6 text-center text-muted-foreground">
          {subtitles[locale]}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features[locale].map((feature, index) => (
            <div key={`feature-${index}`} className="space-y-2">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary" />
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
