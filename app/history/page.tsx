import React from "react";
import img17 from "@/public/images/17.jpg";
import HeroTemplate from "@/components/HeroTemplate";
import localFont from "next/font/local";
import CustomNavbar from "@/components/CustomNavbar";
import CustomFooter from "@/components/CustomFooter";
import img1 from '@/public/images/history/1.jpg'
import img2 from '@/public/images/history/2.jpg'
import img3 from '@/public/images/history/3.jpg'
import img4 from '@/public/images/history/4.jpg'
import img5 from '@/public/images/history/5.jpg'
import img6 from '@/public/images/history/6.jpg'
import img7 from '@/public/images/history/7.jpg'
import img8 from '@/public/images/history/8.jpg'
import { useTranslations } from "next-intl";


const images = [img1, img2, img3, img4, img5, img6, img7, img8]

const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});

const Page = () => {

    const t = useTranslations("History")

  return (
    <div className="flex flex-col px-3 md:px-10 justify-between min-h-screen">
      <CustomNavbar isHomePage={false}/>
      <HeroTemplate image={img17.src} title={t("title")} subtitle="" />
      <div className="flex flex-col items-center w-full gap-3 py-5">
        <h1
          className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}
        >
          {t("h1")}
        </h1>
        <div className="bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4"></div>
        <div className=" flex flex-col gap-5 px-10 items-center">
        <p className="text-center">
          {t("p1")}
        </p>

        <p className="text-center">
        {t("p2")}
        </p>

        <p className="text-center">
          {t("p3")}
        </p>

        <p className="text-center">
        {t("p4")}
        </p>

        <p className="text-center">
        {t("p5")}
        </p>

        <p className="text-center">{t("p6")}</p>
        <a href="/contact" className="px-3 text-center py-2 w-1/4 rounded-2xl bg-blue-700 text-white">Contact Us &rarr;</a>
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
