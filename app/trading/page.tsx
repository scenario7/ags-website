import CustomNavbar from "@/components/CustomNavbar";
import HeroTemplate from "@/components/HeroTemplate";
import React from "react";
import img from "@/public/images/trading/1.jpg";
import CustomFooter from "@/components/CustomFooter";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";

const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});
const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Page = () => {
  const t = useTranslations("Trading");

  return (
    <div className="flex flex-col px-3 md:px-10">
      <CustomNavbar isHomePage={false} />
      <HeroTemplate title="Trading" subtitle="" image={img.src} />
      <div className="flex flex-col md:flex-row items-center py-10 gap-20">
        <div className="md:w-1/2 flex flex-col items-center gap-10">
          <h1
            className={`${futuraCondensed.className} uppercase font-bold text-center text-2xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#002654] to-[#00265440]`}
          >
            {t("h1")}
          </h1>
        </div>
        <div className="flex gap-10 items-end flex-col md:w-1/2">
          <p className={`${inter.className} tracking-tighter`}>
            {t("p1")}
            <br />
            {t("p2")}
          </p>
          <a href="/contact">
            <button
              className={`${futuraMedium.className} bg-[#446890] hover:bg-[#44689040] transition-colors hover:text-black text-white px-3 py-2`}
            >
              Contact Us &rarr;
            </button>
          </a>
        </div>
      </div>

      <CustomFooter />
    </div>
  );
};

export default Page;
