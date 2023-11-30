import './globals.css'
import Image from 'next/image'
import {AnimeAceBBbold} from '@/app/fonts';

const navbar = () => {
    return(
        <section className='navbar relative'>
            <Image src="/navrect.svg" alt='' width={1300} height={400} className='float-right z-10 absolute right-24 top-4' />
            <ul className='flex float-right gap-20 text-2xl font-bold z-20 absolute py-6 px-24 right-[2rem] top-3'>
                <li><a href="#" className={AnimeAceBBbold.className}>About</a></li>
                <li><a href="#" className={AnimeAceBBbold.className} >Schedule</a></li>
                <li><a href="#" className={AnimeAceBBbold.className} >Tracks</a></li>
                <li><a href="#" className={AnimeAceBBbold.className} >Prizes</a></li>
                <li><a href="#" className={AnimeAceBBbold.className} >Sponsors</a></li>
                <li><a href="#" className={AnimeAceBBbold.className} >FAQs</a></li>
            </ul>
            <div className='float-right w-[82rem] h-20 text-3xl font-bold absolute py-6 px-24 right-[4.5rem] top-3 bg-[#DE533C] opacity-80'>
            </div>
        </section>
    )
}

export default navbar