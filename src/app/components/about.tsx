import '../globals.css';
import Image from "next/image"
import { Bangers } from '../fonts';

export default function About() {
  return (
    <>

      <div className="bg-[#F4E1B9] min-h-screen">
        <div className='min-w-screen pl-[13%] pt-2 '>
          <div className="faq-heading text-[12rem] text-[#E82338] text-stroke-2 translate-y-24">
            <h1 className={Bangers.className} >ABOUT</h1>
          </div>
          <div className="flex flex-row">
            <div className="relative">
              <Image src="/aboutbox.svg" alt="about box" width={700} height={500} className='translate-y-[-10px]' />

              <div className="absolute inset-0 flex items-center justify-center w-[30rem] h-[3rem] translate-y-72 translate-x-8">
                <p className="text-white text-lg text-justify ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga explicabo nemo dicta beatae, officia officiis numquam dolores, expedita fugit culpa quia doloremque vel sequi! Quam magnam provident dolorem amet, iure ea odio officiis repudiandae maxime vel! Officia quos fugiat commodi! Ducimus maxime, veritatis hic modi aut doloribus doloremque velit voluptas quis laudantium incidunt asperiores eum rerum, placeat accusamus aperiam adipisci, explicabo architecto ipsam ab fugit. Voluptatibus, quibusdam suscipit exercitationem incidunt veniam eius vitae temporibus! Sint doloribus sunt totam esse sed.
                </p>
              </div>
            </div>
            <Image src="/Computer.svg" alt="computer" width={700} height={500} />
          </div>
        </div>
      </div>
    </>
  );
}