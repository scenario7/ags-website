import localFont from "next/font/local";
import { Inter } from "next/font/google";
import img0 from "@/public/images/0.JPG";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const futuraLight = localFont({
  src: "../../public/fonts/futura/futura-std-light.ttf",
});
const futuraMedium = localFont({
  src: "../../public/fonts/futura/futura-medium.ttf",
});
const expansiva = localFont({
  src: "../../public/fonts/expansiva/expansiva-bold.otf",
  weight: "700",
});

const SectionFour = () => {
  const t = useTranslations("SectionFour");

  return (
    <div className="flex md:flex-row flex-col px-10 py-10 items-center gap-10">
      <div className="flex flex-col items-center md:items-start gap-5 text-center">
        <h2
          className={`${futuraMedium.className} md:text-left text-center tracking-tighter text-2xl md:text-3xl`}
        >
          {t("title")}
        </h2>
        <div className="bg-gradient-to-r to-transparent from-transparent via-[#ED2939] md:from-[#ED2939] h-1 w-56"></div>
        <p
          className={`text-center md:text-lg md:text-left ${inter.className} tracking-tight`}
        >
          {t("p1")}
          <br /> {t("p2")}
        </p>
        <a href="/history">
          <button
            className={`${futuraMedium.className} hover:bg-[#446890] bg-[#060D30] transition-colors text-white px-3 py-2`}
          >
            Our History
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center gap-10">
        <img
          src={img0.src}
          alt=""
          className="h-80 w-full object-cover rounded-lg shadow-[-20px_20px_0_0_#060D30]"
        />
      </div>
    </div>
  );
};

export default SectionFour;
