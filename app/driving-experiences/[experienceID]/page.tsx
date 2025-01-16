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
                    <div className={`${futuraMedium.className} bg-gradient-to-t from-[#2341FF] to-[#2341FF80] -mt-4 rounded-xl pt-8 pb-4 text-white text-sm`}>
                      {pkg.laps.map((type) => {
                        return(
                          <div>
                            {type.car} : {type.quantity}
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
