import CustomNavbar from '@/components/CustomNavbar'
import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'
import img1 from '@/public/images/13.jpg'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import CustomFooter from '@/components/CustomFooter'


const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})


const articles = [
  {
    image : img1.src,
    title : "Driver Training Program Launch",
    date : '23rd January, 2025',
    tag : 'an',
    description : 'The new initiative will feature a curriculum focusing on high-performance driving, vehicle dynamics, and racecraft, utilizing AGS’s fleet of ex-Formula 1 and GT cars. Participants will train under the guidance of veteran race engineers and professional drivers, ensuring an authentic motorsport experience.',
  },
  {
    image : img1.src,
    title : "Driver Training Program Launch",
    date : '23rd January, 2025',
    tag : 'an',
    description : 'The new initiative will feature a curriculum focusing on high-performance driving, vehicle dynamics, and racecraft, utilizing AGS’s fleet of ex-Formula 1 and GT cars. Participants will train under the guidance of veteran race engineers and professional drivers, ensuring an authentic motorsport experience.',
  },
  {
    image : img1.src,
    title : "Driver Training Program Launch",
    date : '23rd January, 2025',
    tag : 'an',
    description : 'The new initiative will feature a curriculum focusing on high-performance driving, vehicle dynamics, and racecraft, utilizing AGS’s fleet of ex-Formula 1 and GT cars. Participants will train under the guidance of veteran race engineers and professional drivers, ensuring an authentic motorsport experience.',
  },
  {
    image : img1.src,
    title : "Driver Training Program Launch",
    date : '23rd January, 2025',
    tag : 'an',
    description : 'The new initiative will feature a curriculum focusing on high-performance driving, vehicle dynamics, and racecraft, utilizing AGS’s fleet of ex-Formula 1 and GT cars. Participants will train under the guidance of veteran race engineers and professional drivers, ensuring an authentic motorsport experience.',
  },
  {
    image : img1.src,
    title : "Driver Training Program Launch",
    date : '23rd January, 2025',
    tag : 'an',
    description : 'The new initiative will feature a curriculum focusing on high-performance driving, vehicle dynamics, and racecraft, utilizing AGS’s fleet of ex-Formula 1 and GT cars. Participants will train under the guidance of veteran race engineers and professional drivers, ensuring an authentic motorsport experience.',
  },
]

const page = () => {
  return (
    <div>
        <CustomNavbar isHomePage={false}/>
        <div className='px-3 md:px-10'>
            <HeroTemplate title='News' subtitle='' image={img1.src}/>
            <div className='flex flex-col items-start py-10'>
                <div className='flex items-center gap-3'>
                <div className='bg-[#ED2939] w-3 h-3 rounded-full shadow-lg shadow-[#ED2939] animate-blink'></div>
                <h1 className={`${futuraMedium.className} underline text-3xl`}>NEWS</h1>
                </div>
            </div>  
            <div className='flex flex-col md:flex-row gap-10 items-center py-5'>
                <img src={articles[0].image} alt="" className='h-96 w-96 object-cover'/>
                <div className='flex flex-col items-start gap-5 px-3 '>
                    <p className={`${inter.className} text-white uppercase ${articles[0].tag === 'an' ? 'bg-[#ED2939]' : 'bg-gray-50'} px-3 py-1`}>ANNOUNCEMENTS</p>
                    <h2 className={`${inter.className} tracking-tighter text-gray-400`}>{articles[0].date}</h2>
                    <h2 className={`${futuraMedium.className} text-4xl tracking-tighter`}>{articles[0].title}</h2>
                    <p className={`${inter.className} tracking-tighter w-3/4`}>{articles[0].description}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                {articles.map((article) => {
                    return(
                        <div className='flex md:flex-row flex-col items-center gap-5' key={article.title}>
                            <img src={article.image} alt="" className='h-72 w-72 object-cover'/>
                            <div className='flex flex-col items-start gap-5 px-3'>
                            <h2 className={`${futuraMedium.className} text-2xl tracking-tighter`}>{articles[0].title}</h2>
                            <p className={`${inter.className} tracking-tighter`}>{articles[0].description}</p>
                            </div>
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