import localFont from "next/font/local";
import { Inter } from "next/font/google"
import img0 from '@/public/images/0.JPG'

const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})
const futuraLight = localFont({ src: '../../public/fonts/Futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/Futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/Expansiva/expansiva-bold.otf', weight: '700' });

const SectionFour = () => {
  return (
    <div className="flex md:flex-row flex-col px-10 py-10 items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-2 text-center">
        <h2 className={`${futuraMedium.className} md:text-left text-center tracking-tighter text-2xl md:text-3xl`}>A History of Passion</h2>
        <div className="bg-gradient-to-r to-transparent from-transparent via-[#ED2939] md:from-[#ED2939] h-1 w-56"></div>
        <p
          className={`text-center md:text-md text-sm md:text-left ${inter.className} tracking-tight`}
        >
          Founded in 1969 by racing driver Henri Julien, Automobiles Gonfaronnaises Sportives (AGS) is a motor racing institution, having competed in the Formula 1 World Championship alongside the likes of Gabriele Tarquini, Yannick Dalmas and Philippe Streiff. <br/> Building on its heritage, AGS is now committed to supporting future drivers and sharing its passion with all those who dream of discovering motor racing.
        </p>
      </div>
      <div>
      <img 
        src={img0.src} 
        alt="" 
        className="h-80 w-full object-cover rounded-lg shadow-[-20px_20px_0_0_#1B2C99]"
        />


      </div>
    </div>
  )
}

export default SectionFour