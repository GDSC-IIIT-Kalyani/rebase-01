import './globals.css'
import Image from 'next/image';
import Navbar from '@/app/navbar'

export default function Home() {
  return (
    <section className='landing'>
      <Navbar />
      <div className='hero'>
      <div className='hero-text flex relative'>
        <div className='translate-x-[46rem] translate-y-28 flex gap-10'>
        <div className='hero-heading'>
          <h1 className='text-9xl text-red-600 text-stroke' style={{fontFamily: 'CustomFont'}} >Rebase</h1>
        </div>
        <div className='hero-vol translate-y-12'>
          <h3 className='font-extrabold text-xl' style={{fontFamily: 'CustomFont'}} >
            Volume
          </h3>
        </div>
        </div>
        <div>
          <Image src="/01.svg" alt="01" width={600} height={600} className='absolute right-64 top-36 z-20' />
        </div>
      </div>


      <div className='hero-content flex justify-center mt-16 items-center'>
        
        
        <div className='left translate-x-20 relative'>
          <Image src="/Leftbox.svg" alt='' width={285} height={500} className='' />
          <ul className='block absolute top-16 left-4 content-center translate-x-5'>
            <li><a href="https://gdsc.bio.link/"><Image src="/gdschero.svg" alt='' width={200} height={100} className='' /></a></li>
            <li><a href="https://discord.gg/tcaxPN6CNs"><Image src="/discordhero.svg" alt='' width={100} height={100} className='ml-12 my-8' /></a></li>
            <li><a href="https://twitter.com/gdsciiitkalyani"><Image src="/x.svg" alt='' width={60} height={100} className='ml-16 my-8' /></a></li>
            <li><a href="https://www.youtube.com/channel/UCvRPKamvUtnQhij5y1MF11A"><Image src="/ythero.svg" alt='' width={70} height={100} className='ml-[3.5rem] my-8' /></a></li>
            <li><a href="https://instagram.com/gdsciiitkalyani"><Image src="/instahero.svg" alt='' width={50} height={100} className='ml-16 my-8' /></a></li>
          </ul>
        </div>

        
        <div className='right'>
          <div className='relative'>
            <Image src="/heroimage.svg" alt='' width={1400} height={600} className='-translate-y-[28px] -translate-x-16' />
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}
