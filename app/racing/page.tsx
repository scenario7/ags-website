import React from "react";
import HeroTemplate from "@/components/HeroTemplate";
import img from "@/public/images/16.jpg";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import race1 from "@/public/images/racing/1.jpg";
import race2 from "@/public/images/racing/2.jpg";
import race3 from "@/public/images/racing/3.jpg";
import race4 from "@/public/images/racing/4.jpg";
import race5 from "@/public/images/racing/5.jpg";
import race6 from "@/public/images/racing/6.jpg";
import race7 from "@/public/images/racing/7.jpg";
import race8 from "@/public/images/racing/8.jpg";
import race9 from "@/public/images/racing/9.jpg";
import CustomFooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";
import { useTranslations } from "next-intl";

const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});

const images = [race1, race2, race3, race4, race5, race6, race7, race8, race9];

const Page = () => {
  const t = useTranslations("Racing");

  const infoCards = [
    {
      title: t("B1T"),
      points: [t("B1P1"), t("B1P2"), t("B1P3"), t("B1P4")],
      color: "2341FF",
    },
    {
      title: t("B2T"),
      points: [t("B2P1"), t("B2P2"), t("B2P3")],
      color: "002654",
    },
    {
      title: t("B3T"),
      points: [t("B3P1"), t("B3P2"), t("B3P3")],
      color: "1B2C99",
    },
  ];

  return (
    <div className="flex flex-col">
      <CustomNavbar isHomePage={false} />
      <div className=" items-center justify-center px-3 md:px-10">
        <HeroTemplate image={img.src} title="Racing Team" subtitle="" />
        <div className="flex flex-col items-center gap-3 py-10 px-10">
          <h1
            className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#002654] to-[#00265440]`}
          >
            {t("h1")}
          </h1>
          <p
            className={`${inter.className} tracking-tighter text-center md:text-lg text-sm`}
          >
            {t("p1")}
            <br />
            {t("p2")}
            <br />
          </p>
          <a href="/contact">
            <button
              className={`${futuraMedium.className} bg-[#446890] hover:bg-[#44689040] transition-colors hover:text-black text-white px-3 py-2`}
            >
              Contact Us &rarr;
            </button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 tracking-tighter">
          {infoCards.map((infoCard) => {
            return (
              <div
                className={`bg-[#${infoCard.color}] py-10 px-10 flex flex-col gap-10 rounded-2xl shadow-lg`}
                key={infoCard.title}
              >
                <h3
                  className={`${futuraCondensed.className} text-4xl uppercase text-center text-white`}
                >
                  {infoCard.title}
                </h3>
                <div>
                  {infoCard.points.map((point) => {
                    return (
                      <p
                        className={`text-white ${inter.className} tracking-tight`}
                        key={point}
                      >
                        • {point}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
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

export default Page;
