"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import CustomFooter from '@/components/CustomFooter'
import HeroTemplate from '@/components/HeroTemplate'
import ActivityCard from '@/components/HomePage/ActivityCard'
import { experiences } from '@/experiences'
import CustomNavbar from '@/components/CustomNavbar'


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
                  <div>
                    <div className='w-80 h-1 bg-transparent'></div>
                    <ActivityCard title={pkg.name} image={pkg.headerImage.src} link={`/driving-experiences/${experience.experienceID}/package/${pkg.name}`} key={pkg.name}/>
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
