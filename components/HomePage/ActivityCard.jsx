import React from "react";
import localFont from "next/font/local";

const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });

const ActivityCard = ({ image, title, link }) => {
  return (
    <a href={link} className="block w-80 h-96 relative overflow-hidden rounded-lg group">
  {/* Image */}
  <img
    src={image}
    alt={title}
    className="absolute inset-0 object-cover w-full h-full"
  />

  {/* Gradient Overlay */}
  <div
  className={`absolute inset-0 bg-gradient-to-t from-[#002654] to-transparent z-10 ${
    "opacity-100" /* Default visible on small screens */
  } md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300`}
></div>


  {/* Title */}
  <h2
    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white font-bold z-20 ${
      futuraLight.className
    } text-3xl ${
      "opacity-100" /* Default visible */
    } md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300`}
  >
    {title}
  </h2>

  {/* Icon */}
  <div
    className="absolute top-4 right-4 bg-[#002654] text-white p-2 rounded z-20 hover:bg-[#003773] transition-colors duration-300"
  >
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
</a>

  );
};

export default ActivityCard;
