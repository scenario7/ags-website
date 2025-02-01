import localFont from "next/font/local";
import { Inter } from "next/font/google"
import partner1 from '@/public/images/partner-logo-1.png'

const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})
const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });

const SectionSix = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
        <div className='flex flex-col items-center gap-3'>
            <h1 className={`${futuraMedium.className} tracking-tighter text-2xl md:text-3xl`}>Our Partners</h1>
            <div className="bg-gradient-to-r to-transparent from-transparent via-[#ED2939] h-1 w-56"></div>
        </div>
        <div className="relative">
        <img
            src={partner1.src}
            alt=""
            className="relative h-14"
        />
        <div className="absolute inset-0 bg-[#060D30] mix-blend-lighten"></div>
        </div>
    </div>
  )
}

export default SectionSix