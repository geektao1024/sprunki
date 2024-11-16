'use client'

import { Locale } from '@/i18n'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface GameFAQProps {
  locale: Locale
}

export function GameFAQ({ locale }: GameFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const titles = {
    en: 'Frequently Asked Questions about Sprunki Incredibox',
    zh: 'Sprunki Incredibox 常见问题解答',
    fr: 'Questions Fréquentes sur Sprunki Incredibox',
    es: 'Preguntas Frecuentes sobre Sprunki Incredibox',
    ja: 'Sprunki Incredibox によくある質問',
  }

  const subtitles = {
    en: 'Explore our FAQs to learn more about Sprunki Incredibox!',
    zh: '浏览我们的常见问题，了解更多关于 Sprunki Incredibox 的信息！',
    fr: 'Explorez nos FAQ pour en savoir plus sur Sprunki Incredibox !',
    es: '¡Explora nuestras preguntas frecuentes para aprender más sobre Sprunki Incredibox!',
    ja: 'FAQを探索して、Sprunki Incrediboxについてもっと知ろう！',
  }

  const faqs = {
    en: [
      {
        question: 'What is Sprunki Incredibox?',
        answer:
          'Sprunki Incredibox is a free fan-made music creation game available at sprunki.io. It enhances the original Incredibox experience with unique characters, custom soundscapes, and innovative music mixing features, allowing players to create their own musical compositions online.',
      },
      {
        question:
          'How does Sprunki Incredibox differ from the original Incredibox?',
        answer:
          'Sprunki Incredibox introduces exclusive characters, new soundscapes, and enhanced music creation tools while maintaining the beloved drag-and-drop interface. Our mod adds fresh musical elements, custom animations, and community features that expand upon the original game experience.',
      },
      {
        question: 'Is Sprunki Incredibox free to play?',
        answer:
          'Yes, Sprunki Incredibox is completely free to play online. You can access all features, including character selection, sound mixing, and music creation tools without any cost. The game is accessible through any web browser at sprunki.io.',
      },
      {
        question: 'How do I create music in Sprunki Incredibox?',
        answer:
          'Creating music is simple: visit sprunki.io, choose your characters and sounds from our unique collection, then use the intuitive drag-and-drop interface to mix and match different sound elements. Experiment with various combinations to create your own unique musical compositions.',
      },
      {
        question: 'Can I save and share my music creations?',
        answer:
          'Yes! Sprunki Incredibox allows you to save your musical compositions and share them with the community. You can also record your mixes, download them, and share them on social media platforms to showcase your creativity.',
      },
      {
        question: 'What makes Sprunki Incredibox unique?',
        answer:
          'Sprunki Incredibox stands out with its exclusive character designs, custom soundscapes, and innovative mixing features. Our free online platform combines musical creativity with visual art, offering an enhanced version of the beloved Incredibox gameplay.',
      },
      {
        question: 'Which browsers and devices support Sprunki Incredibox?',
        answer:
          'Sprunki Incredibox works on all major web browsers including Chrome, Firefox, Safari, and Edge. The game is optimized for both desktop and mobile devices, ensuring a smooth music creation experience across all platforms.',
      },
      {
        question: 'How can I join the Sprunki Incredibox community?',
        answer:
          'Join our community by visiting sprunki.io, where you can interact with other music creators, share your compositions, and discover new musical inspirations. Follow us on social media for updates and community events.',
      },
    ],
    zh: [
      {
        question: '什么是 Sprunki Incredibox？',
        answer:
          'Sprunki Incredibox 是一款免费的粉丝制作音乐创作游戏，可在 sprunki.io 访问。它通过独特的角色、自定义音景和创新的音乐混音功能增强了原版 Incredibox 的体验，让玩家能够在线创作自己的音乐作品。',
      },
      {
        question: 'Sprunki Incredibox 与原版 Incredibox 有什么不同？',
        answer:
          'Sprunki Incredibox 引入了独家角色、全新音景和增强的音乐创作工具，同时保留了备受喜爱的拖放界面。我们的模组添加了新的音乐元素、自定义动画和社区功能，扩展了原版游戏体验。',
      },
      {
        question: 'Sprunki Incredibox 是免费的吗？',
        answer:
          '是的，Sprunki Incredibox 完全免费在线游玩。您可以免费访问所有功能，包括角色选择、声音混音和音乐创作工具。游戏可通过任何网络浏览器在 sprunki.io 访问。',
      },
      {
        question: '如何在 Sprunki Incredibox 中创作音乐？',
        answer:
          '创作音乐很简单：访问 sprunki.io，从我们独特的收藏中选择角色和声音，然后使用直观的拖放界面混合搭配不同的声音元素。尝试各种组合来创作您独特的音乐作品。',
      },
      {
        question: '我可以保存和分享我的音乐创作吗？',
        answer:
          '当然可以！Sprunki Incredibox 允许您保存音乐作品并与社区分享。您还可以录制混音、下载并在社交媒体平台上分享，展示您的创造力。',
      },
      {
        question: 'Sprunki Incredibox 有什么独特之处？',
        answer:
          'Sprunki Incredibox 以其独家角色设计、自定义音景和创新混音功能而脱颖而出。我们的免费在线平台将音乐创意与视觉艺术相结合，提供增强版的 Incredibox 游戏体验。',
      },
      {
        question: '哪些浏览器和设备支持 Sprunki Incredibox？',
        answer:
          'Sprunki Incredibox 可在所有主流网络浏览器上运行，包括 Chrome、Firefox、Safari 和 Edge。游戏针对桌面和移动设备进行了优化，确保在所有平台上都能获得流畅的音乐创作体验。',
      },
      {
        question: '如何加入 Sprunki Incredibox 社区？',
        answer:
          '访问 sprunki.io 加入我们的社区，您可以与其他音乐创作者互动、分享作品并发现新的音乐灵感。关注我们的社交媒体以获取更新和社区活动信息。',
      },
    ],
    fr: [
      {
        question: "Qu'est-ce que Sprunki Incredibox ?",
        answer:
          "Sprunki Incredibox, disponible sur sprunki.io, est un mod créé par des fans du jeu original Incredibox qui améliore l'expérience de création musicale avec des personnages et des paysages sonores uniques.",
      },
      {
        question: 'Sprunki Incredibox est-il gratuit ?',
        answer:
          'Oui, Sprunki Incredibox est entièrement gratuit en ligne. Vous pouvez accéder à toutes les fonctionnalités et créer de la musique sans aucun coût.',
      },
      {
        question:
          'Comment commencer à créer de la musique dans Sprunki Incredibox ?',
        answer:
          "Il suffit de visiter notre site web, de choisir vos personnages et vos sons, puis de les glisser-déposer pour créer vos compositions musicales uniques. L'interface intuitive permet aux débutants de commencer à faire de la musique immédiatement.",
      },
      {
        question: 'Puis-je sauvegarder et partager mes créations ?',
        answer:
          "Oui ! Vous pouvez sauvegarder vos créations musicales et les partager avec la communauté Sprunki Incredibox. C'est un excellent moyen de montrer votre créativité et de vous inspirer du travail des autres utilisateurs.",
      },
      {
        question: "Qu'est-ce qui rend Sprunki Incredibox unique ?",
        answer:
          'Sprunki Incredibox combine des paysages sonores uniques, des personnages originaux et une interface intuitive pour créer une expérience de création musicale unique. Notre approche communautaire et nos mises à jour régulières maintiennent le contenu frais et engageant.',
      },
    ],
    es: [
      {
        question: '¿Qué es Sprunki Incredibox?',
        answer:
          'Sprunki Incredibox, disponible en sprunki.io, es un mod creado por fans del juego original Incredibox que mejora la experiencia de creación musical con personajes y paisajes sonoros únicos.',
      },
      {
        question: '¿Es gratis Sprunki Incredibox?',
        answer:
          'Sí, Sprunki Incredibox es completamente gratis para jugar en línea. Puedes acceder a todas las funciones y crear música sin ningún costo.',
      },
      {
        question: '¿Cómo empiezo a crear música en Sprunki Incredibox?',
        answer:
          'Simplemente visita nuestro sitio web, elige tus personajes y sonidos, luego arrástralos y suéltalos para crear tus composiciones musicales únicas. La interfaz intuitiva facilita que los principiantes empiecen a hacer música de inmediato.',
      },
      {
        question: '¿Puedo guardar y compartir mis creaciones?',
        answer:
          '¡Sí! Puedes guardar tus creaciones musicales y compartirlas con la comunidad de Sprunki Incredibox. Esta es una excelente manera de mostrar tu creatividad e inspirarte con el trabajo de otros usuarios.',
      },
      {
        question: '¿Qué hace único a Sprunki Incredibox?',
        answer:
          'Sprunki Incredibox combina paisajes sonoros únicos, personajes peculiares y una interfaz intuitiva para crear una experiencia de creación musical única. Nuestro enfoque impulsado por la comunidad y las actualizaciones regulares mantienen el contenido fresco y atractivo.',
      },
    ],
    ja: [
      {
        question: 'Sprunki Incredibox とは？',
        answer:
          'Sprunki Incredibox は、オリジナルの Incredibox ゲームのファンメイドモッドで、独特なキャラクターとサウンドスケープで音楽制作体験を向上させます。sprunki.io でプレイできます。',
      },
      {
        question: 'Sprunki Incredibox は無料ですか？',
        answer:
          'はい、Sprunki Incredibox は完全無料でオンラインプレイできます。すべての機能にアクセスして、無料で音楽を作ることができます。',
      },
      {
        question: 'Sprunki Incredibox で音楽制作を始めるには？',
        answer:
          '当サイトにアクセスし、キャラクターとサウンドを選んで、ドラッグ＆ドロップで独自の音楽作品を作成するだけです。直感的なインターフェースにより、初心者でもすぐに音楽制作を始められます。',
      },
      {
        question: '作品を保存して共有できますか？',
        answer:
          'はい！音楽作品を保存し、Sprunki Incredibox コミュニティと共有できます。これは創造性を披露し、他のユーザーの作品からインスピレーションを得る素晴らしい方法です。',
      },
      {
        question: 'Sprunki Incredibox の特徴は？',
        answer:
          'Sprunki Incredibox は、独特なサウンドスケープ、個性的なキャラクター、直感的なインターフェースを組み合わせて、独自の音楽制作体験を生み出します。コミュニティ主導のアプローチと定期的なアップデートにより、コンテンツの新鮮さと魅力を保っています。',
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
        <div className="space-y-4">
          {faqs[locale].map((faq, index) => (
            <div key={index} className="rounded-lg border bg-card/50">
              <button
                className="flex w-full items-center justify-between p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <svg
                  className={cn(
                    'h-6 w-6 transform transition-transform duration-200',
                    openIndex === index ? 'rotate-180' : '',
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-40' : 'max-h-0',
                )}
              >
                <p className="p-4 pt-0 text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
