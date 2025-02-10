import HeroSection from '@/components/HomePage/HeroSection'
import SectionOne from '@/components/HomePage/SectionOne'
import SectionTwo from '@/components/HomePage/SectionTwo'
import SectionThree from '@/components/HomePage/SectionThree'
import SectionFour from '@/components/HomePage/SectionFour'
import SectionSix from '@/components/HomePage/SectionSix'
import CustomFooter from '@/components/CustomFooter'
import SectionSeven from '@/components/HomePage/SectionSeven'
import SectionEight from '@/components/HomePage/SectionEight'


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <SectionOne/>
      <div className='divider py-10 px-36'></div>
      <SectionTwo/>
      <div className='divider py-10 px-36'></div>
      <SectionThree/>
      <div className='divider py-10 px-36'></div>
      <SectionFour/>
      <div className='divider py-10 px-36'></div>
      <SectionSeven/>
      <div className='divider py-10 px-36'></div>
      <SectionSix/>
      <SectionEight/>
      <CustomFooter/>
    </div>
  );
}
