import React from 'react'
import HeroTemplate from '@/components/HeroTemplate'
import img1 from '@/public/images/1.jpg'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import CustomFooter from '@/components/CustomFooter'
import ActivityCard from '@/components/HomePage/ActivityCard'
import { experiences } from '@/experiences'
import CustomNavbar from '@/components/CustomNavbar'



const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})



const page = () => {
  return (
    <div className="flex flex-col">
        <CustomNavbar isHomePage={false}/>
        <div className="flex flex-col items-center justify-center px-3 md:px-10">
            <HeroTemplate image={img1.src} title="Driving Experiences" subtitle="BE A RACING DRIVER DURING THE DAY"/>
            <div className='flex flex-col items-center gap-3 py-10 px-10'>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>Choose an Experience</h1>
                <div className='bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4'></div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
                With over 25 years&apos; experience in Formula 1 driving courses, as well as 7 years&apos; participation in the Formula 1 World Championship from 1986 to 1992, AGS is the ideal partner for an unforgettable experience!<br/>
                From Formula 4 to Formula 1, come and discover how to drive a single-seater in complete safety. Briefings, provision of equipment, professional coaches... AGS takes care of everything!
                </p>
            </div>
            <div className='flex flex-col md:flex-row gap-20'>
                {experiences.map((experience) => {
                    return(
                      <div className='flex flex-col' key={experience.experienceID}>
                        <div className='w-80 h-1 bg-transparent'></div>
                        <ActivityCard image={experience.image.src} title={`${experience.name} Experience`} link={`driving-experiences/${experience.experienceID}`} key={experience.experienceID}/>
                      </div>
                    )
                })}
            </div>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page