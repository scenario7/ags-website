"use client";
import HeroTemplate from "@/components/HeroTemplate";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import img2 from "@/public/images/15.jpg";
import corp1 from "@/public/images/corporate/1.jpg";
import corp2 from "@/public/images/corporate/2.jpg";
import corp3 from "@/public/images/corporate/3.jpg";
import corp4 from "@/public/images/corporate/4.jpg";
import corp5 from "@/public/images/corporate/5.jpg";
import corp6 from "@/public/images/corporate/6.jpg";
import corp7 from "@/public/images/corporate/7.jpg";
import CustomFooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";
import { useTranslations } from "next-intl";
import { InstagramEmbed } from "react-social-media-embed";
const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});
const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const images = [corp1, corp2, corp3, corp4, corp5, corp6, corp7];

const Page = () => {
  const t = useTranslations("CorporateEvents");

  return (
    <div className="flex flex-col">
      <CustomNavbar isHomePage={false} />
      <div className=" items-center justify-center ">
        <div className="px-3 md:px-10">
          <HeroTemplate
            image={corp5.src}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </div>
        <div className="flex flex-col items-center gap-5 py-10 px-10 bg-[#052756] mt-10">
          <h1
            className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-8xl bg-gradient-to-r bg-clip-text text-transparent from-[#ffffff] to-[#ffffff90]`}
          >
            {t("smallTitle")}
          </h1>

          <p
            className={`${inter.className} tracking-tighter text-center md:text-lg text-sm text-white`}
          >
            <span className="mb-5 block">{t("p1")}</span>
            <span className="mb-5 block">{t("p2")}</span>
            <span className="mb-5 block">{t("p3")}</span>
            <span className="block">{t("p4")}</span>
          </p>
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
          <div
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(246, 249, 255, 0.7), rgba(0, 0, 0, 0)), 
                url('${img2.src}')
                `,
              backgroundSize: "cover", // Ensures the image covers the entire div
              backgroundPosition: "center", // Centers the image
            }}
            className="rounded-lg w-full my-5"
          >
            {/* Optional: Content over the background */}
            <div
              className={`bg-[#1B2C9930] rounded-lg px-5 py-5 flex md:flex-row flex-col items-center gap-10 justify-between ${futuraMedium.className} tracking-tight`}
            >
              <a href="mailto:stage@agsracing.com">
                <button
                  className={`bg-[#1B2C99] px-3 py-2 text-white rounded-lg`}
                >
                  Reservations by Email Only
                </button>
              </a>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/website-d40d6.firebasestorage.app/o/AGS%20EVENTS%202025%20-%20EN.pdf?alt=media&token=21c21e6d-d111-4cb4-87fa-baaa7e822573"
                target="_blank"
              >
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
      <div className="flex md:flex-row flex-col w-full justify-center gap-10 py-10 items-center">
        <InstagramEmbed
          url="https://www.instagram.com/reel/DE2pWrYMrK3/?utm_source=ig_web_button_share_sheet"
          width={328}
        />
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
