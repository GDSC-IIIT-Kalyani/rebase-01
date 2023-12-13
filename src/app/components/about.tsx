import '../globals.css';
import Image from "next/image"
import { Bangers, KosugiMaru } from '../fonts';

export default function About() {
  return (
    <>
      <div className="bg-[#F4E1B9] min-h-screen">
        <div className='min-w-screen pl-[13%] pt-2 '>
          <div className="faq-heading text-[12rem] relative z-10 text-[#E82338] text-stroke-2 translate-y-28 translate-x-32">
            <h1 className={Bangers.className} >ABOUT</h1>
          </div>
          <div className="flex flex-row">
            <div className="relative">
              <Image src="/aboutbox.svg" alt="about box" width={700} height={500} className='translate-y-[-1rem] translate-x-16' />

              <div className="absolute inset-0 flex items-center justify-center w-[30rem] h-[3rem] translate-y-72 translate-x-32 text-white text-xl text-justify font-bold">
                <p className={KosugiMaru.className}>
                Unleash your creativity and be part of Rebase{'<01>'}, a month-long online hackathon extravaganza! Compete across various categories, showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. {"Don't"} miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into Rebase{'<'}01{'>'}—where creativity has no bounds.
                </p>
              </div>
            </div>
            <Image src="/Computer.svg" alt="computer" width={700} height={500} className='translate-x-[-2rem]' />
          </div>
        </div>
      </div>
    </>
  );
}