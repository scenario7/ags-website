import React from "react";
import img from "@/public/images/16.jpg";
import HeroTemplate from "@/components/HeroTemplate";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import ActivityCard from "@/components/HomePage/ActivityCard";
import img19 from "@/public/images/19.jpg";
import img20 from "@/public/images/20.jpg";
import img21 from "@/public/images/21.jpg";
import { FaLocationPin } from "react-icons/fa6";
import { FaCar, FaPlane, FaTrain } from "react-icons/fa";
import CustomFooter from "@/components/CustomFooter";
import map from "@/public/images/map.png";
import CustomNavbar from "@/components/CustomNavbar";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});

const Page = () => {
  const t = useTranslations("Facilities");

  const facilities = [
    {
      name: t("f1"),
      clickable: true,
      link: "/workshop",
      image: img19,
      description: (
        <p>
          {t("f1p1")}
          <br />
          <div className="pt-3" />
          {t("f1p2")}
        </p>
      ),
    },
    {
      name: t("f2"),
      clickable: false,
      link: "",
      image: img20,
      description: <p>{t("f2p1")}</p>,
    },
    {
      name: t("f3"),
      clickable: false,
      link: "",
      image: img21,
      description: (
        <p>
          {t("f3p1")}
          <ul className="text-left list-disc pt-3">
            <li>{t("f3b1")}</li>
            <li>{t("f3b2")}</li>
            <li>{t("f3b3")}</li>
            <li>{t("f3b4")}</li>
            <li>{t("f3b5")}</li>
          </ul>
        </p>
      ),
    },
  ];

  const waysToReach = [
    {
      icon: <FaLocationPin className="w-6 h-6 text-[#FFFFFF]" />,
      text: [t("loc")],
    },
    {
      icon: <FaPlane className="w-6 h-6 text-[#FFFFFF]" />,
      text: [t("plane")],
    },
    {
      icon: <FaTrain className="w-6 h-6 text-[#FFFFFF]" />,
      text: [t("train")],
    },
    {
      icon: <FaCar className="w-6 h-6 text-[#FFFFFF]" />,
      text: [t("car1"), t("car2"), t("car3")],
    },
  ];
  return (
    <div className="flex flex-col">
      <CustomNavbar isHomePage={false} />
      <div className="flex flex-col ">
        <div className="px-3 md:px-10">
        <HeroTemplate image={img.src} title={t("title")} subtitle="" />
        </div>
        <div className="flex flex-col items-center gap-10 py-10">
          <h1
            className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#002654] to-[#00265440]`}
          >
            Trackside Excellence
          </h1>
          <p
            className={`${inter.className} tracking-tighter text-center md:text-lg text-sm`}
          >
            {t("p1")}
            <ul className="list-disc text-left">
              <li>{t("p1b1")}</li>
              <li>{t("p1b2")}</li>
              <li>{t("p1b3")}</li>
              <li>{t("p1b4")}</li>
            </ul>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 py-10 px-3 md:px-10">
            {facilities.map((facility) => {
              return (
                <div
                  className="flex flex-col gap-5 items-center"
                  key={facility.name}
                >
                  <ActivityCard
                    image={facility.image.src}
                    link={facility.link}
                    title={facility.name}
                    dontShowArrows={!facility.clickable}
                  />
                  <div
                    className={`${inter.className} text-center md:text-left tracking-tighter font-medium`}
                  >
                    {facility.description}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col bg-[#052756] px-3 md:px-10 py-10">
          <div
            className="bg-[#101010] min-w-full rounded-2xl"
            style={{
              backgroundImage: `url(${map.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="py-16 flex flex-col items-center gap-3 bg-black bg-opacity-50 rounded-2xl">
              <h2
                className={`${futuraCondensed.className} tracking-tighter text-5xl uppercase text-white text-center`}
              >
                {t("h1")}
              </h2>
            </div>
          </div>
          <p
            className={`${inter.className} tracking-tighter text-white text-center md:text-lg text-sm py-10`}
          >
            {t("p2")}
          </p>
          <div>
            {waysToReach.map((way) => {
              return (
                <div className="flex items-start gap-4 py-5" key={way.text[0]}>
                  <div className="text-white">{way.icon}</div>
                  <p className="text-white">
                    {way.text.map((bullet) => {
                      return bullet;
                    })}
                  </p>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
