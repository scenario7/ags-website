"use client";
import React from "react";
import { useParams } from "next/navigation";
import CustomFooter from "@/components/CustomFooter";
import HeroTemplate from "@/components/HeroTemplate";
import ActivityCard from "@/components/HomePage/ActivityCard";
import { experiences } from "@/experiences";
import CustomNavbar from "@/components/CustomNavbar";
import localFont from "next/font/local";

const futuraMedium = localFont({
  src: "../../../public/fonts/futura/futura-medium.ttf",
});
const expansiva = localFont({
  src: "../../../public/fonts/expansiva/expansiva.otf",
});

const Page = () => {
  const { experienceID } = useParams();
  const experience = experiences.find(
    (exp) => exp.experienceID === experienceID
  );

  return (
    <div>
      <CustomNavbar isHomePage={false} />
      <div className=" flex flex-col items-center text-center text-2xl mt-10 px-3 md:px-10">
        <HeroTemplate
          title={`${experience?.name} Experience`}
          image={experience?.image.src || ""}
          subtitle={''}
        />
        <p className={`${futuraMedium.className} text-sm pt-10`}>{experience?.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 py-10">
          {experience?.packages.map((pkg) => {
            return (
              <div key={pkg.priceID}>
                <div className="w-80 h-1 bg-transparent"></div>
                <div className="flex flex-col">
                  <ActivityCard
                    title={pkg.name}
                    image={pkg.headerImage.src}
                    link={`/driving-experiences/${experience.experienceID}/package/${pkg.name}`}
                    key={pkg.name}
                  />
                  <div
                    className={`${futuraMedium.className} gap-2 bg-gradient-to-t from-[#1C4773] to-[#1C4773] -mt-4 rounded-xl pt-8 pb-4 text-white text-sm flex flex-col items-center `}
                  >
                    {pkg.laps.map((type) => {
                      return (
                        <div
                          key={type.quantity}
                          className="flex items-center justify-between w-full px-10"
                        >
                          <svg
                            data-slot="icon"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                            ></path>
                          </svg>
                          <h3 className={`${futuraMedium.className} text-lg`}>
                            {type.quantity} Laps
                          </h3>
                          <h3
                            className={`${futuraMedium.className} text-lg bg-blue-950 px-2 rounded-full`}
                          >
                            {type.car}
                          </h3>
                        </div>
                      );
                    })}
                    <h1 className="text-2xl font-medium tracking-tighter">
                      From €{pkg.price}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-3 py-10">
        <h1
          className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}
        >
          The Track
        </h1>
        <div className="bg-gradient-to-r from-transparent via-[#1C4773] to-transparent h-1 w-1/4"></div>
        <div className="flex flex-col md:flex-row gap-10 items-center py-10">
          <div className="flex flex-col items-center gap-5 md:w-1/2">
            <svg
              width="170"
              viewBox="0 0 284 303"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1325 298.412L176.479 298.412C188.009 297.794 201.187 286.639 206.334 281.139L262.7 220.809C269.392 215.825 282.158 201.937 279.687 186.262C276.599 166.667 266.818 163.316 261.928 160.738C257.038 158.159 236.962 158.675 228.726 159.449C222.137 160.067 213.455 159.191 209.938 158.675L158.462 159.449C154.773 159.363 147.447 157.334 147.652 149.909C147.858 142.484 154.258 139.081 157.433 138.308C163.352 137.964 176.685 137.276 182.656 137.276C188.009 134.182 184.886 129.971 182.656 128.253C176.393 125.932 161.808 120.724 153.572 118.456C145.336 116.187 140.532 109.432 139.159 106.338C128.435 83.3923 105.7 34.2006 100.552 21.0003C95.4048 7.80006 87.2545 4.49999 83.8228 4.49999C76.3588 4.84375 58.3424 5.73752 45.9883 6.56253C33.6342 7.38755 35.6932 22.2035 38.267 29.5083C39.3823 32.1725 42.488 40.6976 45.9883 53.4854C49.4886 66.2732 48.1331 75.1421 47.0178 77.9781C35.1785 137.362 10.2643 260.565 5.32268 278.303C0.38103 296.041 10.4702 299.1 16.1325 298.412Z"
                stroke="#1C4773"
                strokeWidth="8"
              />
            </svg>
            <h3 className={`${expansiva.className}`}>Circuit du Var</h3>
          </div>
          <div className="md:w-1/2 text-center md:text-left text-sm flex flex-col gap-5">
            <p className={`${futuraMedium.className}`}>
              The Circuit du Var used to be a test track for AGS Formula 1 cars.
              Today, it is mainly used for training courses and track days. A
              technical layout that combines fast corners and twisty sections.
            </p>
            <ul className={`${futuraMedium.className} list-disc`}>
              <li>Length - 2.2km</li>
              <li>Private Access from AGS</li>
              <li>AGS pit lane box</li>
              <li>Track rescue service</li>
              <li>Organiser&apos;s liability insurance</li>
              <li>Test day insurance</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-3">
          <h1
            className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}
          >
            Description
          </h1>
          <div className="bg-gradient-to-r from-transparent via-[#1C4773] to-transparent h-1 w-1/4"></div>
          <p className={`${futuraMedium.className} pb-10 text-sm`}>
            {experience?.description.text}
          </p>
          <ul className={`${futuraMedium.className} text-center text-sm`}>
            {experience?.description.points.map((point) => {
              return (
                <div className="flex flex-col" key={point.heading}>
                  <h2 className="text-xl">{point.heading}</h2>
                  <h3 className="text-md text-gray-500 pb-5">
                    {point.subtitle}
                  </h3>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
