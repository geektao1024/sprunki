import { Locale } from '@/i18n'

interface GameInstructionsProps {
  locale: Locale
}

export function GameInstructions({ locale }: GameInstructionsProps) {
  const titles = {
    en: 'How to Play Level Devil',
    zh: '如何玩恶魔关卡',
    fr: 'Comment Jouer à Level Devil',
    es: 'Cómo jugar a Level Devil',
    ja: 'レベルデビルの遊び方'
  }

  const instructions = {
    en: [
      {
        title: 'Master the Controls',
        content: 'Use the WASD or arrow keys for movement and the spacebar to jump as you navigate through Level Devil\'s challenging levels on PC or mobile.'
      },
      {
        title: 'Anticipate Surprises',
        content: 'Be prepared for unexpected traps and sudden shifts in the environment, like disappearing platforms, in both Level Devil 2 and 3.'
      },
      {
        title: 'Study Each Level',
        content: 'Before diving in, take a moment to examine the layout and spot potential obstacles or hidden secrets that might be present.'
      },
      {
        title: 'Hone Your Precision',
        content: 'Practice precise timing and control; these skills are crucial for avoiding traps and making difficult jumps, especially in free online puzzle games like Level Devil.'
      },
      {
        title: 'Monitor the Environment',
        content: 'Watch for clues in the surroundings that might indicate secret paths or upcoming hazards in this free adventure.'
      },
      {
        title: 'Adapt Your Strategy',
        content: 'Each level presents unique challenges that may require a different approach, so be flexible in your tactics.'
      },
      {
        title: 'Embrace Trial and Error',
        content: 'Don\'t let setbacks discourage you. Use each attempt as an opportunity to improve and master the devilish challenges that Level Devil offers.'
      }
    ],
    zh: [
      {
        title: '掌握控制',
        content: '在电脑或手机上使用WASD或方向键移动，空格键跳跃，穿越恶魔关卡的挑战性关卡。'
      },
      {
        title: '预料意外',
        content: '在恶魔关卡2和3中，要准备好应对意外陷阱和环境的突然变化，比如消失的平台。'
      },
      {
        title: '研究关卡',
        content: '在开始之前，花点时间观察布局，发现潜在的障碍或可能存在的隐藏秘密。'
      },
      {
        title: '提升精准度',
        content: '练习精确的时机把控和操作；这些技能对于避开陷阱和完成困难跳跃至关重要，尤其是在恶魔关卡这样的免费在线解谜游戏中。'
      },
      {
        title: '观察环境',
        content: '在这个免费冒险中，注意周围环境中可能指示秘密路径或即将出现的危险的线索。'
      },
      {
        title: '调整策略',
        content: '每个关卡都呈现独特的挑战，可能需要不同的方法，所以要灵活调整你的策略。'
      },
      {
        title: '接受试错',
        content: '不要让挫折打击你。把每次尝试都当作提升自己、掌握恶魔关卡中魔鬼挑战的机会。'
      }
    ],
    fr: [
      {
        title: 'Maîtrisez les Contrôles',
        content: 'Utilisez les touches WASD ou les flèches pour vous déplacer et la barre d\'espace pour sauter dans les niveaux stimulants de Level Devil sur PC ou mobile.'
      },
      {
        title: 'Anticipez les Surprises',
        content: 'Soyez prêt pour des pièges inattendus et des changements soudains dans l\'environnement, comme des plateformes qui disparaissent, dans Level Devil 2 et 3.'
      },
      {
        title: 'Étudiez Chaque Niveau',
        content: 'Avant de plonger, prenez un moment pour examiner la disposition et repérer les obstacles potentiels ou les secrets cachés.'
      },
      {
        title: 'Affinez Votre Précision',
        content: 'Entraînez-vous au timing et au contrôle précis ; ces compétences sont cruciales pour éviter les pièges et réussir les sauts difficiles.'
      },
      {
        title: 'Surveillez l\'Environnement',
        content: 'Observez les indices dans l\'environnement qui pourraient indiquer des chemins secrets ou des dangers à venir dans cette aventure gratuite.'
      },
      {
        title: 'Adaptez Votre Stratégie',
        content: 'Chaque niveau présente des défis uniques qui peuvent nécessiter une approche différente, soyez donc flexible dans vos tactiques.'
      },
      {
        title: 'Acceptez l\'Essai et l\'Erreur',
        content: 'Ne vous laissez pas décourager par les échecs. Utilisez chaque tentative comme une opportunité de vous améliorer et de maîtriser les défis diaboliques de Level Devil.'
      }
    ],
    es: [
      {
        title: 'Domina los Controles',
        content: 'Usa WASD o las teclas de flecha para moverte y la barra espaciadora para saltar a través de los desafiantes niveles de Level Devil en PC o móvil.'
      },
      {
        title: 'Anticipa lo Inesperado',
        content: 'En Level Devil 2 y 3, prepárate para trampas sorpresa y cambios repentinos en el entorno, como plataformas que desaparecen.'
      },
      {
        title: 'Estudia los Niveles',
        content: 'Tómate un momento para observar el diseño antes de comenzar, identificando obstáculos potenciales o secretos ocultos.'
      },
      {
        title: 'Mejora tu Precisión',
        content: 'Practica el tiempo y control precisos; estas habilidades son cruciales para evitar trampas y completar saltos difíciles en este juego gratuito de puzzles en línea.'
      },
      {
        title: 'Observa el Entorno',
        content: 'Presta atención a las pistas en el entorno que podrían indicar caminos secretos o peligros inminentes en esta aventura gratuita.'
      },
      {
        title: 'Adapta tu Estrategia',
        content: 'Cada nivel presenta desafíos únicos que pueden requerir diferentes enfoques, así que sé flexible con tus tácticas.'
      },
      {
        title: 'Acepta el Proceso',
        content: 'No te desanimes por los fracasos. Usa cada intento como una oportunidad para mejorar y dominar los desafíos diabólicos de Level Devil.'
      }
    ],
    ja: [
      {
        title: 'コントロールをマスター',
        content: 'PCやモバイルでWASDキーまたは矢印キーで移動し、スペースバーでジャンプして、レベルデビルの挑戦的なレベルを攻略しましょう。'
      },
      {
        title: '予期せぬ展開に備える',
        content: 'レベルデビル2と3では、消える足場など、予期せぬ罠や環境の突然の変化に備えましょう。'
      },
      {
        title: 'レベルを研究',
        content: '開始前に、レイアウトをよく観察し、潜在的な障害物や隠されたヒントを見つけましょう。'
      },
      {
        title: '精密さを磨く',
        content: '正確なタイミングとコントロールを練習しましょう。これらのスキルは、罠を避け、難しいジャンプを成功させるために重要です。'
      },
      {
        title: '環境を観察',
        content: '隠された道や迫り来る危険を示す環境のヒントに注意を払いましょう。'
      },
      {
        title: '戦略を適応させる',
        content: '各レベルには独自の課題があり、異なるアプローチが必要かもしれません。柔軟に戦術を変更しましょう。'
      },
      {
        title: '試行錯誤を受け入れる',
        content: '失敗にくじけないでください。各挑戦を、レベルデビルの悪魔的な課題をマスターする機会として活用しましょう。'
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
          {instructions[locale as keyof typeof instructions].map((instruction, index) => (
            <div key={`instruction-${index}`} className="space-y-2">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary" />
                {instruction.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {instruction.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 