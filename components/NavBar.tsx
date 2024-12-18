import Image from "next/image";
import logo from '@/images/AGSWhiteLogo.png'; // White logo for the homepage
import logoDark from '@/images/AGSBlueLogo.png'; // Dark logo for non-homepages
import Link from "next/link";
import { Inter } from "next/font/google";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

interface NavBarProps {
  homePage: boolean; // New prop to conditionally apply text color
}

const NavBar: React.FC<NavBarProps> = ({ homePage }) => {
  return (
    <div className="flex justify-center md:justify-between px-10 py-10">
      {/* Conditionally render the logo based on homePage */}
      <Link href="/">
      <Image 
        src={homePage ? logo : logoDark} 
        alt="Logo" 
        height={60} 
      />
      </Link>
      
      <div className="hidden md:flex gap-5 items-center">
        <Link href="" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Driving Experiences
        </Link>
        <Link href="" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Corporate Events
        </Link>
        <Link href="" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Driver Academy
        </Link>
        <Link href="" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Racing
        </Link>
        <Link href="/events" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Events
        </Link>
        <Link href="" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          About Us
        </Link>
        <Link href="" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Shop
        </Link>
        <Link href="" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Contact
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
}

export default NavBar;
