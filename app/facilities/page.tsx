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
import { FaLocationPin } from 'react-icons/fa6'
import { FaCar, FaPlane, FaTrain } from 'react-icons/fa'
import CustomFooter from '@/components/CustomFooter'

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const facilities = [
    {
        name : "Workshop",
        image : img19,
        description : (<p>We restore and maintain historic racing cars.Thanks to its high-performance tools, AGS can also take care of a complete rebuild until the Historic Technical Passport is obtained and the car is entered in a competition.<br/><div className='pt-3'/>We store your vehicles in a secure location. They will be ready for your driving sessions on the Var circuit (direct access to the track) and your competitions. It couldn&apos;t be simpler: everything happens in the same place!</p>)
    },
    {
        name : "Reception",
        image : img20,
        description : (<p>On Driving Experience days, you can have lunch in the heart of our facilities. With two Formula 1 cars on display and a view of the circuit, it&apos;s the ideal place to spend a convivial moment before getting back behind the wheel.</p>)
    },
    {
        name : "Circuit du Var Private Access",
        image : img21,
        description : (<p>
            The Circuit du Var used to be a test track for AGS Formula 1 cars. Today, it is mainly used for training courses and track days. A technical track that combines fast corners and twisty sections.
            <ul className='text-left list-disc pt-3'>
                <li>2.2km track</li>
                <li>Private access to the track from AGS</li>
                <li>AGS pit lane box</li>
                <li>Organiser&apos;s liability insurance</li>
                <li>Test day insurance</li>
            </ul>
        </p>)
    }
]

const waysToReach = [
    {
        icon : (<FaLocationPin className='w-6 h-6 text-[#09144A]'/>),
        text : [
            "45 minutes away from St. Tropez, less than 2 hours from Monaco"
        ]
    },
    {
        icon : (<FaPlane className='w-6 h-6 text-[#09144A]'/>),
        text : [
            "1 hour from Nice Côte d'Azur and Marseille Marignane airports, 40 minutes from Toulon airport + tourist airports nearby. Heliport on site."
        ]
    },
    {
        icon : (<FaTrain className='w-6 h-6 text-[#09144A]'/>),
        text : [
            "Les Arcs-Draguignan station (20 minutes by car)."
        ]
    },
    {
        icon : (<FaCar className='w-6 h-6 text-[#09144A]'/>),
        text : [
            "From Nice, take the A8 then branch off onto the A57 towards Toulon. Immediately after the junction, take exit 13 (Le Cannet des Maures/Le Luc) on the A57.",
            "From Aix en Provence, take the A8 motorway, then turn off onto the A57 towards Toulon. Immediately after the junction, take exit 13 (Le Cannet des Maures/Le Luc) onto the A57.",
            "From Toulon, take the A57 towards Nice and take exit 13 (Le Cannet des Maures/Le Luc)."
        ]
    }
]

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
                    {facilities.map((facility) => {
                        return(
                            <div className='flex flex-col gap-5 items-center' key={facility.name}>
                                <ActivityCard image={facility.image.src} link='' title={facility.name}/>
                                <div className={`${inter.className} px-10 tracking-tighter font-medium`}>
                                    {facility.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='bg-[#101010] min-w-full rounded-2xl'>
                    <div className='py-10 flex flex-col items-center gap-3'>
                    <h2 className={`${futuraMedium.className} tracking-tighter text-4xl text-white text-center`}>An Exceptional Location</h2>
                    <div className='bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4'></div>
                    </div>
                </div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm py-10`}>
                Just a few kilometres from the French Riviera, AGS is located in the heart of the Maures mountains. Enjoy nature in all its forms... From vineyards to marinas and breathtaking views, the Var region offers you the best of the Mediterranean coast... Its central location means you can reach us in a number of ways.
                </p>
                <div>
                    {waysToReach.map((way) => {
                        return(
                            <div className='flex items-start gap-4 py-5' key={way.text[0]}>
                                <div className=''>
                                    {way.icon}
                                </div>
                                <p>
                                    {way.text.map((bullet) => {
                                        return(bullet)
                                    })}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page