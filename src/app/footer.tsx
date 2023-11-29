// Footer.js

const Footer = () => {
    return (
        <footer className="bg-[#193d5c] text-white p-4 flex flex-col items-center justify-between font-kosugi-maru">
      <div className="flex items-center justify-between w-full">
        <img src="/saturn.svg" alt="Leftmost Image" width={250} height={100} className="translate-y-[-75px] mr-[40rem]" />
        <div className="flex-1">
          <h3 className="text-white mb-2">Resources:</h3>
          <p className="text-white">Sponsorship Brochure</p>
          <p className="text-white">Code Of Conduct</p>
          <p className="text-white">Community Partners</p>
          <p className="text-white">Hackers guide</p>
        </div>
        <div className="text-center">
          <h3 className="text-white mb-2 mr-[10rem]">Social Handles:</h3>
          <div className="flex items-center justify-center space-x-4 mr-[12rem]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/discord.svg" alt="Discord" width={40} height={40} className="cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="YouTube" width={40} height={40} className="cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/x.svg" alt="X" width={40} height={40} className="cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" width={40} height={40} className="cursor-pointer" />
            </a>
          </div>
        </div>
        <img src="/metroids.svg" alt="Rightmost Image" width={250} height={100} />
      </div>

     
      <div className="text-white mt-2 text-lg">
        &#169; GDSC IIIT Kalyani 2023
      </div>
    </footer>
  
    );
  };
  
  export default Footer;
  