import React from 'react'
import { Bangers } from '../fonts'
import Image from 'next/image'

const Prizes = () => {
    return (
        <>
            <div className='bg-[#f4e1b9] min-h-screen flex flex-col py-5  sm:pl-5  lg:relative lg:py-0 lg:pl-0'>
                <div className='text-[10rem] text-[#E82338] textStroke pl-[4rem] sm:pl-[8rem] sm:w-[60%] sm:pt-[.4rem] lg:absolute lg:w-[100%] lg:pt-[0]'>
                    <h1 className={Bangers.className}>Prizes</h1>
                </div>
                <div className="comingSoon flex items-center justify-center w-[350vw] pl-10 sm:w-auto lg:absolute lg:top-[10rem] lg:left-[15rem] lg:w-[55vw] lg:bottom-[2rem] xl:w-[45rem] xl:left-[25rem] 2xl:w-[50rem] 2xl:top-[8rem]" >
                    <Image src="/comingSoon.svg" alt="Coming Soon" width={1200} height={700} />
                </div>
            </div>

        </>
    )
}

export default Prizes
