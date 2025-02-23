import React from 'react'
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import ActivityCard from '@/components/HomePage/ActivityCard'
import img1 from '@/public/images/1.jpg'
import img14 from '@/public/images/14.jpg'
import img15 from '@/public/images/15.jpg'
import { useTranslations } from 'next-intl';

const futuraCondensed = localFont({ src: '../../public/fonts/futura/futura-condensed.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });
const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const SectionTwo = () => {


  const t = useTranslations("SectionTwo")

  return (
    <div className="flex flex-col px-10 gap-10 py-20 w-full bg-[#052756]">
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start gap-5 text-center">
        <h2 className={`${futuraCondensed.className} uppercase font-bold text-2xl md:text-8xl md:text-left text-center bg-gradient-to-r bg-clip-text text-transparent from-[#ffffff] to-[#ffffff40]`}>{t("h1")}</h2>
      </div>

      {/* Grid Section */}
      <div className='flex flex-col items-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8 place-items-center">
        <ActivityCard
          image={img1.src}
          link="/driving-experiences"
          title="Driving Experiences"
        />
        <ActivityCard
          image={img14.src}
          link="/corporate-events"
          title="Events & Companies"
        />
        <ActivityCard
          image={img15.src}
          link="/academy"
          title="Driver Academy"
        />
      </div>
      </div>
    </div>
  );
};

export default SectionTwo;
