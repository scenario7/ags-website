import React from "react";
import img17 from "@/public/images/17.jpg";
import HeroTemplate from "@/components/HeroTemplate";
import localFont from "next/font/local";
import CustomNavbar from "@/components/CustomNavbar";
import CustomFooter from "@/components/CustomFooter";
import img1 from "@/public/images/history/1.jpg";
import img2 from "@/public/images/history/2.jpg";
import img3 from "@/public/images/history/3.jpg";
import img4 from "@/public/images/history/4.jpg";
import img5 from "@/public/images/history/5.jpg";
import img6 from "@/public/images/history/6.jpg";
import img7 from "@/public/images/history/7.jpg";
import img8 from "@/public/images/history/8.jpg";
import { useTranslations } from "next-intl";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];


const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});
const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});

const Page = () => {
  const t = useTranslations("History");

  return (
    <div className="flex flex-col px-3 md:px-10 justify-between min-h-screen">
      <CustomNavbar isHomePage={false} />
      <HeroTemplate image={img17.src} title={t("title")} subtitle="" />
      <div className="flex flex-col items-center w-full gap-3 py-10">
        <h1
          className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#002654] to-[#00265440]`}
        >
          {t("h1")}
        </h1>
        <div className=" flex flex-col gap-5 px-10 items-center tracking-tight text-lg">
          <p className="text-center">{t("p1")}</p>

          <p className="text-center">{t("p2")}</p>

          <p className="text-center">{t("p3")}</p>

          <p className="text-center">{t("p4")}</p>

          <p className="text-center">{t("p5")}</p>

          <p className="text-center">{t("p6")}</p>
                  <a href="/contact">
                      <button
                        className={`${futuraMedium.className} bg-[#446890] hover:bg-[#44689040] transition-colors hover:text-black text-white px-3 py-2`}
                      >
                        Contact Us &rarr;
                      </button>
                    </a>
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
