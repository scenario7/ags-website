import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });

interface ActivityCardProps {
  image: string;
  title: string;
  link: string;
  subtitle? : string;
  dontShowArrows?: boolean;  // Add the optional dontShowArrows prop
}

const ActivityCard: React.FC<ActivityCardProps> = ({ image, title, link, subtitle, dontShowArrows }) => {
  return (
    <a href={link} className="block w-80 h-96 relative overflow-hidden rounded-lg group">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#060D30] to-transparent z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Title */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
      <h2
        className={`text-center text-white font-bold ${futuraLight.className} text-3xl`}
      >
        {title}
      </h2>
      <p className="text-white text-center text-xs w-full pt-5">{subtitle}</p>
      </div>

      {/* Icon (Arrow) */}
      {!dontShowArrows && (  // Conditionally render the arrow button
        <div className="absolute top-4 right-4 bg-[#002654] text-white p-2 rounded z-20 hover:bg-[#003773] transition-colors duration-300">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
            ></path>
          </svg>
        </div>
      )}
    </a>
  );
};

export default ActivityCard;
