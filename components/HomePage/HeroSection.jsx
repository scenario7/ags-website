import localFont from 'next/font/local';
import NavBar from '../NavBar';
import img from '@/public/images/10.jpg'
import CustomNavbar from '../CustomNavbar';
import { useTranslations } from 'next-intl';
const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });
import TypeAnimation from 'react-type-animation'


const HeroSection = () => {

  const t = useTranslations("HeroSection");

  return (
    <div className="relative w-full h-[75vh]"> {/* Adjusted height to 3/4th of the viewport */}
      {/* Background Video */}
      <video
        src='https://res.cloudinary.com/dp79lqyv8/video/upload/v1738409169/edited_c0lyp2.mp4'
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10101080] via-[#10101030] to-[#10101080] opacity-100"></div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col">
        {/* Navbar at the top */}
        <CustomNavbar isHomePage={true} />

        {/* Centered Content */}
        <div className="flex flex-grow items-center justify-center">
          <div className="flex flex-col gap-5 md:gap-10 items-center justify-center text-center z-10">
            <h1
              className={`text-4xl md:text-6xl text-white font-bold ${futuraLight.className} capitalize`}
            >
              {t("title1")} <br /> {t("title2")}
            </h1>
            <h2 className={`${expansiva.className} text-xs md:text-md text-white tracking-widest uppercase`}>
              {t("subtitle")}
            </h2>
            <a href="/driving-experiences">
              <button
                className={`${futuraMedium.className} bg-[#446890] hover:bg-[#060D30] transition-colors text-lg text-white px-3 py-2`}
              >
                BOOK NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;