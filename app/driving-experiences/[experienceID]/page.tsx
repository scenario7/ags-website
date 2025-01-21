"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import CustomFooter from '@/components/CustomFooter'
import HeroTemplate from '@/components/HeroTemplate'
import ActivityCard from '@/components/HomePage/ActivityCard'
import { experiences } from '@/experiences'
import CustomNavbar from '@/components/CustomNavbar'
import localFont from 'next/font/local'

const futuraMedium = localFont({ src: '../../../public/fonts/futura/futura-medium.ttf' });


const Page = () => {

  const { experienceID } = useParams();
  const experience = experiences.find(exp => exp.experienceID === experienceID);

  return (
    <div>
        <CustomNavbar isHomePage={false}/>
        <div className=" flex flex-col items-center text-center text-2xl mt-10 px-3 md:px-10">
        <HeroTemplate title={`${experience?.name} Experience`} image={experience?.image.src || ''} subtitle=''/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-20 py-10'>
            {experience?.packages.map((pkg) => {
                return(
                  <div key={pkg.priceID}>
                    <div className='w-80 h-1 bg-transparent'></div>
                    <div className='flex flex-col'>
                    <ActivityCard title={pkg.name} image={pkg.headerImage.src} link={`/driving-experiences/${experience.experienceID}/package/${pkg.name}`} key={pkg.name}/>
                    <div className={`${futuraMedium.className} gap-2 bg-gradient-to-t from-[#2341FF] to-[#2341FF80] -mt-4 rounded-xl pt-8 pb-4 text-white text-sm flex flex-col items-center `}>
                      {pkg.laps.map((type) => {
                        return(
                          <div key={type.quantity} className='flex items-center justify-between w-full px-10'>
                            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-6'>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"></path>
</svg>
                            <h3 className={`${futuraMedium.className} text-lg`}>{type.quantity} Laps</h3>
                            <h3 className={`${futuraMedium.className} text-lg bg-blue-950 px-2 rounded-full`}>{type.car}</h3>
                          </div>
                        )
                      })}
                      <h1 className='text-2xl font-medium tracking-tighter'>From €{pkg.price}</h1>
                    </div>
                    </div>
                  </div>
                )
            })}
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default Page
