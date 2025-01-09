'use client'
import Image from "next/image";
import logo from '@/images/AGSWhiteLogo.png'; // White logo for the homepage
import logoDark from '@/images/AGSBlueLogo.png'; // Dark logo for non-homepages
import Link from "next/link";
import { Inter } from "next/font/google";
import { initFirebase } from "@/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from "react";
import { User } from "firebase/auth";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

interface NavBarProps {
  homePage: boolean; // New prop to conditionally apply text color
}

const NavBar: React.FC<NavBarProps> = ({ homePage }) => {
  const [user, setUser] = useState<User | null>(null); // Specify the type correctly
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to toggle dropdown visibility

  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        setUser(user); // Update the user state
        setDropdownVisible(false); // Hide the dropdown on sign in
      }
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user state on sign out
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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
        <Link href="/driving-experiences" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Driving Experiences
        </Link>
        <Link href="/events" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Corporate Events
        </Link>
        <Link href="/academy" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Driver Academy
        </Link>
        <Link href="/racing" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Racing
        </Link>
        <Link href="/facilities" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          About Us
        </Link>
        <Link href="/shop" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Shop
        </Link>
        <Link href="/contact" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
          Contact
        </Link>
        
        {user ? (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300"
            >
              {user.displayName || "User"}
            </button>
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-3">
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left text-red-600 hover:text-red-800"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={signIn}
            className="text-black bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
