import './globals.css'
import Image from 'next/image';
import Navbar from '@/app/navbar'
import {passionOne, JapaneseRobot, AnimeAceBBreg} from '@/app/fonts';

export default function Home() {
  return (
    <section className='landing'>
      <Navbar />
      <div className='hero'>
      <div className='hero-text flex relative'>
        <div className='translate-x-[16rem] translate-y-16 flex gap-10'>
        <div className='hero-heading text-[12rem] text-[#f4e1b9]'>
          <h1 className={JapaneseRobot.className} >Rebase</h1>
        </div>
        <div className='hero-vol text-5xl translate-y-28'>
          <h3 className={passionOne.className}>
            Volume
          </h3>
        </div>
        </div>
        <div>
          <Image src="/01.svg" alt="01" width={500} height={500} className='absolute right-84 top-48 z-20' />
        </div>
      </div>


      <div className='hero-content flex justify-center -mt-8 items-center relative'>
        
        
        <div className='left translate-x-20 relative'>
          <Image src="/Leftbox.svg" alt='' width={265} height={500} className='' />
          <ul className='block absolute top-16 left-0 content-center translate-x-5'>
            <li><a href="https://gdsc.bio.link/"><Image src="/gdschero.svg" alt='' width={200} height={100} className='' /></a></li>
            <li><a href="https://discord.gg/tcaxPN6CNs"><Image src="/discordhero.svg" alt='' width={100} height={100} className='ml-12 my-8' /></a></li>
            <li><a href="https://twitter.com/gdsciiitkalyani"><Image src="/x.svg" alt='' width={60} height={100} className='ml-16 my-8' /></a></li>
            <li><a href="https://www.youtube.com/channel/UCvRPKamvUtnQhij5y1MF11A"><Image src="/ythero.svg" alt='' width={70} height={100} className='ml-[3.5rem] my-8' /></a></li>
            <li><a href="https://instagram.com/gdsciiitkalyani"><Image src="/instahero.svg" alt='' width={50} height={100} className='ml-16 my-8' /></a></li>
          </ul>
        </div>

        
        <div className='right'>
          <div className='relative'>
            <Image src="/heroimage.svg" alt='' width={1300} height={600} className='-translate-y-[28px] -translate-x-16' />
          </div>
        </div>

        <div className='absolute bottom-32 left-[28rem]'>
        <div className='Register-button'>
          <div className='p-2 text-3xl font-extrabold w-72 h-16 text-center bg-[#f4e1b9] border-solid border-black border-4'>
            <button className={AnimeAceBBreg.className}>
              Register
            </button>
          </div>
        </div>
        </div>

      </div>
      </div>
    </section>
  )
}
