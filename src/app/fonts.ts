// Store all the necessary fonts here
import localFont from 'next/font/local';
import { Passion_One } from 'next/font/google'

export const JapaneseRobot = localFont({ src: 'japanese-robot/JapaneseRobot.ttf' })
export const JapaneseRobotItalic = localFont({src : 'japanese-robot/JapaneseRobotItalic.ttf'})

export const passionOne = Passion_One({
    weight: '700',
    subsets: ['latin']
})

export const AnimeAceBBbold = localFont({ src: 'anime_ace_bb/animeace2bb_tt/animeace2_bld.ttf'})
export const AnimeAceBBreg = localFont({ src: 'anime_ace_bb/animeace2bb_tt/animeace2_reg.ttf'})
export const AnimeAceBBital = localFont({ src: 'anime_ace_bb/animeace2bb_tt/animeace2_ital.ttf'})