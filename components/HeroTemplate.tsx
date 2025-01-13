import React from "react";
import localFont from "next/font/local";

const futuraMedium = localFont({ src: "../public/fonts/futura/futura-medium.ttf" });
const expansiva = localFont({ src: "../public/fonts/expansiva/expansiva-bold.otf", weight: "700" });

interface HeroTemplateProps {
  image: string; // The URL or path to the image
  title: string; // Main heading text
  subtitle: string; // Subtitle text
}


const HeroTemplate: React.FC<HeroTemplateProps> = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-y-0 right-0 w-[75%] h-full">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6f9ff] to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-y-0 left-0 w-[25%] flex flex-col items-start justify-center pl-10 gap-5 z-10">
        <h1
          className={`text-3xl md:text-6xl tracking-tighter text-[#09144A] text-left ${futuraMedium.className}`}
        >
          {title}
        </h1>
        <div className="bg-gradient-to-r md:from-[#ED2939] from-transparent via-[#ED2939] to-transparent h-1 w-36 md:w-72"></div>
        <p
          className={`${expansiva.className} tracking-widest capitalize text-[12px] md:text-sm text-[#09144A] text-left`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroTemplate;
