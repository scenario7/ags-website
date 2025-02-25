"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});

const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});

const reviews = [
  {
    profile: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
    name: "Jean Luc San",
    time: "2 months ago",
    review: "Very warm welcome, competent team, great time on the circuit, nothing but happiness",
  },
  {
    profile: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
    name: "Gilles Bruner",
    time: "2 years ago",
    review: "The setting, exceptional, the infrastructures, perfect and then the quality of the whole team, without exception, combining courtesy, passion, kindness, and competence. Highly recommended!",
  },
  {
    profile: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
    name: "Pierre",
    time: "2 years ago",
    review: "What a welcome! Received like friends, by an available and competent team. What a family! Who knows how to share the passion for cars with you, all audiences included!",
  },
];

export default function SectionThree() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="flex flex-col items-center py-20 gap-20">
      {/* Heading */}
      <div className="flex md:flex-row flex-col gap-10 justify-between w-full items-center px-10">
      <motion.h2
  className={`${futuraCondensed.className} uppercase font-bold text-5xl md:text-8xl bg-gradient-to-r bg-clip-text text-transparent from-[#002654] to-[#00265440]`}
  initial={{ opacity: 0, y: 50 }} // Starts hidden and below
  whileInView={{ opacity: 1, y: 0 }} // Animates only when in view
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }} // Starts when 20% of element is visible
>
  Reviews
</motion.h2>


        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-4">
            {/* Star Ratings */}
            {Array(4).fill(0).map((_, index) => (
              <svg key={index} fill="#09144A" strokeWidth="1.5" stroke="#09144A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            ))}
          </div>
          <p className={`${futuraMedium.className}`}>Average Rating - 4.5/5</p>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden w-full py-10">
        <motion.div
          ref={carouselRef}
          className="flex gap-5 md:gap-10"
          animate={{ x: [0, -width, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {reviews.concat(reviews).map((review, index) => (
            <div key={index} className="bg-[#052756] px-5 py-5 flex flex-col justify-between gap-5 rounded-xl hover:shadow-md hover:scale-105 transition-all min-w-[400px]">
              <p className={`font-semibold text-white tracking-tighter ${inter.className}`}>{review.review}</p>
              <div className="flex gap-5 items-center">
                <img src={review.profile} alt="" className="w-8 h-8 rounded-full object-cover"/>
                <div className="flex flex-col">
                    <h1 className={`${futuraMedium.className} text-lg text-white tracking-tighter`}>{review.name}</h1>
                    <h2 className={`${futuraMedium.className} text-sm text-gray-400`}>{review.time}</h2>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
