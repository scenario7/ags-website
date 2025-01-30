import React from 'react'
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import ActivityCard from '@/components/HomePage/ActivityCard'
import img1 from '@/public/images/1.jpg'
import img14 from '@/public/images/14.jpg'
import img15 from '@/public/images/15.jpg'
import { useTranslations } from 'next-intl';

const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });
const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const SectionTwo = () => {


  const t = useTranslations("SectionTwo")

  return (
    <div className="flex flex-col px-10 py-10 w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start gap-5 text-center">
        <h2 className={`${futuraMedium.className} tracking-tighter text-2xl md:text-3xl md:text-left text-center`}>{t("h1")}</h2>
        <div className="bg-gradient-to-r to-transparent from-transparent via-[#ED2939] md:from-[#ED2939] h-1 w-36"></div>
        <p
          className={`text-center md:text-left ${inter.className} text-lg tracking-tighter`}
        >
          {t("p1")}
        </p>
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
