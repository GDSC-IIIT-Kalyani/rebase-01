import '../globals.css'
import Image from 'next/image'
import { AnimeAceBBbold } from '@/app/fonts';

const navbar = () => {
    return (
        <div className=''>
            {/* <Image src="/logo.webp" alt='logo' width={200} height={400} /> */}
            <div className='flex justify-center p-2'>
                <nav className=''>
                    <ul className='flex 2xl:gap-28 xl:gap-20 lg:gap-16 md:gap-12 2xl:text-xl xl:text-lg lg:text-sm md:text-xs font-bold 2xl:py-6 md:py-4 2xl:px-16 md:px-8 xl:px-12 bg-[#de533c] '>
                        <li><a href="#" className={AnimeAceBBbold.className}>About</a></li>
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