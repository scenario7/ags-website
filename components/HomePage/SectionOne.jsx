import React from 'react'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google';
import { useTranslations } from 'next-intl';

const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const SectionOne = () => {

  const t = useTranslations("SectionOne")

  return (
    <div className='flex flex-col items-center py-10 px-10 gap-8'>
        <div className='flex flex-col items-center gap-3'>
            <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>{t("h1")}</h1>
        </div>
        <p className={`text-center ${inter.className} md:text-lg tracking-tighter`}>{t("p1")}<br/>
                {t("p2")}
        </p>
    </div>
  )
}

export default SectionOne