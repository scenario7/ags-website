"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/AGSBlueLogo.png";
import logoDark from '@/images/AGSWhiteLogo.png'
import { initFirebase } from "@/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import localFont from "next/font/local";

const menuItems = [
  { name: "Driving Experiences", link: "/driving-experiences" },
  { name: "Events", link: "/events" },
  { name: "Corporate Events", link: "/corporate-events" },
  { name: "Racing", link: "/racing" },
  { name: "Driver Academy", link: "/academy" },
  { name: "About Us", link: "/facilities" },
  { name: "News", link: "/news" },
  { name: "Shop", link: "/shop" },
  { name: "Contact Us", link: "/contact" },
];
const futuraMedium = localFont({ src: '../public/fonts/futura/futura-medium.ttf' });


interface CustomNavbarProps {
  isHomePage: boolean;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({ isHomePage }) => {
  const [user, setUser] = useState<User | null>(null);

  // Initialize Firebase Auth
  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Sign-in function
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  // Sign-out function
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="navbar py-10 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isHomePage ? "white" : "currentColor"} // Change color dynamically
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-20 mt-3 w-52 p-2"
          >
            {(menuItems || []).map((item) => (
              <Link key={item.name} href={item.link} className="text-md px-2 py-2 hover:bg-gray-200 rounded-box">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <Image src={isHomePage ? logoDark : logo} alt="Logo" height={60} />
        </Link>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-5 md:w-10 rounded-full bg-white p-3">
                <img
                  src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png"
                  alt="User Avatar"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content gap-3 bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/my-bookings" className="text-black">
                  My Bookings
                </a>
              </li>
              <li>
                <button onClick={handleSignOut} className="text-red-600">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className={`btn btn-sm px-4 py-2 text-white rounded-md ${futuraMedium.className}`}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomNavbar;

