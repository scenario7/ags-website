import React from 'react'
import HeroTemplate from '@/components/HeroTemplate'
import img from '@/public/images/15.jpg'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import img1 from '@/public/images/academy/1.jpg'
import img2 from '@/public/images/academy/2.jpg'
import img3 from '@/public/images/academy/3.jpg'
import img4 from '@/public/images/academy/4.jpg'
import { FaCalendar, FaPersonMilitaryPointing } from 'react-icons/fa6'
import { FaCar, FaFlagCheckered } from 'react-icons/fa'
import CustomFooter from '@/components/CustomFooter'
import CustomNavbar from '@/components/CustomNavbar'

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})


const whyUsPoints = [
    {
        title : 'Tailor Made Training',
        description : 'Our advanced training courses offer personalised sessions and tailor-made coaching workshops, adapted to the specific needs of each rider, such as braking. These targeted courses enable precise and effective technical development.',
        image : img1,
        icon : (<FaFlagCheckered className='w-8 h-8'/>)

    },
    {
        title : 'Full Support',
        description : 'Our expert coaches accompany the drivers from start to finish, with detailed debriefings based on video analysis and technical data, ensuring continuous progress and optimised performance.',
        image : img2,
        icon : (<FaPersonMilitaryPointing className='w-8 h-8'/>)

    },
    {
        title : 'Discovering Talent',
        description : 'We make it a point of honour to identify and train new talent. Our courses are designed to reveal the potential of young drivers and prepare them for the challenges of professional racing.',
        image : img3,
        icon : (<FaCar className='w-8 h-8'/>)

    },
    {
        title : 'Exclusive Experiences',
        description : 'We offer the possibility of privatising a days training or booking one on other circuits such as the Circuit Paul Ricard, the Circuit Club de Nevers Magny-Cours.',
        image : img4,
        icon : (<FaCalendar className='w-8 h-8'/>)

    },
]


const page = () => {
  return (
    <div className="flex flex-col">
        <CustomNavbar isHomePage={false}/>
        <div className=" items-center justify-center px-3 md:px-10">
            <HeroTemplate image={img.src} title="Driver Academy" subtitle="LEVEL UP YOUR RACING TECHNIQUE"/>
            <div className='flex flex-col items-center gap-3 py-10 px-10'>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>Tailor Made Training</h1>
                <div className='bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4'></div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
                We offer tailor-made driving courses, designed to help each young talent progress towards their competition goals. Whether it&apos;s a one-off session or a complete training programme, our expert coaches are with you every step of the way.<br/>
                Our mission: to reveal and develop your potential, while equipping you with the advanced technical skills to excel on the track. With personalised follow-up and detailed analyses, we help you to become an accomplished driver, ready to take on the challenges of the biggest circuits.
                </p>
            </div>
            <div
            style={{
                backgroundImage: `
                linear-gradient(to right, #1B2C99, rgba(0, 0, 0, 0)), 
                url('${img2.src}')
                `,
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image
            }}
            className="rounded-lg"
            >
            {/* Optional: Content over the background */}
            <div className='flex md:flex-row flex-col items-center justify-between tracking-tighter'>
            <div className='flex flex-col items-center md:items-start md:text-left text-center px-5 py-5'>
                <h2 className={`${inter.className} text-white font-semibold`}>
                    Starts from
                </h2>
                <h2 className={`${inter.className} text-white font-semibold text-5xl`}>
                    €3500/-
                </h2>
            </div>
            <div className={`bg-[#1B2C9930] rounded-lg px-5 py-5 flex items-center md:items-end gap-5 flex-col ${futuraMedium.className} tracking-tight`}>
            <a href="mailto:stage@agsracing.com">
                    <button className={`bg-[#1B2C99] px-3 py-2 text-white rounded-lg`}>
                        Reservations by Email Only
                    </button>
                </a>
                <a>
                    <button className={`text-[#1B2C99] px-5 py-2 bg-white rounded-lg`}>
                        Download PDF
                    </button>
                </a>
            </div>
            </div>
            </div>
            <div className='flex flex-col items-center gap-3 py-20'>
            <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>Why Us</h1>
            <div className='bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4'></div>
            <div className='py-10 grid grid-cols-1 gap-10'>
            {whyUsPoints.map((point) => {
                return(
                    <div className='flex md:flex-row flex-col md:text-left text-center items-center gap-10 justify-center' key={point.title}>
                        <div className='bg-[#0B1237] rounded-full p-5 text-white'>
                            {point.icon}
                        </div>
                        <div className='flex flex-col items-center md:items-start md:w-1/2 gap-3  md:text-left text-center'>
                            <h2 className={`${futuraMedium.className} text-[#0B1237] text-xl`}>{point.title}</h2>
                            <p className={`${inter.className} md:text-md text-sm text-[#0B1237]`}>{point.description}</p>
                        </div>
                        <img src={point.image.src} alt="" className='h-80 object-cover rounded-2xl shadow-lg'/>
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