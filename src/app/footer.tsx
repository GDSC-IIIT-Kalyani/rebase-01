// Footer.js

const Footer = () => {
    return (
        <footer className="bg-[#0F283F] text-white p-4 flex flex-col items-center justify-between font-kosugi-maru">
      <div className="flex items-center justify-between w-full">
        <img src="/saturn.svg" alt="Leftmost Image" width={350} height={150} className="translate-y-[-80px] mr-[32rem]" />
        <div className="flex-1">
          <h3 className="text-white mb-2 text-lg">Resources:</h3>
          <p className="text-white text-lg">Sponsorship Brochure</p>
          <p className="text-white text-lg">Code Of Conduct</p>
          <p className="text-white text-lg">Community Partners</p>
          <p className="text-white text-lg">Hackers guide</p>
        </div>
        <div className="text-center">
          <h3 className="text-white mb-2 mr-[15rem] text-lg">Connect with us:</h3>
          <div className="flex items-center justify-center space-x-4 mr-[12rem]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/discord.svg" alt="Discord" width={40} height={40} className="cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@gdsciiitkalyani" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="YouTube" width={40} height={40} className="cursor-pointer" />
            </a>
            <a href="https://twitter.com/gdsciiitkalyani?lang=en" target="_blank" rel="noopener noreferrer">
              <img src="/x.svg" alt="X" width={40} height={40} className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/gdsciiitkalyani/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" width={40} height={40} className="cursor-pointer" />
            </a>
          </div>
        </div>
        <img src="/metroids.svg" alt="Rightmost Image" width={350} height={100} className="translate-y-[35px]" />
      </div>

     
      <div className="text-white mt-2 text-lg">
        &#169; GDSC IIIT Kalyani 2023
      </div>
    </footer>
  
    );
  };
  
  export default Footer;
  