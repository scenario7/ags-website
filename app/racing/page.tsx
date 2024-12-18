import React from 'react'
import HeroTemplate from '@/components/HeroTemplate'
import NavBar from '@/components/NavBar'
import img from '@/public/images/16.jpg'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import race1 from '@/public/images/racing/1.jpg'
import race2 from '@/public/images/racing/2.jpg'
import race3 from '@/public/images/racing/3.jpg'
import race4 from '@/public/images/racing/4.jpg'
import race5 from '@/public/images/racing/5.jpg'
import race6 from '@/public/images/racing/6.jpg'
import race7 from '@/public/images/racing/7.jpg'
import race8 from '@/public/images/racing/8.jpg'
import race9 from '@/public/images/racing/9.jpg'
import CustomFooter from '@/components/CustomFooter'


const futuraMedium = localFont({ src: '../../public/fonts/Futura/Futura-Medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const images = [
    race1, race2, race3, race4, race5, race6, race7, race8, race9
]

const infoCards = [
    {
        title : "Vehicles",
        points : [
            "Vehicle hire",
            "Taking charge of your vehicle",
            "Vehicle preparation",
            "Possibility of decorating the vehicle (sponsors)"
        ],
        color : "2341FF"
    },
    {
        title : "Preparation",
        points : [
            "We offer you the best possible preparation!",
            "Driving Sessions on the circuit (Mainly the Circuit du Var)",
            "Full support from professional coaches, mechanics and engineers",
        ],
        color : "002654"
    },
    {
        title : "Competition",
        points : [
            "Transport to and from the vehicle(s)",
            "Presence of coaches, mechanics and engineers",
            "Registration and administrative support",
        ],
        color : "1B2C99"
    },
    
]

const page = () => {
  return (
    <div className="flex flex-col">
    <NavBar homePage={false}/>
    <div className=" items-center justify-center px-10">
        <HeroTemplate image={img.src} title="Racing Team" subtitle=""/>
        <div className='flex flex-col items-center gap-3 py-10 px-10'>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>Participate in a Race or Championship with AGS</h1>
                <div className='bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4'></div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
                With our recognised experience and expertise, we offer you the opportunity to take part in some of the most prestigious championships and motor races.<br/>
                We are with you every step of the way, from the initial preparation to the finish line, making sure you have the best possible conditions to achieve your goals. Together, we make every race an unforgettable experience, where performance, passion and excellence meet.<br/>
                </p>
                <a href="">
                    <button className={`bg-[#2341FF] px-3 py-2 text-white ${inter.className} tracking-tighter font-medium rounded-lg`}>
                        Contact Us &rarr;
                    </button>
                </a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 tracking-tighter'>
            {infoCards.map((infoCard) => {
                return(
                    <div className={`bg-[#${infoCard.color}] py-10 px-10 flex flex-col gap-10`} key={infoCard.title}>
                        <h3 className={`${futuraMedium.className} text-3xl text-center text-white`}>{infoCard.title}</h3>
                        <div>
                        {infoCard.points.map((point) => {
                            return(
                                <p className={`text-white ${inter.className}`} key={point}>• {point}</p>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="grid grid-cols-2 items-center gap-5 md:gap-20 py-10">
            {images.map((image, index) => {
                return(
                    <img src={image.src} alt="Hello" key={image.src} className={`w-full h-full ${index==images.length - 1 ? 'col-span-2' : 'col-span-1'}`}/>
                )
            })}
        </div>
    </div>
    <CustomFooter/>
    </div>
  )
}

export default page