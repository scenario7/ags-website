import CustomNavbar from "@/components/CustomNavbar";
import HeroTemplate from "@/components/HeroTemplate";
import React from "react";
import localFont from "next/font/local";
import img22 from "@/public/images/22.jpg";
import img1 from "@/public/images/historic-gp/1.jpg";
import img2 from "@/public/images/historic-gp/2.jpg";
import img3 from "@/public/images/historic-gp/3.jpg";
import img4 from "@/public/images/historic-gp/4.jpg";
import img5 from "@/public/images/historic-gp/5.jpg";
import img6 from "@/public/images/historic-gp/6.jpg";
import CustomFooter from "@/components/CustomFooter";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});
const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});
const images = [img1, img2, img3, img4, img5, img6];

const page = () => {
  return (
    <div>
      <CustomNavbar isHomePage={false} />
      <div className="flex flex-col px-3 md:px-10 items-center">
        <HeroTemplate
          image={img22.src}
          title="France Historic GP"
          subtitle="25-27 April 2025"
        />
        <div className="flex flex-col justify-between items-center py-10">
          <div className="flex flex-col items-center gap-5">
            <h2
              className={`${futuraMedium.className} text-3xl md:w-1/2 text-center`}
            >
              AGS OFFERS YOU TO DRIVE A FORMULA 4 DURING THE FRANCE HISTORIC
              GRAND PRIX
            </h2>
            <div className="bg-gradient-to-r from-transparent via-[#060D30] to-transparent h-1 w-1/4"></div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-10 py-10 animate-scroll">
              {images.map((image, index) => (
                <img key={index} src={image.src} alt="" className="h-60 px-5" />
              ))}
              {/* Duplicate the images for seamless scrolling */}
              {images.map((image, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={image.src}
                  alt=""
                  className="h-60"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2
            className={`${futuraMedium.className} text-3xl md:w-1/2 text-center`}
          >
            Prestations
          </h2>
          <div className="bg-gradient-to-r from-transparent via-[#060D30] to-transparent h-1 w-1/4"></div>
          <ul className={`${futuraMedium.className} list-disc py-10 px-10`}>
            <li>A day of training in F4 on the Circuit du Var</li>
            <li>Seat moulding and car adjustments</li>
            <li>2 simulator sessions beforehand</li>
            <li>
              Provision of driver equipment: helmet, HANS, suit, gloves,
              balaclava, shoes
            </li>
            <li>Possibility of a logo on the car</li>
            <li>VIP parking space</li>
            <li>A driver&apos;s pass</li>
            <li>Soft drinks and food during the 3 days on the circuit</li>
            <li>
              Two accompanying persons throughout the weekend, exclusive access
              to the AGS reception with soft drinks and food during the 3 days
              on the circuit
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2
            className={`${futuraMedium.className} text-3xl md:w-1/2 text-center`}
          >
            The Event
          </h2>
          <div className="bg-gradient-to-r from-transparent via-[#060D30] to-transparent h-1 w-1/4"></div>
          <div className=" items-center bg-[#ffffff] shadow-lg py-5 px-10 rounded-xl flex flex-col-reverse gap-3">
            <div
              className={`${inter.className} tracking-tighter font-semibold text-gray-400`}
            >
              Spectators in 2024
            </div>
            <div
              className={`${futuraCondensed.className} uppercase font-bold text-6xl md:text-left text-center bg-gradient-to-r bg-clip-text text-transparent from-[#002654] to-[#00265440]`}
            >
              80,000
            </div>
          </div>
          <h2 className={`${futuraMedium.className} text-xl tracking-tighter`}>
            The only Formula 1 race in France
          </h2>
          <p className={`${inter.className} text-center`}>
            From 25 to 27 April 2025, this exceptional event will celebrate the
            20th anniversary of the Renault team&apos;s triumph as
            constructors&apos; world champion alongside Fernando Alonso. For
            this special occasion, the legendary 2005 Formula 1 R25 will make
            its grand return to the track to the sound of the legendary
            naturally-aspirated V10 engine.
          </p>
        </div>
        <div className="flex md:flex-row flex-col w-full justify-between gap-10 py-10 ">
          <div className="flex  md:flex-row flex-col items-center justify-between px-10 gap-5 py-10 w-full bg-[#052756] rounded-2xl">
            <h2
              className={`${futuraCondensed.className} uppercase font-bold text-6xl md:text-left text-center bg-gradient-to-r bg-clip-text text-transparent from-[#ffffff] to-[#ffffff40]`}
            >
              Program
            </h2>
            <ul className={`${futuraMedium.className} text-center text-white`}>
              <li>5 driving sessions</li>
              <li>20 minutes per session</li>
              <li>280km over the weekend</li>
              <li>Coaching, video and data analysis</li>
            </ul>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between px-10 gap-5 py-10 w-full bg-[#052756] rounded-2xl">
            <h2
              className={`${futuraCondensed.className} uppercase font-bold text-6xl md:text-left text-center bg-gradient-to-r bg-clip-text text-transparent from-[#ffffff] to-[#ffffff40]`}
            >
              Car Details
            </h2>
            <ul className={`${futuraMedium.className} text-center text-white`}>
              <li>FIA carbon monocoque</li>
              <li>2.0 Renault Sport 4 cylinder turbo engine</li>
              <li>160hp</li>
              <li>500kg</li>
              <li>SADEV 6-speed sequential gearbox with paddle shift</li>
            </ul>
          </div>
        </div>
        <a href="/contact">
            <button
              className={`${futuraMedium.className} bg-[#446890] hover:bg-[#44689040] transition-colors hover:text-black text-white px-3 py-2`}
            >
              Contact Us &rarr;
            </button>
          </a>
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;
