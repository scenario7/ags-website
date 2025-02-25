import localFont from "next/font/local";
import { Inter } from "next/font/google"
import partner1 from '@/public/images/partner-logo-1.png'

const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})
const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });
const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});

const SectionSix = () => {
  return (
    <div className="flex w-full justify-between items-center gap-10 py-20 px-10 bg-[#052756]">
        <div className='flex items-center gap-3'>
            <h1 className={`${futuraCondensed.className} uppercase font-bold text-5xl md:text-8xl md:text-left text-center bg-gradient-to-r bg-clip-text text-transparent from-[#ffffff] to-[#ffffff40]`}>Partners</h1>
        </div>
        <div className="relative">
        <img
            src={partner1.src}
            alt=""
            className="relative h-14"
        />
        <div className="absolute inset-0"></div>
        </div>
    </div>
  )
}

export default SectionSix