import React from 'react'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google';

const futuraLight = localFont({ src: '../../public/fonts/Futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/Futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/Expansiva/expansiva-bold.otf', weight: '700' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const SectionOne = () => {
  return (
    <div className='flex flex-col items-center py-10 px-10 gap-8'>
        <div className='flex flex-col items-center gap-3'>
            <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>We make you live the ultimate motorsport experience</h1>
            <div className='bg-gradient-to-r from-transparent via-[#ED2939] to-transparent h-1 w-1/2'></div>
        </div>
        <p className={`text-center ${inter.className} md:text-lg tracking-tighter`}>Do you dream of driving a real Formula 1 car? Would you like to experience the thrills of a single-
                seater in a Formula 4 or 3.5 car? Don't wait any longer!<br/>
                With over 25 years&apos; experience in Formula 1 driving courses, as well as 7 years&apos; participation in
                the Formula 1 World Championship from 1986 to 1992, AGS is your ideal partner!
        </p>
    </div>
  )
}

export default SectionOne