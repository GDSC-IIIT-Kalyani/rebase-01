'use client'
import '../globals.css'
import Image from 'next/image';
import { passionOne, JapaneseRobot, AnimeAceBBreg } from '@/app/fonts';
import { useEffect } from 'react'
import styles from '../stylesheets/landing.module.css'

const Landing = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <section className={styles.landing_page}>

      <div className='hero'>
        <div className='hero-text flex'>
          <div className='translate-x-[18rem] translate-y-2 flex gap-10'>

            <div className='text-[#e32735] relative text-[14rem]'>
              <h1 className={JapaneseRobot.className} >Rebase</h1>
              <div className='hero-heading absolute -top-6 left-6 text-[14rem] text-[#f4e1b9]'>
                <h1 className={JapaneseRobot.className} >Rebase</h1>
              </div>
            </div>
            <div className='hero-vol text-3xl translate-y-[8rem] translate-x-4'>
              <h3 className={passionOne.className}>
                VOLUME
              </h3>
            </div>
          </div>
          <div>
            <Image src="/01.svg" alt="01" width={500} height={500} className='absolute translate-x-[3.8rem] translate-y-[8rem] z-20' />
          </div>
        </div>


        <div className='hero-content flex justify-center -translate-y-[20%] items-center relative'>


          <div className='left translate-x-20 translate-y-6 relative'>
            <Image src="/Leftbox.svg" alt='' width={240} height={380} className='' />
            <ul className='block absolute top-16 left-0 content-center translate-x-5'>
              <li><a href="https://gdsc.community.dev/indian-institute-of-information-technology-kalyani/"><Image src="/gdschero.svg" alt='' width={180} height={80} className='' /></a></li>
              <li><a href="https://discord.gg/tcaxPN6CNs"><Image src="/discordhero.svg" alt='' width={80} height={80} className='ml-12 my-8' /></a></li>
              <li><a href="https://twitter.com/gdsciiitkalyani"><Image src="/x.svg" alt='' width={40} height={80} className='ml-16 my-8' /></a></li>
              <li><a href="https://www.youtube.com/channel/UCvRPKamvUtnQhij5y1MF11A"><Image src="/ythero.svg" alt='' width={50} height={80} className='ml-[3.5rem] my-8' /></a></li>
              <li><a href="https://instagram.com/gdsciiitkalyani"><Image src="/instahero.svg" alt='' width={40} height={80} className='ml-16 my-8' /></a></li>
            </ul>
          </div>


          <div className='right'>
            <div className='relative'>
              <Image src="/heroimage.svg" alt='' width={1200} height={500} className='-translate-y-[1.4rem] -translate-x-12' />
            </div>
          </div>

          <div className='absolute bottom-32 left-[28rem]'>
            <div className='Register-button'>
              <div className='p-2 text-3xl font-extrabold w-72 h-16 text-center bg-[#f4e1b9] border-solid border-black border-4'>
                {/* <button className={AnimeAceBBreg.className}>
              Register
            </button> */}
                <div
                  className="apply-button"
                  data-hackathon-slug="rebase01"
                  data-button-theme="light"
                  style={{ height: "44px", width: "312px" }}
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Landing