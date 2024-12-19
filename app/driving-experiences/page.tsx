import React from 'react'
import NavBar from '@/components/NavBar'
import HeroTemplate from '@/components/HeroTemplate'
import img1 from '@/public/images/1.jpg'
import img2 from '@/public/images/2.jpg'
import img3 from '@/public/images/3.jpg'
import img4 from '@/public/images/4.jpg'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import CustomFooter from '@/components/CustomFooter'
import ActivityCard from '@/components/HomePage/ActivityCard'



const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

import packageHeader1 from '@/public/images/5.jpg'; // Example header images
import packageHeader2 from '@/public/images/6.jpg';
import packageHeader3 from '@/public/images/7.jpg';

const experiences = [
  {
    name: "F4",
    link: "/driving-experiences/f4",
    experienceID : 'f4',
    image: img2,
    description: {
      text: "The F4 experience offers an exciting taste of high-speed racing. Feel the thrill as you take control of the wheel in one of the most sought-after racing cars.",
      points: [
        { heading: "Training", subtitle: "Initial coaching to get you race-ready." },
        { heading: "Racing", subtitle: "Experience the track and feel the adrenaline." },
        { heading: "Precision", subtitle: "Perfect your technique with each lap." }
      ]
    },
    packages: [
      {
        name: "Discover",
        headerImage: packageHeader1,
        price: 299,
        laps: [
          { quantity: "3x8", car: "F3" },
          { quantity: "2x8", car: "F4" }
        ],
        addons: [
          {
            title: "Video Recording",
            description: "Get a high-quality recording of your experience.",
            price: 50
          },
          {
            title: "Coaching Session",
            description: "A 30-minute one-on-one coaching session before the race.",
            price: 100
          }
        ]
      },
      {
        name: "Intermediary",
        headerImage: packageHeader2,
        price: 499,
        laps: [
          { quantity: "5x8", car: "F3" },
          { quantity: "4x8", car: "F4" }
        ],
        addons: [
          {
            title: "In-Car Footage",
            description: "Get footage from inside the car, showcasing your skills.",
            price: 75
          },
          {
            title: "Advanced Coaching",
            description: "A 60-minute advanced coaching session with a professional racer.",
            price: 150
          }
        ]
      },
      {
        name: "Race",
        headerImage: packageHeader3,
        price: 799,
        laps: [
          { quantity: "7x8", car: "F3" },
          { quantity: "5x8", car: "F4" }
        ],
        addons: [
          {
            title: "Full Race Package",
            description: "Experience a full race event with a team of professionals.",
            price: 200
          },
          {
            title: "VIP Access",
            description: "Enjoy VIP access to the pits and meet with professional drivers.",
            price: 300
          }
        ]
      }
    ]
  },
  {
    name: "F3.5",
    link: "/driving-experiences/f35",
    experienceID : 'f35',
    image: img3,
    description: {
      text: "The F3.5 experience lets you race a powerful open-wheel car, offering incredible performance and handling.",
      points: [
        { heading: "Preparation", subtitle: "Intensive training for performance driving." },
        { heading: "Race Setup", subtitle: "Tuning and setup of the car for optimal performance." },
        { heading: "Track Control", subtitle: "Master the track with precision driving." }
      ]
    },
    packages: [
      {
        name: "Discover",
        headerImage: packageHeader1,
        price: 350,
        laps: [
          { quantity: "3x8", car: "F3.5" }
        ],
        addons: [
          {
            title: "GoPro Recording",
            description: "Record your entire experience from inside the car.",
            price: 60
          },
          {
            title: "Racing Suit",
            description: "Get a custom racing suit to wear during the experience.",
            price: 120
          }
        ]
      },
      {
        name: "Intermediary",
        headerImage: packageHeader2,
        price: 600,
        laps: [
          { quantity: "4x8", car: "F3.5" }
        ],
        addons: [
          {
            title: "Track Day Photo Package",
            description: "Professional photos taken during your track session.",
            price: 80
          },
          {
            title: "Pit Access",
            description: "Get an exclusive tour of the pits and meet the crew.",
            price: 150
          }
        ]
      },
      {
        name: "Race",
        headerImage: packageHeader3,
        price: 1000,
        laps: [
          { quantity: "6x8", car: "F3.5" }
        ],
        addons: [
          {
            title: "Lap Timing",
            description: "Get precise lap timing data for your performance.",
            price: 40
          },
          {
            title: "Driver's Coaching",
            description: "Personalized coaching with a professional driver.",
            price: 250
          }
        ]
      }
    ]
  },
  {
    name: "F1",
    link: "/driving-experiences/f1",
    experienceID : 'f1',
    image: img4,
    description: {
      text: "The ultimate F1 experience, driving one of the most iconic cars on the planet at incredible speeds.",
      points: [
        { heading: "Performance", subtitle: "Experience the power of an F1 car." },
        { heading: "Strategy", subtitle: "Learn race strategy from the pros." },
        { heading: "Elite Track", subtitle: "Race on the most prestigious circuits." }
      ]
    },
    packages: [
      {
        name: "Discover",
        headerImage: packageHeader1,
        price: 500,
        laps: [
          { quantity: "2x8", car: "F1" }
        ],
        addons: [
          {
            title: "In-Car Video",
            description: "Get a professional video filmed from inside the car.",
            price: 80
          },
          {
            title: "Personal Coaching",
            description: "A 30-minute session with a coach before your session.",
            price: 100
          }
        ]
      },
      {
        name: "Intermediary",
        headerImage: packageHeader2,
        price: 900,
        laps: [
          { quantity: "4x8", car: "F1" }
        ],
        addons: [
          {
            title: "Performance Analysis",
            description: "A detailed analysis of your laps to help improve.",
            price: 150
          },
          {
            title: "Pit Lane Tour",
            description: "Get an exclusive tour of the pit lane and access to mechanics.",
            price: 200
          }
        ]
      },
      {
        name: "Race",
        headerImage: packageHeader3,
        price: 1500,
        laps: [
          { quantity: "6x8", car: "F1" }
        ],
        addons: [
          {
            title: "Lap Recording",
            description: "Get high-quality footage of your laps.",
            price: 120
          },
          {
            title: "VIP Trackside Experience",
            description: "Enjoy a VIP experience with trackside access.",
            price: 350
          }
        ]
      }
    ]
  }
];


const page = () => {
  return (
    <div className="flex flex-col">
        <NavBar homePage={false}/>
        <div className="flex flex-col items-center justify-center px-5 md:px-10">
            <HeroTemplate image={img1.src} title="Driving Experiences" subtitle="BE A RACING DRIVER DURING THE DAY"/>
            <div className='flex flex-col items-center gap-3 py-10 px-10'>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>Choose an Experience</h1>
                <div className='bg-gradient-to-r from-transparent via-[#ED2939] to-transparent h-1 w-1/4'></div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
                With over 25 years&apos; experience in Formula 1 driving courses, as well as 7 years&apos; participation in the Formula 1 World Championship from 1986 to 1992, AGS is the ideal partner for an unforgettable experience!<br/>
                From Formula 4 to Formula 1, come and discover how to drive a single-seater in complete safety. Briefings, provision of equipment, professional coaches... AGS takes care of everything!
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                {experiences.map((experience) => {
                    return(
                        <ActivityCard image={experience.image.src} title={`${experience.name} Experience`} link={experience.experienceID} key={experience.link}/>
                    )
                })}
            </div>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page