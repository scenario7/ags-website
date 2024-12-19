import NavBar from '@/components/NavBar'
import React from 'react'
import img from '@/public/images/16.jpg'
import HeroTemplate from '@/components/HeroTemplate'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import ActivityCard from '@/components/HomePage/ActivityCard'
import img19 from '@/public/images/19.jpg'
import img20 from '@/public/images/20.jpg'
import img21 from '@/public/images/21.jpg'

const futuraMedium = localFont({ src: '../../public/fonts/Futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const page = () => {
  return (
    <div className='flex flex-col'>
        <NavBar homePage={false}/>
        <div className='flex flex-col px-10'>
            <HeroTemplate image={img.src} title='Facilities & Location' subtitle=''/>
            <div className='flex flex-col items-center gap-3 py-10 px-10'>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>Trackside Excellence</h1>
                <div className='bg-gradient-to-r from-transparent via-[#ED2939] to-transparent h-1 w-1/4'></div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
                    Located in a green setting in the heart of the Plaine des Maures, on the Circuit du Var, the AGS facilities allow us to enjoy the very best of motor sport!
                    <ul className='list-disc text-left'>
                        <li>
                            Reception area
                        </li>
                        <li>
                            Meeting rooms (equipped with TV, blackboard and projectors)
                        </li>
                        <li>
                            Drivers&apos; changing room with showers Fleet of trucks, full assistance equipment
                        </li>
                        <li>
                            Direct access to the track
                        </li>
                    </ul>
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-20 py-10'>
                    <ActivityCard image={img19.src} link='' title='Workshop'/>
                    <ActivityCard image={img20.src} link='' title='Reception'/>
                    <ActivityCard image={img21.src} link='' title='Circuit du Var Private Access'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page