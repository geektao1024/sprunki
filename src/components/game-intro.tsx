import { Locale } from '@/i18n'

interface GameIntroProps {
  locale: Locale
}

export function GameIntro({ locale }: GameIntroProps) {
  const titles = {
    en: 'Sprunki Incredibox: A Music Creation Fan Experience',
    zh: 'Sprunki Incredibox：音乐创作粉丝体验',
    fr: 'Sprunki Incredibox : Une Expérience de Création Musicale par des Fans',
    es: 'Sprunki Incredibox: Una Experiencia de Creación Musical de Fans',
    ja: 'Sprunki Incredibox：ファンによる音楽創作体験',
  }

  const descriptions = {
    en: "Sprunki Incredibox is an exciting music game born from a love of Incredibox and creative innovation. More than just a game, it's a free online platform for musical expression. At sprunkiincrediboxonline.org, we've crafted a unique sound-mixing world for music lovers and gamers. With an intuitive drag-and-drop interface, diverse characters, and unlimited creative possibilities, players can easily create epic music tracks. Whether you're a music novice or a seasoned creator, Sprunki Incredibox offers free, engaging gameplay with multiple sound modes, character interactions, and custom music creation. Join our vibrant community, unleash your musical creativity, and experience the joy of making music your way!",
    zh: 'Sprunki Incredibox 是一款源于对 Incredibox 的热爱和创新精神的激动人心的音乐游戏。不仅仅是一款游戏，它是一个免费的在线音乐表达平台。在 sprunkiincrediboxonline.org，我们为音乐爱好者和游戏玩家打造了一个独特的声音混合世界。通过直观的拖放界面、多样的角色和无限的创意可能性，玩家可以轻松创作出史诗般的音乐轨道。无论你是音乐新手还是资深创作者，Sprunki Incredibox 都提供免费、引人入胜的游戏玩法，包括多种声音模式、角色互动和自定义音乐创作。加入我们充满活力的社区，释放你的音乐创造力，体验以自己的方式制作音乐的乐趣！',
    fr: "Sprunki Incredibox est un jeu musical passionnant né de l'amour d'Incredibox et de l'innovation créative. Plus qu'un simple jeu, c'est une plateforme en ligne gratuite pour l'expression musicale. Sur sprunkiincrediboxonline.org, nous avons créé un monde unique de mixage sonore pour les amateurs de musique et les joueurs. Avec une interface intuitive de glisser-déposer, des personnages diversifiés et des possibilités créatives illimitées, les joueurs peuvent facilement créer des pistes musicales épiques. Que vous soyez un novice en musique ou un créateur expérimenté, Sprunki Incredibox offre un gameplay gratuit et captivant avec plusieurs modes sonores, des interactions de personnages et une création musicale personnalisée. Rejoignez notre communauté dynamique, libérez votre créativité musicale et vivez la joie de faire de la musique à votre façon !",
    es: 'Sprunki Incredibox es un emocionante juego musical nacido del amor por Incredibox y la innovación creativa. Más que un juego, es una plataforma en línea gratuita para la expresión musical. En sprunkiincrediboxonline.org, hemos creado un mundo único de mezcla de sonidos para amantes de la música y jugadores. Con una interfaz intuitiva de arrastrar y soltar, personajes diversos y posibilidades creativas ilimitadas, los jugadores pueden crear fácilmente pistas musicales épicas. Ya seas un novato en música o un creador experimentado, Sprunki Incredibox ofrece un juego gratuito y atractivo con múltiples modos de sonido, interacciones de personajes y creación musical personalizada. ¡Únete a nuestra vibrante comunidad, libera tu creatividad musical y experimenta la alegría de hacer música a tu manera!',
    ja: 'Sprunki Incrediboxは、Incrediboxへの愛と創造的なイノベーションから生まれた刺激的な音楽ゲームです。単なるゲーム以上に、音楽表現のための無料オンラインプラットフォームです。sprunkiincrediboxonline.orgでは、音楽愛好家とゲーマーのための独自の音声ミキシング世界を作り上げました。直感的なドラッグ＆ドロップインターフェース、多様なキャラクター、無限の創造的可能性により、プレイヤーは簡単にエピックな音楽トラックを作成できます。音楽初心者でもベテラン創作者でも、Sprunki Incrediboxは、複数の音響モード、キャラクター間の相互作用、カスタム音楽制作による無料で魅力的なゲームプレイを提供します。活気に満ちたコミュニティに参加し、音楽的創造性を解放し、自分らしい音楽制作の喜びを体験してください！',
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
