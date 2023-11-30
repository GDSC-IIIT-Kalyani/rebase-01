import './globals.css'
import Image from 'next/image';

export default function Home() {
  return (
    <section className='hero'>
      <div className='hero-text flex gap-10'>
        <div className='hero-heading'>
          <h1 className='text-9xl text-red-600 text-stroke'>R e b a s e</h1>
        </div>
        <div className='hero-vol'>
          <h3>
            Volume
          </h3>
        </div>
        {/* <Image src="/01.svg" alt="01" width={400} height={400} className='float-right' /> */}
      </div>
      
      {/* Content */}
      <div className='hero-content flex justify-center'>
      {/* Left side stuff */}
      <div className='left translate-x-16'>
        <Image src="/Leftbox.svg" alt='' width={285} height={500} className='' />
      </div>

      {/* Right side stuff */}
      <div className='right'>
        <div className='relative'>
          <Image src="/heroimage.svg" alt='' width={1400} height={600} className='-translate-y-[71px] -translate-x-16' />
        </div>
        
      </div>
      </div>
    </section>
  )
}
