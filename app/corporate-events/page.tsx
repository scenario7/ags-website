"use client"
import HeroTemplate from "@/components/HeroTemplate"
import img from '@/public/images/14.jpg'
import localFont from 'next/font/local';
import { Inter } from "next/font/google";
import img2 from '@/public/images/15.jpg'
import corp1 from '@/public/images/corporate/1.jpg'
import corp2 from '@/public/images/corporate/2.jpg'
import corp3 from '@/public/images/corporate/3.jpg'
import corp4 from '@/public/images/corporate/4.jpg'
import corp5 from '@/public/images/corporate/5.jpg'
import corp6 from '@/public/images/corporate/6.jpg'
import corp7 from '@/public/images/corporate/7.jpg'
import CustomFooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";
import { useTranslations } from "next-intl";

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const images = [
    corp1, corp2, corp3, corp4, corp5, corp6, corp7
]


const Page = () => {

    const t = useTranslations("CorporateEvents")

  return (
    <div className="flex flex-col">
        <CustomNavbar isHomePage={false}/>
        <div className=" items-center justify-center px-3 md:px-10">
            <HeroTemplate image={img.src} title={t("title")} subtitle={t("subtitle")}/>
            <div className='flex flex-col items-center gap-3 py-10 px-10'>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>{t("smallTitle")}</h1>
                <div className='bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4'></div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
                {t("p1")}<br/>
                {t("p2")}<br/>
                {t("p3")}<br/>
                {t("p4")}
                </p>
            </div>
            <div
            style={{
                backgroundImage: `
                linear-gradient(to right, rgba(246, 249, 255, 0.7), rgba(0, 0, 0, 0)), 
                url('${img2.src}')
                `,
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image
            }}
            className="rounded-lg"
            >
            {/* Optional: Content over the background */}
            <div className={`bg-[#1B2C9930] rounded-lg px-5 py-5 flex md:flex-row flex-col items-center gap-10 justify-between ${futuraMedium.className} tracking-tight`}>
                <a href="mailto:stage@agsracing.com">
                    <button className={`bg-[#1B2C99] px-3 py-2 text-white rounded-lg`}>
                        Reservations by Email Only
                    </button>
                </a>
                <a>
                    <button className={`text-[#1B2C99] px-5 py-2 bg-white rounded-lg`}>
                        Download PDF
                    </button>
                </a>
            </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5 md:gap-20 py-10">
                {images.map((image, index) => {
                    return(
                        <img src={image.src} alt="Hello" key={image.src} className={`w-full h-full ${index==images.length - 1 ? 'col-span-2' : 'col-span-1'}`}/>
                    )
                })}
            </div>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default Page