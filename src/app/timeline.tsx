
import React from 'react'
import { Bangers } from 'next/font/google'
import Image from 'next/image'

const bangers = Bangers({ subsets: ['latin'], weight: '400' })
const Timeline = () => {
    return (
        <>
            <div className="bg-[#f4e1b9] min-h-screen flex flex-col relative">
                <div className="text-[10rem] text-[#E82338] absolute textStroke pl-[10rem] w-[60%] pt-[.4rem]">
                    <h1 className={bangers.className}>Timeline</h1>
                </div>
                <div className="comingSoon flex items-end justify-center h-[100vh] w-[100vw]" >
                    <Image src="/comingSoon.svg" alt="Coming Soon" width={850} height={700} />
                </div>
            </div>

        </>

    )
}

export default Timeline
