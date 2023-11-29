import './globals.css';
import Image from "next/image"

export default function About() {
  return (
    <>
     
    <div className="bg-[#F4E1B9] min-h-screen">
        <div className='min-w-screen p=[40%]'>
      <p className="font-display text-5xl text-red-500 stroke-current stroke-2 font-extrabold text-left">
        About
      </p>
      <div className="flex flex-row">
        <div className="relative">
          <Image src="/aboutbox.svg" alt="about box" width={700} height={500} />

          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque amet sed corporis sequi veritatis inventore a ratione quas atque unde. Laborum praesentium reprehenderit assumenda eaque, possimus beatae cumque officiis velit eligendi, neque voluptatibus necessitatibus dolorum itaque minus nostrum aperiam saepe. Ex qui a, incidunt harum vitae rem officia repudiandae nam, eveniet sapiente excepturi quia animi illum eius facilis amet magnam sed. Accusamus ad veritatis officia?
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