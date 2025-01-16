import React from 'react'
import img17 from '@/public/images/17.jpg'
import HeroTemplate from '@/components/HeroTemplate'
import localFont from 'next/font/local';

const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });


const Page = () => {
  return (
    <div className='flex flex-col px-3 md:px-10'>
        <HeroTemplate image={img17.src} title='Our History' subtitle=''/>
        <div className='flex flex-col items-center'>
        <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>Trackside Excellence</h1>
        <div className='bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4'></div>
        </div>
    </div>
  )
}

export default Page