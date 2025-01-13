import CustomNavbar from "@/components/CustomNavbar";
import HeroTemplate from "@/components/HeroTemplate";
import React from "react";
import localFont from "next/font/local";
import img22 from "@/public/images/22.jpg";
import img1 from "@/public/images/historic-gp/1.jpg";
import img2 from "@/public/images/historic-gp/2.jpg";
import img3 from "@/public/images/historic-gp/3.jpg";
import img4 from "@/public/images/historic-gp/4.jpg";
import img5 from "@/public/images/historic-gp/5.jpg";
import img6 from "@/public/images/historic-gp/6.jpg";
import CustomFooter from "@/components/CustomFooter";

const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});
const images = [img1, img2, img3, img4, img5, img6];

const page = () => {
  return (
    <div>
      <CustomNavbar isHomePage={false} />
      <div className="flex flex-col px-3 md:px-10">
        <HeroTemplate
          image={img22.src}
          title="France Historic GP"
          subtitle="25-27 April 2025"
        />
        <div className="flex flex-col justify-between items-center py-10">
          <div className="flex flex-col items-center gap-5">
            <h2
              className={`${futuraMedium.className} text-3xl w-1/2 text-center`}
            >
              AGS OFFERS YOU TO DRIVE A FORMULA 4 DURING THE FRANCE HISTORIC
              GRAND PRIX
            </h2>
            <div className="bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4"></div>
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
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;
