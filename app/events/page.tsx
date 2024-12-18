import HeroTemplate from "@/components/HeroTemplate"
import NavBar from "@/components/NavBar"
import img from '@/public/images/14.jpg'
import localFont from 'next/font/local';
import { Inter } from "next/font/google";
import img2 from '@/public/images/15.jpg'
import corp1 from '@/public/images/corporate/1.jpg'
import corp2 from '@/public/images/corporate/2.jpg'
import corp3 from '@/public/images/corporate/3.jpg'
import corp4 from '@/public/images/corporate/4.jpg'
import corp5 from '@/public/images/corporate/5.jpg'
import corp6 from '@/public/images/corporate/6.jpg'
import corp7 from '@/public/images/corporate/7.jpg'
import CustomFooter from "@/components/CustomFooter";

const futuraMedium = localFont({ src: '../../public/fonts/Futura/Futura-Medium.ttf' });
const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const images = [
    corp1, corp2, corp3, corp4, corp5, corp6, corp7
]


const page = () => {
  return (
    <div className="flex flex-col">
        <NavBar homePage={false}/>
        <div className=" items-center justify-center px-10">
            <HeroTemplate image={img.src} title="Events & Companies" subtitle="OUR SOLUTIONS FOR PROFESSIONALS"/>
            <div className='flex flex-col items-center gap-3 py-10 px-10'>
                <h1 className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}>Excellence on Track</h1>
                <div className='bg-gradient-to-r from-transparent via-[#ED2939] to-transparent h-1 w-1/4'></div>
                <p className={`${inter.className} tracking-tighter text-center md:text-md text-sm`}>
                Offer your staff or clients an unforgettable driving experience, perfectly tailored to their wishes and needs. We&apos;ll take care of the entire organisation of your corporate event, guaranteeing you a tailor-made experience.<br/>
                Take advantage of our top-of-the-range facilities: changing rooms, showers, briefing rooms, professional simulator, reception room, visit to the workshop, as well as exclusive privatisation of the circuit with direct access to the track and even the possibility of arriving by helicopter.<br/>
                If you wish, we can also take care of booking transport, accommodation, catering and many other logistical aspects to facilitate your event. Choose from our various driving packages: Formula 4, Formula 1, WSR 3.5, or let yourself be tempted by a first drive in an Oreca FLM09. You can also bring your own car. We provide full FIA-standard equipment (overalls, gloves, helmet, HANS, shoes, balaclava, socks) to ensure the safety and comfort of every participant.<br/>
                You will be supervised by our mechanics and engineers, as well as by professional coaches who will give the briefings, observe the driving, and carry out a personalised debriefing, including an analysis of the videos and data.<br/>
                Finally, you can display your POS material on site for an event that reflects your image.<br/>
                </p>
            </div>
            <div
            style={{
                backgroundImage: `
                linear-gradient(to right, rgba(246, 249, 255, 0.7), rgba(0, 0, 0, 0)), 
                url('${img2.src}')
                `,
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image
            }}
            className="rounded-lg"
            >
            {/* Optional: Content over the background */}
            <div className={`bg-[#1B2C9930] rounded-lg px-5 py-5 flex justify-between ${futuraMedium.className} tracking-tight`}>
                <a>
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