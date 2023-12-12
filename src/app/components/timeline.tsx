
import React from 'react'
import { Bangers } from '../fonts'
import Image from 'next/image'

const Timeline = () => {
    return (
        <>
            <div className="bg-[#f4e1b9] min-h-screen flex flex-col relative">
                <div className="text-[10rem] text-[#E82338] absolute textStroke pl-[10rem] w-[60%] pt-[.4rem]">
                    <h1 className={Bangers.className}>Timeline</h1>
                </div>
                <div className="comingSoon flex items-end justify-center absolute top-8 left-[25rem]" >
                    <Image src="/comingSoon.svg" alt="Coming Soon" width={1200} height={700} />
                </div>
            </div>

        </>

    )
}

export default Timeline
