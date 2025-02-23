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
const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});

const SectionFour = () => {
  const t = useTranslations("SectionFour");

  return (
    <div className="flex md:flex-row flex-col px-10 py-20 items-center gap-10 bg-[#052756]">
      <div className="flex flex-col items-center md:items-start gap-5 text-center">
        <h2
          className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-8xl bg-gradient-to-r bg-clip-text text-transparent from-[#ffffff] to-[#ffffff40]`}
        >
          {t("title")}
        </h2>
        <p
          className={`text-center md:text-lg md:text-left ${inter.className} tracking-tight text-white`}
        >
          {t("p1")}
          <br /> {t("p2")}
        </p>
        <a href="/history">
          <button
            className={`${futuraMedium.className} hover:bg-[#446890] bg-white transition-colors text-black px-3 py-2`}
          >
            Our History
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center gap-10">
        <img
          src={img0.src}
          alt=""
          className="h-80 w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SectionFour;
