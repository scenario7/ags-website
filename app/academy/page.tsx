import React from "react";
import HeroTemplate from "@/components/HeroTemplate";
import img from "@/public/images/15.jpg";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import img1 from "@/public/images/academy/1.jpg";
import img2 from "@/public/images/academy/2.jpg";
import img3 from "@/public/images/academy/3.jpg";
import img4 from "@/public/images/academy/4.jpg";
import { FaCalendar, FaPersonMilitaryPointing } from "react-icons/fa6";
import { FaCar, FaFlagCheckered } from "react-icons/fa";
import CustomFooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";
import { useTranslations } from "next-intl";

const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});
const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Page = () => {
  const t = useTranslations("DriverAcademy");

  const whyUsPoints = [
    {
      title: t("B1T"),
      description: t("B1D"),
      image: img1,
      icon: <FaFlagCheckered className="w-8 h-8" />,
    },
    {
      title: t("B2T"),
      description: t("B2D"),
      image: img2,
      icon: <FaPersonMilitaryPointing className="w-8 h-8" />,
    },
    {
      title: t("B3T"),
      description: t("B3D"),
      image: img3,
      icon: <FaCar className="w-8 h-8" />,
    },
    {
      title: t("B4T"),
      description: t("B4D"),
      image: img4,
      icon: <FaCalendar className="w-8 h-8" />,
    },
  ];

  return (
    <div className="flex flex-col">
      <CustomNavbar isHomePage={false} />
      <div className=" items-center justify-center ">
        <div className="px-3 md:px-10">
          <HeroTemplate
            image={img.src}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </div>
        <div className="flex flex-col items-center gap-3 py-20 px-10 bg-[#052756] mt-10">
          <h1
            className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-[#ffffff] to-[#ffffff90]`}
          >
            {t("h1")}
          </h1>

          <p
            className={`${inter.className} tracking-tighter text-white text-center md:text-lg text-sm pt-5`}
          >
            {t("p1")}
            <br />
            {t("p2")}
          </p>
          <div
            style={{
              backgroundImage: `
                linear-gradient(to right, #1B2C99, rgba(0, 0, 0, 0)), 
                url('${img2.src}')
                `,
              backgroundSize: "cover", // Ensures the image covers the entire div
              backgroundPosition: "center", // Centers the image
            }}
            className="rounded-lg w-full mt-5"
          >
            {/* Optional: Content over the background */}
            <div className="flex md:flex-row flex-col items-center justify-between tracking-tighter">
              <div className="flex flex-col items-center md:items-start md:text-left text-center px-5 py-5">
                <h2 className={`${inter.className} text-white font-semibold`}>
                  {t("starts")}
                </h2>
                <h2
                  className={`${inter.className} text-white font-semibold text-5xl`}
                >
                  €3500/-
                </h2>
              </div>
              <div
                className={`bg-[#1B2C9930] rounded-lg px-5 py-5 flex items-center md:items-end gap-5 flex-col ${futuraMedium.className} tracking-tight`}
              >
                <a href="mailto:stage@agsracing.com">
                  <button
                    className={`bg-[#1B2C99] px-3 py-2 text-white rounded-lg`}
                  >
                    {t("reservations")}
                  </button>
                </a>
                <a>
                  <button
                    className={`text-[#1B2C99] px-5 py-2 bg-white rounded-lg`}
                  >
                    Download PDF
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 py-10">
          <h1
            className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-[#002654] to-[#00265440]`}
          >
            Why Us
          </h1>
          <div className="py-10 px-3 md:px-10 grid grid-cols-1 gap-10">
            {whyUsPoints.map((point, index) => {
              return (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:text-left text-center items-center gap-10 justify-center' justify-between`}
                >
                  <div className="bg-[#0B1237] rounded-full p-5 text-white">
                    {point.icon}
                  </div>
                  <div className="flex flex-col items-center md:items-start md:w-1/2 gap-3  md:text-left text-center">
                    <h2
                      className={`${futuraMedium.className} text-[#0B1237] text-xl`}
                    >
                      {point.title}
                    </h2>
                    <p
                      className={`${inter.className} md:text-md text-sm text-[#0B1237]`}
                    >
                      {point.description}
                    </p>
                  </div>
                  <img
                    src={point.image.src}
                    alt=""
                    className="h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
