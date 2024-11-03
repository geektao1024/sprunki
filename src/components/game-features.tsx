import { Locale } from '@/i18n'

interface GameFeaturesProps {
  locale: Locale
}

export function GameFeatures({ locale }: GameFeaturesProps) {
  const titles = {
    en: 'Game Features of Level Devil',
    zh: '恶魔关卡游戏特点',
    fr: 'Caractéristiques du Jeu Level Devil'
  }

  const features = {
    en: [
      {
        title: 'Unpredictable Challenges',
        content: 'Experience thrilling surprises with features like crumbling ceilings, moving spikes, and disappearing floors that keep players on their toes.'
      },
      {
        title: 'Dynamic Level Design',
        content: 'Each level presents unique challenges requiring flexibility and strategic planning to navigate successfully.'
      },
      {
        title: 'High Difficulty Level',
        content: 'Test your reflexes, patience, and strategic thinking as you tackle the game\'s tough obstacles and intricate puzzles.'
      },
      {
        title: 'Learning From Failure',
        content: 'Embrace each setback as an opportunity to improve. Hone your tactics and master the game with perseverance.'
      },
      {
        title: 'Community Engagement',
        content: 'Join a dedicated player community where testimonials highlight the excitement and satisfaction of overcoming the game\'s challenges.'
      },
      {
        title: 'Strategy and Patience Test',
        content: 'Success requires not just quick reflexes, but also strategic thinking, endurance, and a calm approach to the game\'s demanding levels.'
      },
      {
        title: 'Browser-Based Play',
        content: 'Enjoy Level Devil online directly in your browser without needing to download, making it easily accessible for everyone.'
      }
    ],
    zh: [
      {
        title: '不可预测的挑战',
        content: '体验令人兴奋的惊喜，如崩塌的天花板、移动的尖刺和消失的地板，让玩家时刻保持警惕。'
      },
      {
        title: '动态关卡设计',
        content: '每个关卡都呈现独特的挑战，需要灵活性和战略规划才能成功通过。'
      },
      {
        title: '高难度等级',
        content: '在应对游戏的艰难障碍和复杂谜题时，测试你的反应能力、耐心和战略思维。'
      },
      {
        title: '从失败中学习',
        content: '将每次挫折视为提升的机会。通过坚持不懈来磨练你的策略并掌握游戏。'
      },
      {
        title: '社区参与',
        content: '加入专注的玩家社区，玩家的评价突显了克服游戏挑战的兴奋和满足感。'
      },
      {
        title: '策略和耐心的考验',
        content: '成功不仅需要快速的反应，还需要战略思维、耐力和冷静面对游戏具有挑战性的关卡。'
      },
      {
        title: '浏览器游戏',
        content: '直接在浏览器中享受恶魔关卡，无需下载，让每个人都能轻松访问。'
      }
    ],
    fr: [
      {
        title: 'Défis Imprévisibles',
        content: 'Découvrez des surprises palpitantes avec des fonctionnalités comme des plafonds qui s\'effondrent, des piques mobiles et des sols qui disparaissent.'
      },
      {
        title: 'Design de Niveau Dynamique',
        content: 'Chaque niveau présente des défis uniques nécessitant flexibilité et planification stratégique pour réussir.'
      },
      {
        title: 'Niveau de Difficulté Élevé',
        content: 'Testez vos réflexes, votre patience et votre réflexion stratégique face aux obstacles difficiles et aux énigmes complexes du jeu.'
      },
      {
        title: 'Apprendre de l\'Échec',
        content: 'Considérez chaque revers comme une opportunité de vous améliorer. Affinez vos tactiques et maîtrisez le jeu avec persévérance.'
      },
      {
        title: 'Engagement Communautaire',
        content: 'Rejoignez une communauté de joueurs dédiée où les témoignages soulignent l\'excitation et la satisfaction de surmonter les défis du jeu.'
      },
      {
        title: 'Test de Stratégie et de Patience',
        content: 'La réussite nécessite non seulement des réflexes rapides, mais aussi une réflexion stratégique et une approche calme des niveaux exigeants.'
      },
      {
        title: 'Jeu sur Navigateur',
        content: 'Profitez de Level Devil directement dans votre navigateur sans téléchargement, le rendant facilement accessible à tous.'
      }
    ],
    es: [
      {
        title: 'Desafíos Impredecibles',
        content: 'Experimenta emocionantes sorpresas con características como techos que se derrumban, picos móviles y suelos que desaparecen, manteniendo a los jugadores siempre alerta.'
      },
      {
        title: 'Diseño de Niveles Dinámico',
        content: 'Cada nivel presenta desafíos únicos que requieren flexibilidad y planificación estratégica para tener éxito.'
      },
      {
        title: 'Alto Nivel de Dificultad',
        content: 'Pon a prueba tus reflejos, paciencia y pensamiento estratégico mientras te enfrentas a los difíciles obstáculos y complejos puzzles del juego.'
      },
      {
        title: 'Aprende de los Fracasos',
        content: 'Considera cada revés como una oportunidad para mejorar. Perfecciona tus tácticas y domina el juego con perseverancia.'
      },
      {
        title: 'Participación Comunitaria',
        content: 'Únete a una comunidad dedicada de jugadores donde los testimonios destacan la emoción y satisfacción de superar los desafíos del juego.'
      },
      {
        title: 'Prueba de Estrategia y Paciencia',
        content: 'El éxito requiere no solo reflejos rápidos, sino también pensamiento estratégico y resistencia para enfrentar los niveles desafiantes del juego.'
      },
      {
        title: 'Juego en Navegador',
        content: 'Disfruta de Level Devil directamente en tu navegador sin necesidad de descargas, haciéndolo fácilmente accesible para todos.'
      }
    ]
  }

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="rounded-lg border bg-card p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
          {titles[locale as keyof typeof titles]}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {features[locale as keyof typeof features].map((feature, index) => (
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