import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'
import img1 from '@/public/images/workshop/1.jpg'
import img2 from '@/public/images/workshop/2.jpg'
import img3 from '@/public/images/workshop/3.jpg'
import img4 from '@/public/images/workshop/4.jpg'
import CustomNavbar from '@/components/CustomNavbar'
import CustomFooter from '@/components/CustomFooter'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { useTranslations } from 'next-intl'

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const cars = [
    "AGS JH 25-24-23",
    "Prost AP 02",
    "Stewart SF1",
    "Tyrrell 010–025",
    "Williams FW04",
    "Lotus 16",
    "Toro Rosso 2013 F1",
    "Gordini F1 1952",
    "Porsche 962",
    "Porsche 908",
    "Ford Sierra Cosworth Gr.A",
    "Ford Escort Mk 1-2 Gr4",
    "Ford Escort Cosworth GrA",
    "Subaru Legacy Gr.A",
    "Ford Fiesta WRC",
    "Fiat 131 Abarth Gr4",
    "Lancia Stratos Gr 4",
    "Porsche RSR Gr 4"
  ];
  

  const images = [img1, img2, img3, img4]

const Page = () => {

    const t = useTranslations("Workshop")
    const services = [t("service1"),t("service2"),t("service3"),t("service4"),t("service5"),t("service6"),t("service7"),t("service8"),t("service9"),t("service10"),t("service11"),t("service12"),t("service13"),t("service14")]

  return (
    <div className='flex flex-col'>
        <CustomNavbar isHomePage={false}/>
        <div className='px-3 md:px-10'>
            <HeroTemplate title={t("title")} subtitle={t("subtitle")} image={img1.src}/>
            <div className='flex flex-col items-center py-10 gap-10'>
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
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
                {t("p1")} <br/>
                {t("p2")}
                </p>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>{t("h1")}</h1>
                <div className='bg-gradient-to-r from-transparent via-[#060D30] to-transparent h-1 w-1/4'></div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10'>
                    {cars.map((car) => {
                        return(
                            <div key={car} className={`bg-[#060D30] hover:bg-[#060D3090] transition-colors shadow-md rounded-lg p-4 text-white ${futuraMedium.className} text-center`}>
                                {car}
                            </div>
                        )
                    })}
                </div>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>{t("h2")}</h1>
                <div className='bg-gradient-to-r from-transparent via-[#060D30] to-transparent h-1 w-1/4'></div>
                <ul className='list-disc'>
                    {services.map((service) => {
                        return(
                            <li key={service} className={`${inter.className} tracking-tighter py-3 text-left md:text-md text-sm`}>
                                {service}
                            </li>
                        )
                    })}
                </ul>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>{t("h3")}</h1>
                <div className='bg-gradient-to-r from-transparent via-[#060D30] to-transparent h-1 w-1/4'></div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
               {t("p3")}
                </p>
            </div>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default Page