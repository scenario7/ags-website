import localFont from 'next/font/local';
import NavBar from '../NavBar';
import img from '@/public/images/10.jpg'

const futuraLight = localFont({ src: '../../public/fonts/Futura/Futura-Std-Light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/Futura/Futura-Medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/Expansiva/Expansiva-Bold.otf', weight: '700' });

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      {/* <video
        src={require('@/public/video1.mp4')}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      /> */}

      <img src={img.src} alt="" className="absolute top-0 left-0 w-full h-full object-cover"/>


      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10101080] via-[#10101030] to-[#10101080] opacity-100"></div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col">
        {/* Navbar at the top */}
        <NavBar className="z-10" homePage={true}/>

        {/* Centered Content */}
        <div className="flex flex-grow items-center justify-center">
          <div className="flex flex-col gap-5 md:gap-10 items-center justify-center text-center z-10">
            <h1
              className={`text-4xl md:text-6xl text-white font-bold ${futuraLight.className}`}
            >
              Control the Speed. <br /> Feel the Adrenaline.
            </h1>
            <h2 className={`${expansiva.className} text-xs md:text-md text-white tracking-widest`}>
              SINGLE-SEATER DRIVING EXPERIENCES
            </h2>
            <a href="#">
              <button
                className={`${futuraMedium.className} bg-gradient-to-tr from-[#1B2C99] to-[#0B1237] text-white px-3 py-2`}
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
