import React from "react";
import img17 from "@/public/images/17.jpg";
import HeroTemplate from "@/components/HeroTemplate";
import localFont from "next/font/local";
import CustomNavbar from "@/components/CustomNavbar";
import CustomFooter from "@/components/CustomFooter";
import img1 from '@/public/images/history/1.jpg'
import img2 from '@/public/images/history/2.jpg'
import img3 from '@/public/images/history/3.jpg'
import img4 from '@/public/images/history/4.jpg'
import img5 from '@/public/images/history/5.jpg'
import img6 from '@/public/images/history/6.jpg'
import img7 from '@/public/images/history/7.jpg'
import img8 from '@/public/images/history/8.jpg'


const images = [img1, img2, img3, img4, img5, img6, img7, img8]

const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});

const page = () => {
  return (
    <div className="flex flex-col px-3 md:px-10 justify-between min-h-screen">
      <CustomNavbar isHomePage={false} />
      <HeroTemplate image={img17.src} title="Our History" subtitle="" />
      <div className="flex flex-col items-center w-full gap-3 py-5">
        <h1
          className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}
        >
          A New Start for AGS
        </h1>
        <div className="bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4"></div>
        <div className=" flex flex-col gap-5 px-10 items-center">
        <p className="text-center">
          AGS Formule 1 (Automobiles Gonfaronnaises Sportives) took part in the
          Formula 1 World Championships from 86 to 92, thanks to its founder
          Henri Julien. After these participations, he developed the concept of
          Formula 1 training courses. This was AGS&apos;s main activity for many
          years.
        </p>

        <p className="text-center">
          The unique facilities of this former racing team based on the Côte
          d&apos;Azur, and private access to the Var circuit, make it an exceptional
          setting for any motor sport activity.
        </p>

        <p className="text-center">
          At the beginning of 2019, Willy Collignon, owner and manager of the
          First Motorsport stable, was looking for a second workshop in the
          south of France. After a long search, he ended up in Gonfaron... As
          soon as he entered the AGS facilities, he noticed the incredible
          potential of the team. He decided to invest in its development.
        </p>

        <p className="text-center">
          Since August 2019, Willy has been at the helm of the team. His goal?
          To give AGS a fresh start and bring competition back to the workshop!
        </p>

        <p className="text-center">
          He also wants to revive the history of AGS: we are rebuilding the
          historic vehicles that raced in the World Championship. Tarquini&apos;s
          JH25 and 24 have already taken to the track for the first time
        </p>

        <p className="text-center">Do you want to be part of our history?</p>
        <a href="/contact" className="px-3 text-center py-2 w-1/4 rounded-2xl bg-blue-700 text-white">Contact Us &rarr;</a>
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
      <CustomFooter />
    </div>
  );
};

export default page;
