'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/AGSWhiteLogo.png";
import logoDark from "@/images/AGSBlueLogo.png";
import Link from "next/link";
import { Inter } from "next/font/google";
import { initFirebase } from "@/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { User } from "firebase/auth";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

interface NavBarProps {
  homePage: boolean;
}

const menuItems = [
  { name: "Driving Experiences", link: "/driving-experiences" },
  { name: "Events", link: "/events" },
  { name: "Racing", link: "/racing" },
  { name: "Driver Academy", link: "/academy" },
  { name: "About Us", link: "/facilities" },
  { name: "Shop", link: "/shop" },
  { name: "Contact Us", link: "/contact" },
];

const NavBar: React.FC<NavBarProps> = ({ homePage }) => {
  const [user, setUser] = useState<User | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setDropdownVisible(false);
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  return (
    <Navbar className="px-10 py-10" onMenuOpenChange={(open) => console.log("Menu open state:", open)}>
      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden flex justify-between items-center">
        <NavbarMenuToggle
          aria-label="Toggle menu"
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image src={homePage ? logo : logoDark} alt="Logo" height={60} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop links */}
      <NavbarContent className="hidden sm:flex gap-4">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.link}
              className={`text-${homePage ? "white" : "black"} ${
                inter.className
              } tracking-tighter`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        {/* Auth Buttons */}
        <NavbarItem>
          {user ? (
            <div className="relative">
              <Button
                variant="flat"
                onClick={toggleDropdown}
                className="text-black bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300"
              >
                {user.displayName || "User"}
              </Button>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 bg-red-600 shadow-lg rounded-lg">
                  <Button
                    onClick={handleSignOut}
                    className="block w-full text-left text-white hover:text-red-800"
                  >
                    Sign Out
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="flat"
              onClick={signIn}
              className="text-black bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300"
            >
              Sign In
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link className="w-full" href={item.link}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;




   // <div className="flex justify-center md:justify-between px-10 py-10">
    //   {/* Conditionally render the logo based on homePage */}
    //   <Link href="/">
    //     <Image
    //       src={homePage ? logo : logoDark}
    //       alt="Logo"
    //       height={60}
    //     />
    //   </Link>

    //   <div className="hidden md:flex gap-5 items-center">
    //     <Link href="/driving-experiences" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
    //       Driving Experiences
    //     </Link>
    //     <Link href="/events" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
    //       Corporate Events
    //     </Link>
    //     <Link href="/academy" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
    //       Driver Academy
    //     </Link>
    //     <Link href="/racing" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
    //       Racing
    //     </Link>
    //     <Link href="/facilities" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
    //       About Us
    //     </Link>
    //     <Link href="/shop" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
    //       Shop
    //     </Link>
    //     <Link href="/contact" className={`text-${homePage ? "white" : "black"} ${inter.className} tracking-tighter`}>
    //       Contact
    //     </Link>

    //     {user ? (
    //       <div className="relative">
    //         <button
    //           onClick={toggleDropdown}
    //           className="text-black bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300"
    //         >
    //           {user.displayName || "User"}
    //         </button>
    //         {dropdownVisible && (
    //           <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-3">
    //             <button
    //               onClick={handleSignOut}
    //               className="block w-full text-left text-red-600 hover:text-red-800"
    //             >
    //               Sign Out
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     ) : (
    //       <button
    //         onClick={signIn}
    //         className="text-black bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300"
    //       >
    //         Sign In
    //       </button>
    //     )}
    //   </div>
    // </div>
