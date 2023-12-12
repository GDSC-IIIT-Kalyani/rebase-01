// Store all the necessary fonts here
import localFont from 'next/font/local';
import { Passion_One } from 'next/font/google'

// Google fonts
export const passionOne = Passion_One({
    weight: '700',
    subsets: ['latin']
})

// Custom fonts
export const JapaneseRobot = localFont({ src: 'fonts/japanese-robot/JapaneseRobot.ttf' })
export const JapaneseRobotItalic = localFont({src : 'fonts/japanese-robot/JapaneseRobotItalic.ttf'})
export const AnimeAceBBbold = localFont({ src: 'fonts/anime_ace_bb/animeace2bb_tt/animeace2_bld.ttf'})
export const AnimeAceBBreg = localFont({ src: 'fonts/anime_ace_bb/animeace2bb_tt/animeace2_reg.ttf'})
export const AnimeAceBBital = localFont({ src: 'fonts/anime_ace_bb/animeace2bb_tt/animeace2_ital.ttf'})
export const KosugiMaru = localFont({src : 'fonts/Kosugi_Maru/KosugiMaru-Regular.ttf'})
export const Bangers = localFont({ src : 'fonts/Bangers/Bangers-Regular.ttf'})