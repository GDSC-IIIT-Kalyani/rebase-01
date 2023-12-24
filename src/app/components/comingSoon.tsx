"use client";
import "../globals.css";
import { passionOne, JapaneseRobot, AnimeAceBBreg } from "@/app/fonts";

const ComingSoon = () => {
  return (
    <section className="h-screen w-screen grid place-items-center">
      <div className="hero flex flex-col -gap-5">
        <div className="text-[#e32735] relative text-[15vw]">
          <h1 className={JapaneseRobot.className}>Rebase</h1>
          <div className="hero-heading absolute -top-[3vw] left-[3vw] sm:-top-6 sm:left-6 text-[#f4e1b9]">
            <h1 className={JapaneseRobot.className}>Rebase</h1>
          </div>
        </div>
        <h1 style={JapaneseRobot.style} className="text-center w-full text-[6vw]">COMING SOON</h1>
      </div>
    </section>
  );
};

export default ComingSoon;
