import { Locale } from '@/i18n'

interface GameInstructionsProps {
  locale: Locale
}

export function GameInstructions({ locale }: GameInstructionsProps) {
  const titles = {
    en: 'How to Play Sprunki Incredibox',
    zh: '如何玩 Sprunki Incredibox',
    fr: 'Comment Jouer à Sprunki Incredibox',
    es: 'Cómo Jugar a Sprunki Incredibox',
    ja: 'Sprunki Incredibox の遊び方',
  }

  const subtitles = {
    en: 'Follow these easy steps to dive into the world of Sprunki Incredibox!',
    zh: '按照这些简单步骤，开启 Sprunki Incredibox 的音乐世界！',
    fr: "Suivez ces étapes simples pour plonger dans l'univers de Sprunki Incredibox !",
    es: '¡Sigue estos sencillos pasos para sumergirte en el mundo de Sprunki Incredibox!',
    ja: 'これらの簡単なステップに従って、Sprunki Incredibox の世界に飛び込もう！',
  }

  const steps = {
    en: [
      {
        number: '1',
        title: 'Visit the Sprunki Incredibox Website',
        content:
          "Start your musical journey by visiting the official Sprunki Incredibox website. Here, you can familiarize yourself with the game's mechanics, explore features, and watch tutorial videos that will help you get started effortlessly.",
      },
      {
        number: '2',
        title: 'Select Your Characters and Sounds on Sprunki Incredibox',
        content:
          "Once you're on the platform, choose your quirky characters and sounds. Each option can significantly alter the vibe of your tracks. Experiment with different combinations and let your creativity flow as you begin crafting your unique beats!",
      },
      {
        number: '3',
        title: 'Start Creating Sprunky Beats on sprunki.io',
        content:
          "Now that you've selected your sounds and characters, it's time to start creating sprunky beats! Mix and match the sounds to make distinct rhythm patterns. Enjoy the process, share your creations, and unleash your inner musical maverick!",
      },
    ],
    zh: [
      {
        number: '1',
        title: '访问 Sprunki Incredibox 网站',
        content:
          '通过访问官方 Sprunki Incredibox 网站开始您的音乐之旅。在这里，您可以熟悉游戏机制，探索功能，观看教程视频，轻松入门。',
      },
      {
        number: '2',
        title: '在 Sprunki Incredibox 上选择角色和音效',
        content:
          '进入平台后，选择您喜欢的独特角色和音效。每个选项都能显著改变您的音轨风格。尝试不同的组合，在创作独特节拍时释放创造力！',
      },
      {
        number: '3',
        title: '在 sprunki.io 开始创作节拍',
        content:
          '现在您已经选好了音效和角色，是时候开始创作独特节拍了！混合搭配音效来创造独特的节奏模式。享受创作过程，分享您的作品，释放您内心的音乐创意！',
      },
    ],
    fr: [
      {
        number: '1',
        title: 'Visitez le Site Web de Sprunki Incredibox',
        content:
          'Commencez votre voyage musical en visitant le site officiel de Sprunki Incredibox. Ici, vous pouvez vous familiariser avec les mécaniques du jeu, explorer les fonctionnalités et regarder des tutoriels vidéo qui vous aideront à démarrer facilement.',
      },
      {
        number: '2',
        title: 'Sélectionnez Vos Personnages et Sons sur Sprunki Incredibox',
        content:
          "Une fois sur la plateforme, choisissez vos personnages et sons originaux. Chaque option peut modifier significativement l'ambiance de vos pistes. Expérimentez différentes combinaisons et laissez votre créativité s'exprimer en créant vos rythmes uniques !",
      },
      {
        number: '3',
        title: 'Commencez à Créer des Rythmes sur sprunki.io',
        content:
          'Maintenant que vous avez sélectionné vos sons et personnages, il est temps de créer des rythmes uniques ! Mélangez les sons pour créer des motifs rythmiques distincts. Profitez du processus, partagez vos créations et libérez votre créativité musicale !',
      },
    ],
    es: [
      {
        number: '1',
        title: 'Visita el Sitio Web de Sprunki Incredibox',
        content:
          'Comienza tu viaje musical visitando el sitio web oficial de Sprunki Incredibox. Aquí podrás familiarizarte con la mecánica del juego, explorar funciones y ver videos tutoriales que te ayudarán a comenzar sin esfuerzo.',
      },
      {
        number: '2',
        title: 'Selecciona tus Personajes y Sonidos en Sprunki Incredibox',
        content:
          'Una vez en la plataforma, elige tus personajes y sonidos peculiares. Cada opción puede alterar significativamente el ambiente de tus pistas. ¡Experimenta con diferentes combinaciones y deja fluir tu creatividad mientras creas tus ritmos únicos!',
      },
      {
        number: '3',
        title: 'Empieza a Crear Ritmos en sprunki.io',
        content:
          '¡Ahora que has seleccionado tus sonidos y personajes, es hora de empezar a crear ritmos únicos! Mezcla y combina los sonidos para crear patrones rítmicos distintos. ¡Disfruta del proceso, comparte tus creaciones y libera tu creatividad musical!',
      },
    ],
    ja: [
      {
        number: '1',
        title: 'Sprunki Incredibox ウェブサイトにアクセス',
        content:
          '公式 Sprunki Incredibox ウェブサイトにアクセスして、音楽の旅を始めましょう。ここでは、ゲームの仕組みを理解し、機能を探索し、チュートリアル動画を見て簡単に始められます。',
      },
      {
        number: '2',
        title: 'Sprunki Incredibox でキャラクターとサウンドを選択',
        content:
          'プラットフォームに入ったら、個性的なキャラクターとサウンドを選びましょう。各オプションはトラックの雰囲気を大きく変えることができます。さまざまな組み合わせを試して、独自のビートを作り始めましょう！',
      },
      {
        number: '3',
        title: 'sprunki.io でビート作成を開始',
        content:
          'サウンドとキャラクターを選んだら、ユニークなビートを作り始める時です！サウンドをミックスして独特のリズムパターンを作りましょう。創作過程を楽しみ、作品を共有し、音楽的創造性を解き放ちましょう！',
      },
    ],
  }

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="rounded-lg border bg-card p-6 shadow-lg">
        <h2 className="mb-2 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          {titles[locale]}
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          {subtitles[locale]}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps[locale].map((step) => (
            <div
              key={step.number}
              className="relative space-y-2 rounded-lg border bg-card/50 p-4"
            >
              <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
