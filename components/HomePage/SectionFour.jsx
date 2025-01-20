import localFont from "next/font/local";
import { Inter } from "next/font/google"
import img0 from '@/public/images/0.JPG'
import { useTranslations } from "next-intl";

const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})
const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });

const SectionFour = () => {

  const t = useTranslations("SectionFour")

  return (
    <div className="flex md:flex-row flex-col px-10 py-10 items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-2 text-center">
        <h2 className={`${futuraMedium.className} md:text-left text-center tracking-tighter text-2xl md:text-3xl`}>{t("title")}</h2>
        <div className="bg-gradient-to-r to-transparent from-transparent via-[#ED2939] md:from-[#ED2939] h-1 w-56"></div>
        <p
          className={`text-center md:text-md text-sm md:text-left ${inter.className} tracking-tight`}
        >
          {t("p1")}<br/> {t("p2")}
        </p>
      </div>
      <div>
      <img 
        src={img0.src} 
        alt="" 
        className="h-80 w-full object-cover rounded-lg shadow-[-20px_20px_0_0_#1B2C99]"
        />


      </div>
    </div>
  )
}

export default SectionFour