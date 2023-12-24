import '../globals.css'
import Image from 'next/image'
import Link from 'next/link';
import { AnimeAceBBbold } from '@/app/fonts';
import styles from '../stylesheets/navbar.module.css';

const navbar = () => {
    return (
        <div className={`${styles.navbar_container} -translate-x-[2rem]`}>
            {/* <Image src="/logo.webp" alt='logo' width={200} height={400} /> */}
            <Image src="/rebase_logo.png" alt="about box" width={300} height={300} className='translate-y-[-1rem] translate-x-0 pt-10 pr-16' />

            <div className='flex justify-center -translate-x-[-2rem]'>

                <nav className={styles.navbar_link}>
                    <ul className={`${styles.navbar_link} flex l:gap-28 l:gap-20 lg:gap-16 md:gap-12 2xl:text-xl xl:text-lg lg:text-sm md:text-xs font-bold 2xl:py-6 md:py-4 2xl:px-16 md:px-8 xl:px-12 bg-[#de533c] `}>
                        <li><Link href="/about" className={AnimeAceBBbold.className}>About</Link></li>
                        <li><a href="#" className={AnimeAceBBbold.className} >Schedule</a></li>
                        <li><a href="#" className={AnimeAceBBbold.className} >Tracks</a></li>
                        <li><a href="#" className={AnimeAceBBbold.className} >Prizes</a></li>
                        <li><a href="#" className={AnimeAceBBbold.className} >Sponsors</a></li>
                        <li><a href="#" className={AnimeAceBBbold.className} >FAQs</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default navbar