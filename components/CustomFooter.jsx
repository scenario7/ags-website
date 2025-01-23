import logoBlue from '@/images/AGSBlueLogo.png'
import localFont from "next/font/local";
import { Inter } from "next/font/google"
import { FaTiktok, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})
const futuraLight = localFont({ src: '../public/fonts/futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../public/fonts/futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });

const CustomFooter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between px-10 py-16 text-[#0B1237]">
      {/* Left Section */}
      <div className="hidden md:flex flex-col items-center gap-2">
        <p className={`text-left ${futuraMedium.className} tracking-tighter`}>
          Opening Hours:<br />8:30A.M. to 6:00P.M.<br />(Excluding Event Days)
        </p>
        <div className={`${futuraMedium.className} tracking-tighter flex gap-3`}>
          <svg
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            ></path>
          </svg>
          <a href="tel:+330648686912">+33 (0) 6 48 6869 12</a>
        </div>
        <div className={`${futuraMedium.className} tracking-tighter flex gap-3`}>
          <svg
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            ></path>
          </svg>
          <a href="mailto:stage@agsracing.com">stage@agsracing.com</a>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center gap-3 text-[#0B1237] text-center">
        <img src={logoBlue.src} alt="" className="h-20" />
        <p className={`${futuraMedium.className} tracking-tighter text-center`}>
          ZA Circuit du Var<br />83590 GONFARON - FRANCE
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-col text-right tracking-tighter gap-2">
        <p className={`${futuraMedium.className}`}>Follow Us</p>
        <div className="flex gap-2">
          <Link href='https://www.tiktok.com/@agsformule1?is_from_webapp=1&sender_device=pc'><FaTiktok className="h-8 w-8 text-[#0B1237]" /></Link>
          <Link href='https://www.instagram.com/agsformule1/'><FaInstagram className="h-8 w-8 text-[#0B1237]" /></Link>
          <Link href='https://www.facebook.com/agsformule1?locale=fr_FR'><FaFacebook className="h-8 w-8 text-[#0B1237]" /></Link>
          <Link href='https://www.linkedin.com/company/ags-formule-1-racing-events/'><FaLinkedin className="h-8 w-8 text-[#0B1237]" /></Link>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;
