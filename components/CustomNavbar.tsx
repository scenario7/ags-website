"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/AGSBlueLogo.png";
import logoDark from "@/images/AGSWhiteLogo.png";
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
import { useRouter } from "next/navigation";
import { useTranslations } from "use-intl";
import { useMediaQuery } from "react-responsive";

const futuraMedium = localFont({
  src: "../public/fonts/futura/futura-medium.ttf",
});

interface CustomNavbarProps {
  isHomePage: boolean;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({ isHomePage }) => {
  const [user, setUser] = useState<User | null>(null);
  const [locale, setLocale] = useState<string>("");
  const router = useRouter();

  const t = useTranslations("NavBar");

  const menuItems = [
    { name: t("home"), link: "/" },
    { name: t("exp"), link: "/driving-experiences" },
    { name: t("corp"), link: "/corporate-events" },
    { name: t("acad"), link: "/academy" },
    { name: t("events"), link: "/events" },
    { name: t("history"), link: "/history" },
    { name: t("racing"), link: "/racing" },
    { name: t("about"), link: "/facilities" },
    { name: t("news"), link: "/news" },
    { name: t("contact"), link: "/contact" },
  ];

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

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  };

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const allDetails = document.querySelectorAll("details");

    const handleToggle = (event: Event) => {
      setTimeout(() => {
        allDetails.forEach((detail) => {
          if (detail !== event.target) {
            detail.removeAttribute("open");
          }
        });
      }, 10); // Small delay (~10ms) gives DOM time to apply the `open` state
    };

    allDetails.forEach((detail) => {
      detail.addEventListener("toggle", handleToggle);
    });

    return () => {
      allDetails.forEach((detail) => {
        detail.removeEventListener("toggle", handleToggle);
      });
    };
  }, []);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isSmallScreen ? (
        <div
          className={`navbar py-5 px-3 ${isHomePage ? "bg-gradient-to-b from-[#1c477390] to-transparent" : "bg-transparent"} bg-opacity-80`}
        >
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
                  <Link
                    key={item.name}
                    href={item.link}
                    className="text-md px-2 py-2 hover:bg-gray-200 rounded-box"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link href="/">
              <Image
                src={isHomePage ? logoDark : logo}
                alt="Logo"
                height={60}
              />
            </Link>
          </div>
          <div className="navbar-end">
            <div className="py-3 flex items-center gap-1 px-5">
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className=" m-1">
                  <svg
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke={isHomePage ? "white" : "black"}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    ></path>
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box z-[1] p-2 shadow bg-white"
                >
                  <li>
                    <button
                      onClick={() => changeLocale("en")}
                      className={`${locale === "en" ? "bg-blue-900 text-white" : "bg-white text-black"}`}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLocale("fr")}
                      className={`${locale === "fr" ? "bg-blue-900 text-white" : "bg-white text-black"}`}
                    >
                      French
                    </button>
                  </li>
                </ul>
              </div>
            </div>
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
                className="text-sm font-semibold tracking-tight sm:text-base bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`navbar px-10 py-10 z-10 ${isHomePage ? "bg-gradient-to-b from-[#1c477390] to-transparent" : "bg-transparent"} bg-opacity-80`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            </div>
            <Link href="/">
              <Image
                src={isHomePage ? logoDark : logo}
                alt="Logo"
                height={60}
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              className={`menu menu-horizontal px-1 ${isHomePage ? "text-white" : "text-black"}`}
            >
              <li>
                <Link href="/">{t("home")}</Link>
              </li>
              <li>
                <details>
                  <summary>Activities</summary>
                  <ul className="p-2 bg-white text-black z-20">
                    <li>
                      <Link href="/driving-experiences">{t("exp")}</Link>
                    </li>
                    <li>
                      <Link href="/corporate-events">{t("corp")}</Link>
                    </li>
                    <li>
                      <Link href="/academy">{t("acad")}</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="p-2 bg-white text-black z-20">
                    <li>
                      <Link href="/racing">{t("racing")}</Link>
                    </li>
                    <li>
                      <Link href="/workshop">Workshop</Link>
                    </li>
                    <li>
                      <Link href="/trading">Trading</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Events</summary>
                  <ul className="p-2 bg-white text-black z-20">
                    <li>
                      <a href="/events">France Historic GP</a>
                    </li>
                    <li>
                      <a href="https://im4cup.com/" target="_blank">
                        iM4
                      </a>
                    </li>
                    <li>
                      <a href="https://www.dukartalaf1.com/" target="_blank">
                        Du Kart à la F1
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>About us</summary>
                  <ul className="p-2 bg-white text-black z-20">
                    <li>
                      <Link href="/facilities">{t("about")}</Link>
                    </li>
                    <li>
                      <Link href="/history">{t("history")}</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/news">{t("news")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-5">
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className=" m-1">
                <svg
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke={isHomePage ? "white" : "black"}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  ></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-[1] p-2 shadow bg-white"
              >
                <li>
                  <button
                    onClick={() => changeLocale("en")}
                    className={`${locale === "en" ? "bg-blue-900 text-white" : "bg-white text-black"}`}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => changeLocale("fr")}
                    className={`${locale === "fr" ? "bg-blue-900 text-white" : "bg-white text-black"}`}
                  >
                    French
                  </button>
                </li>
              </ul>
            </div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-5 md:w-10 rounded-full bg-white p-3">
                    <img
                      src={
                        "https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png"
                      }
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
                className={`btn btn-sm px-4 py-2 bg-blue-900 text-white rounded-md ${futuraMedium.className}`}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomNavbar;
