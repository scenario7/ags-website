import React from "react";
import localFont from 'next/font/local';

const futuraMedium = localFont({ src: '../public/fonts/futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });

interface HeroTemplateProps {
  image: string; // The URL or path to the image
  title: string; // Main heading text
  subtitle: string; // Subtitle text
}

const HeroTemplate: React.FC<HeroTemplateProps> = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-full h-[400px] px-10 rounded-2xl">
  {/* Background Image */}
  <img 
    src={image}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
  />
  
  {/* Blur Overlay for Small Screens and Gradient for Larger Screens */}
  <div className="absolute inset-0 bg-[#f6f9ff] opacity-50 md:bg-gradient-to-b md:from-[#f6f9ff] md:to-transparent backdrop-blur-md md:backdrop-blur-none"></div>
  
  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col md:items-start items-center justify-center md:text-left text-center gap-5 px-5">
    <h1 className={`text-3xl md:text-6xl tracking-tighter text-[#09144A] ${futuraMedium.className}`}>
      {title}
    </h1>
    <div className="bg-gradient-to-r to-transparent from-transparent via-[#ED2939] md:from-[#ED2939] h-1 w-36 md:w-72"></div>
    <p className={`${expansiva.className} tracking-widest capitalize text-[12px] md:text-sm text-[#09144A]`}>
      {subtitle}
    </p>
  </div>
</div>

  );
};

export default HeroTemplate;
