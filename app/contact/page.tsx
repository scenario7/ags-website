"use client";
import HeroTemplate from "@/components/HeroTemplate";
import React, { useState } from "react";
import img26 from "@/public/images/26.jpg";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import CustomFooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";



const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const futuraCondensed = localFont({
  src: "../../public/fonts/futura/futura-condensed.ttf",
});

const Page = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    request: "",
    town: "",
    country: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      request: "",
      town: "",
      country: "",
      message: "",
    });
  };

  return (
    <div>
      <CustomNavbar isHomePage={false} />
      <div className="">
        <div className="px-3 md:px-10">
        <HeroTemplate
          image={img26.src}
          subtitle="GET IN TOUCH"
          title="Contact Us"
        />
        </div>
        <div className="px-3 md:px-10 flex bg-[#0B1237] flex-col md:flex-row gap-10 items-center py-10 justify-evenly mt-10">
          <form
            onSubmit={handleSubmit}
            className=" shadow-lg rounded-lg p-6 w-full max-w-lg"
          >
            <h2
              className={`${futuraCondensed.className} text-white text-5xl uppercase tracking-tighter pb-5`}
            >
              Get in Touch
            </h2>
            {submitted && (
              <p className="text-green-600 mb-4">
                Thank you for your message! We will get back to you soon.
              </p>
            )}
            <div className="mb-4 flex gap-4">
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={(e) => handleChange(e)}
                required
                className="mt-1 p-3 block w-full rounded-lg bg-white border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="First Name"
              />
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={(e) => handleChange(e)}
                required
                className="mt-1 block w-full rounded-lg bg-white p-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4 flex gap-4">
              <input
                type="text"
                id="town"
                name="town"
                value={formData.town}
                onChange={(e) => handleChange(e)}
                required
                className="mt-1 p-3 block w-full rounded-lg bg-white border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Town"
              />
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={(e) => handleChange(e)}
                required
                className="mt-1 block w-full rounded-lg bg-white p-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Country"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                required
                className="mt-1 block w-full rounded-lg bg-white p-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleChange(e)}
                required
                className="mt-1 block w-full rounded-lg bg-white p-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="request"
                name="request"
                value={formData.request}
                onChange={(e) => handleChange(e)}
                required
                className="mt-1 block w-full rounded-lg bg-white p-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Request"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
                required
                rows={4}
                className="mt-1 block w-full rounded-lg bg-white p-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2341FF] text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
          <div className="flex flex-col items-center text-center gap-10">
            <div className="flex flex-col gap-5">
              <h2
                className={`${futuraCondensed.className} text-white text-5xl uppercase tracking-tighter pb-5`}
              >
                Contact Information
              </h2>
              <p
                className={`${inter.className} flex flex-col tracking-tighter text-white`}
              >
                <a href="mailto:stage@agsracing.com">stage@agsracing.com</a>
                <a href="tel:+33(0)648686912">+33 (0) 6 48 68 69 12</a>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h2
                className={`${futuraCondensed.className} text-white text-5xl uppercase tracking-tighter pb-5`}
              >
                How to Find Us
              </h2>
              <div>
                <iframe
                  className="rounded-xl shadow-lg"
                  width="100%"
                  height="300"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=AGS%20Formule%201+(AGS%20Formule%201)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps tracker sport</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
