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
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionSeven/>
      <SectionSix/>
      <SectionEight/>
      <CustomFooter/>
    </div>
  );
}
