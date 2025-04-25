import React from "react";
import localFont from "next/font/local";

const expansiva = localFont({ src: "../public/fonts/expansiva/expansiva-bold.otf", weight: "700" });

const futuraLight = localFont({
  src: "/../public/fonts/futura/futura-light.ttf",
});

interface HeroTemplateProps {
  image: string; // The URL or path to the image
  title: string; // Main heading text
  subtitle: string; // Subtitle text
}


const HeroTemplate: React.FC<HeroTemplateProps> = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-y-0 right-0 w-full h-full">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#052756] bg-opacity-60"></div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-y-0 left-0 w-full flex flex-col items-center justify-center md:pl-10 gap-5 z-10">
        <h1
          className={`text-3xl md:text-6xl tracking-tighter text-[#ffffff] text-left ${futuraLight.className}`}
        >
          {title}
        </h1>
        <div className="bg-gradient-to-r from-transparent via-[#ffffff] to-transparent h-1 w-36 md:w-72"></div>
        <p
          className={`${expansiva.className} tracking-widest uppercase text-[12px] md:text-sm text-center text-xs text-[#ffffff]`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroTemplate;
