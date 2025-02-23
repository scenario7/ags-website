"use client"
import React from 'react'
import HeroTemplate from '@/components/HeroTemplate'
import img1 from '@/public/images/1.jpg'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import CustomFooter from '@/components/CustomFooter'
import ActivityCard from '@/components/HomePage/ActivityCard'
import { experiences } from '@/experiences'
import CustomNavbar from '@/components/CustomNavbar'
import { useTranslations } from 'next-intl'

const futuraCondensed = localFont({ src: '../../public/fonts/futura/futura-condensed.ttf' });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Page = () => {
  const t = useTranslations("DrivingExperiences");

  return (
    <div className="flex flex-col">
      <CustomNavbar isHomePage={false} />
      <div className="flex flex-col items-center justify-center px-3 md:px-10">
        <HeroTemplate image={img1.src} title={t("title")} subtitle={t("subtitle")} />
        <div className='flex flex-col items-center gap-3 py-10 px-10'>
          <h1 className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-[#002654] to-[#00265440]`}>Experiences</h1>
          <p className={`${inter.className} tracking-tighter text-center md:text-lg text-sm`}>
            {t("p1")}
            {t("p2")}
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-20'>
          {experiences.map((experience) => {
            return (
              <div className='flex flex-col' key={experience.experienceID}>
                <div className='w-80 h-1 bg-transparent'></div>
                <ActivityCard image={experience.image.src} title={`${experience.name} Experience`} link={`driving-experiences/${experience.experienceID}`} key={experience.experienceID} subtitle={experience.description.text}/>
              </div>
            )
          })}
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default Page;
