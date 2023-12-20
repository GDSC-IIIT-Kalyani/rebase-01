import React from 'react'
import { Bangers, AnimeAceBBbold } from '../fonts'
import Image from 'next/image'

const Sponsors = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col relative px-40">
                <div className="text-[10rem] text-[#E82338] textStroke w-[60%] pt-[.4rem]">
                    <h1 className={Bangers.className}>Sponsors</h1>
                </div>
                <div className="wrapper flex flex-col gap-20" >
                    {/* <div className='flex relative bg-[#0F283F] h-48 w-[60%] border-black border-8'>
                        <div className='sponsor-tier bg-[#59A3BC] w-48 h-12 absolute top-1/2 -right-40 outline-black outline-4 outline-offset-4 border-4 border-black outline grid place-items-center' style={AnimeAceBBbold.style}>PLATINUM</div>
                    </div> */}
                    <div className='flex justify-center items-center gap-20 relative bg-[#0F283F] h-48 w-[60%] border-black border-8 self-end'>
                        <div className="relative w-48 h-16">
                            <Image src='/Devfolio.png' layout='fill' alt='DEVFOLIO LOGO'></Image>
                        </div>
                        <div className="relative w-48 h-16">
                            <Image src='/Polygon.png' layout='fill' alt='POLYGON LOGO'></Image>
                        </div>
                        <div className='sponsor-tier bg-[#FA8C7D] w-48 h-12 absolute top-1/2 -left-40 outline-black outline-4 outline-offset-4 border-4 border-black outline grid place-items-center' style={AnimeAceBBbold.style}>DIAMOND</div>
                    </div>
                    <div className='flex justify-center items-center relative bg-[#0F283F] h-48 w-[60%] border-black border-8'>
                        <div className="relative w-48 h-16">
                            <Image src='/Replit.png' layout='fill' alt='REPLIT LOGO'></Image>
                        </div>
                        <div className='sponsor-tier bg-[#FFAD00] w-48 h-12 absolute top-1/2 -right-40 outline-black outline-4 outline-offset-4 border-4 border-black outline grid place-items-center' style={AnimeAceBBbold.style}>GOLD</div>
                    </div>
                    {/* <div className='flex relative bg-[#0F283F] h-48 w-[60%] border-black border-8 self-end'>
                        <div className='sponsor-tier bg-[#A4CF48] w-48 h-12 absolute top-1/2 -left-40 outline-black outline-4 outline-offset-4 border-4 border-black outline grid place-items-center' style={AnimeAceBBbold.style}>SILVER</div>
                    </div> */}
                </div>
            </div>

        </>

    )
}

export default Sponsors
