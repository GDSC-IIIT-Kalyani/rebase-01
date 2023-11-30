import './globals.css'
import Image from 'next/image'

const navbar = () => {
    return(
        <section className='navbar relative'>
            <Image src="/navrect.svg" alt='' width={1300} height={400} className='float-right z-10 absolute right-24 top-4' />
            <ul className='flex float-right gap-24 text-3xl font-bold z-20 absolute py-6 px-24 right-[4.5rem] top-3'>
                <li><a href="#">About</a></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">Tracks</a></li>
                <li><a href="#">Prizes</a></li>
                <li><a href="#">Sponsors</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
            <div className='float-right w-[82rem] h-20 text-3xl font-bold absolute py-6 px-24 right-[4.5rem] top-3 bg-[#DE533C] opacity-80'>
            </div>
        </section>
    )
}

export default navbar