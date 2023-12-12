import { AnimeAceBBbold, KosugiMaru, Bangers } from "../fonts"
import Image from 'next/image'

const faq = () => {
    return (
        <section id="faq relative">
            <div className="faq-heading text-[12rem] text-[#E82338] text-stroke-2 absolute top-[60rem] left-56">
                <h1 className={Bangers.className} >FAQS</h1>
            </div>

            <div className="Faq-ques absolute top-[80rem] left-56">
                <ul  className="text-2xl leading-[3.5rem]">
                    <li className={AnimeAceBBbold.className}>WHO CAN JOIN? </li>
                    <li className={AnimeAceBBbold.className}>WHAT SHOULD BE THE <br /> TEAM SIZE? </li>
                    <li className={AnimeAceBBbold.className}>HOW TO REGISTER? </li>
                    <li className={AnimeAceBBbold.className}>PARTICIPATION FEES?</li>
                    <li className={AnimeAceBBbold.className}>HOW CAN I BE A <br /> MENTOR?</li>
                    <li className={AnimeAceBBbold.className}>WHAT DO I DO IN THIS <br /> PROGRAM?</li>
                    <li className={AnimeAceBBbold.className}>VENUE/PLATFORM?</li>
                </ul>
            </div>

            <div className="absolute top-[68rem] left-[43rem]">
                <Image src="/faqpanda.svg" width={550} height={500} alt="panda" />
            </div>

            <div className="faqdesbox absolute top-[74rem] right-[12rem]">
                <div className="relative">
                    <Image src="/faqdesbox.svg" width={600} height={500} alt="des" />
                    <div className="text-white absolute top-8 left-24 flex">
                        <p className={KosugiMaru.className} >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Architecto quidem itaque magni tenetur inventore quaerat aliquid, delectus aut obcaecati, placeat quam, eius eos laborum quibusdam <br /> id accusantium sequi fuga tempora sint natus totam eum. Odit, quod suscipit ipsum, a at reiciendis eligendi excepturi impedit omnis voluptatem eveniet, dolor accusantium vero aliquam ratione. Provident quam deserunt ratione, rerum ipsum voluptates, porro <br /> quod earum sint voluptatum nam maxime recusandae alias. Cumque, laboriosam. Perspiciatis nisi quasi, laborum voluptate nesciunt repudiandae exercitationem error commodi quaerat cum, explicabo delectus at accusamus ad? Neque cum autem porro ab quis dolor eveniet nesciunt nemo corrupti. Omnis, quibusdam!</p>
                    </div>
                </div>
            </div>



            <div className="linkbox absolute top-[102rem] right-56">
                <div className="relative">
                    <Image src="/linkboxfaq.svg" width={450} height={300} alt="linkbox" />
                    <div className="linkboxtext absolute top-16 left-12">
                        <div className="text-[#F4E1B9]">
                            <h3 className={AnimeAceBBbold.className}>I HAVE SOME OTHER QUESTIONS...</h3>
                        </div>

                        <div className="text-white">
                            <p className={KosugiMaru.className}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.  At rem sint natus? <br /> Consectetur  corporis  tenetur in earum enim <br /> laudantium ratione?</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default faq