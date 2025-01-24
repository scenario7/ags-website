import CustomNavbar from '@/components/CustomNavbar'
import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'
import img from '@/public/images/trading/1.jpg'
import CustomFooter from '@/components/CustomFooter'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { useTranslations } from 'next-intl'

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})


const Page = () => {

    const t = useTranslations("Trading")

  return (
    <div className='flex flex-col px-3 md:px-10'>
        <CustomNavbar isHomePage={false}/>
        <HeroTemplate title='Trading' subtitle='' image={img.src}/>
        <div className='flex flex-col md:flex-row py-10 gap-20'>
            <div className='md:w-1/2 flex flex-col items-center gap-10'>
            <h1 className={`${futuraMedium.className} tracking-tighter md:text-center text-center text-2xl md:text-4xl`}>{t("h1")}</h1>
            <div className='bg-gradient-to-r from-transparent via-[#060D30] to-transparent h-1 w-1/4'></div>
            </div>
            <div className='flex flex-col md:w-1/2'>
                <p className={`${inter.className}`}>
                {t("p1")}<br/>
                {t("p2")} 
                </p>
            </div>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default Page