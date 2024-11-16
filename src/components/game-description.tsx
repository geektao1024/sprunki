import { Locale } from '@/i18n'

interface GameDescriptionProps {
  locale: Locale
}

export function GameDescription({ locale }: GameDescriptionProps) {
  const titles = {
    en: 'Sprunki Incredibox: Music Game | Create, Mod & Play Online',
    zh: 'Sprunki Incredibox：音乐游戏 | 创作、模组和在线游玩',
    fr: 'Sprunki Incredibox : Jeu Musical | Créez, Moddez et Jouez en Ligne',
    es: 'Sprunki Incredibox: Juego Musical | Crea, Modifica y Juega en Línea',
    ja: 'Sprunki Incredibox：音楽ゲーム | 作成、モディファイ、オンラインプレイ',
  }

  const descriptions = {
    en: 'Explore Sprunki Incredibox: A free fan-made music game at sprunkiincrediboxonline.org. Download mods, mix unique sounds, meet characters, and create epic tracks...',
    zh: '探索Sprunki Incredibox：一款免费的粉丝制作音乐游戏。下载模组，混合独特音效，结识角色，创作史诗音轨。加入社区，在线释放创造力！',
    fr: 'Découvrez Sprunki Incredibox : Un jeu musical gratuit créé par des fans. Téléchargez des mods, mixez des sons uniques, rencontrez des personnages et créez des pistes épiques. Rejoignez la communauté, libérez votre créativité en ligne !',
    es: 'Explora Sprunki Incredibox: Un juego musical gratuito creado por fans. Descarga mods, mezcla sonidos únicos, conoce personajes y crea pistas épicas. ¡Únete a la comunidad y libera tu creatividad en línea!',
    ja: 'Sprunki Incrediboxを探索：ファンが作った無料の音楽ゲーム。MODをダウンロード、ユニークな音を混ぜ、キャラクターと出会い、エピックなトラックを作成。コミュニティに参加し、オンラインで創造性を解放！',
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
