"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import HeroTemplate from "@/components/HeroTemplate";
import NavBar from "@/components/NavBar";
import CustomFooter from "@/components/CustomFooter";
import localFont from "next/font/local";
import { Checkbox } from "@/components/ui/checkbox";
import { auth, initFirebase } from "@/firebase";
import { getCheckoutUrl } from "./stripePayments";
import { useRouter } from "next/navigation";
import { experiences } from "@/experiences";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Calendar } from "@/components/ui/calendar";


const futuraMedium = localFont({
  src: "../../../../../public/fonts/futura/futura-medium.ttf",
});
const expansiva = localFont({
  src: "../../../../../public/fonts/expansiva/expansiva-bold.otf",
  weight: "700",
});


const Page = () => {
  const { packageID, experienceID } = useParams();
  const { toast } = useToast()
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  


  // Assuming `experiences` data is available (imported or declared above this component)
  const experience = experiences.find(
    (exp) => exp.experienceID === experienceID
  );
  const packageData = experience?.packages.find(
    (pkg) => pkg.name.toLowerCase() === (Array.isArray(packageID) ? packageID[0]?.toLowerCase() : packageID?.toLowerCase())
  );
  

  const [selectedAddons, setSelectedAddons] = useState<{ title: string; price: number; priceID: string }[]>([]);
  const basePrice = packageData?.price || 0;

  // Calculate total price dynamically
  const totalPrice = selectedAddons.reduce(
    (total, addon: { price: number }) => total + addon.price,
    basePrice
  );
  

  const handleAddonChange = (addon: { title: string; price: number; priceID: string }) => {
    setSelectedAddons((prevSelected: { title: string; price: number; priceID: string }[]) => {
      if (prevSelected.includes(addon)) {
        return prevSelected.filter((selected) => selected !== addon);
      } else {
        return [...prevSelected, addon];
      }
    });
  };
  

  const router = useRouter()

  const purchase = async () => {
    const app = initFirebase();
    const authUser = auth.currentUser; // Check the current user
    if (!authUser) {
      console.log("Not Authenticated");
      toast({
        title: "Authentication Required",
        description: "You need to log in to proceed with the purchase.",
        variant: "default",
      });
      return; // Exit the function if the user is not authenticated
    }
  
    const priceIds = [
      packageData?.priceID, 
      ...selectedAddons.map((addon) => addon.priceID)
    ].filter((id): id is string => id !== undefined);
  
    try {
      const checkoutUrl = await getCheckoutUrl(app, priceIds);
      router.push(checkoutUrl);
    } catch (error) {
      console.error("Error initiating checkout:", error);
      toast({
        title: "Error",
        description: "Failed to initiate the checkout. Please try again later.",
      });
    } finally {
    }
  };
  
  
  

  const title =
    experience && packageData
      ? `${experience.name} ${packageData.name} Checkout`
      : "Package Not Found";

  return (
    <div>
      <NavBar homePage={false} />
      <div className="px-10 flex flex-col items-center gap-10">
        <HeroTemplate
          image={packageData?.headerImage.src || ''}
          subtitle=""
          title={title}
        />
        <div className="w-full flex flex-col items-center gap-3">
          <h1
            className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}
          >
            Review Your Selection
          </h1>
          <div className="bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4"></div>
          <div className="flex justify-evenly items-center gap-20 w-full py-10">
            <div className="flex flex-col gap-3 justify-between">
              <img
                src={packageData?.headerImage.src}
                alt=""
                className="h-36 w-96 object-cover"
              />
              <img
                src={packageData?.headerImage.src}
                alt=""
                className="h-36 w-96 object-cover"
              />
              <img
                src={packageData?.headerImage.src}
                alt=""
                className="h-36 w-96 object-cover"
              />
              <img
                src={packageData?.headerImage.src}
                alt=""
                className="h-36 w-96 object-cover"
              />
            </div>
            <div>
              <h2 className={`${futuraMedium.className} text-2xl`}>ADD ONS</h2>
              {packageData?.addons.map((addon, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  {/* Custom Checkbox */}
                  <Checkbox
                    id={`addon-${index}`}
                    name={`addon-${addon.title}`}
                    value={addon.title}
                    className="peer rounded-none peer-checked:bg-red-200"
                    onCheckedChange={() => handleAddonChange(addon)}
                  />
                  <label
                    htmlFor={`addon-${index}`}
                    className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                  >
                    {/* Addon Title, Description, and Price */}
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col items-start text-left">
                      <h1 className={`${futuraMedium.className} text-lg`}>
                        {addon.title}
                      </h1>
                      <p className={`text-gray-500 ${futuraMedium.className}`}>
                        {addon.description}
                      </p>
                      </div>
                      <p
                        className={`text-gray-900 ${futuraMedium.className} text-lg font-bold`}
                      >{`€${addon.price}`}</p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <div>
              <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(day) => {
                    // Disable January 22nd, 2025
                    const disabledDate = new Date(2025, 0, 22); // January is month 0
                    return (
                      day.getDate() === disabledDate.getDate() &&
                      day.getMonth() === disabledDate.getMonth() &&
                      day.getFullYear() === disabledDate.getFullYear()
                    );
                  }}
                />
              </div>
          </div>
          <div className="bg-[#2341FF] flex items-center rounded-xl gap-3">
                <div className="bg-[#1B2C99] rounded-xl flex justify-between items-center px-5 gap-10">
                  <div className=" items-start flex flex-col">
                    <h2
                      className={`${futuraMedium.className} text-white text-center text-sm tracking-tighter`}
                    >
                      {experience?.name} Experience
                    </h2>
                    <h2
                      className={`${futuraMedium.className} text-white text-center text-2xl tracking-tighter`}
                    >
                      DISCOVER
                    </h2>
                  </div>
                  <h2
                    className={`${futuraMedium.className} text-white text-center py-5 text-2xl`}
                  >
                    €{totalPrice}
                  </h2>
                </div>
                <div className="flex items-center w-full px-2">
                <button onClick={purchase} className="flex items-center gap-2">
                <h2 className={`${futuraMedium.className} text-white`}>Checkout</h2>
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"></path>
                </svg>
                </button>
                </div>
              </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 py-10">
        <h1
          className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}
        >
          The Track
        </h1>
        <div className="bg-gradient-to-r from-transparent via-[#2341FF] to-transparent h-1 w-1/4"></div>
        <div className="flex py-10">
          <div className="flex flex-col items-center gap-5 w-1/2">
            <svg width="170" viewBox="0 0 284 303" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1325 298.412L176.479 298.412C188.009 297.794 201.187 286.639 206.334 281.139L262.7 220.809C269.392 215.825 282.158 201.937 279.687 186.262C276.599 166.667 266.818 163.316 261.928 160.738C257.038 158.159 236.962 158.675 228.726 159.449C222.137 160.067 213.455 159.191 209.938 158.675L158.462 159.449C154.773 159.363 147.447 157.334 147.652 149.909C147.858 142.484 154.258 139.081 157.433 138.308C163.352 137.964 176.685 137.276 182.656 137.276C188.009 134.182 184.886 129.971 182.656 128.253C176.393 125.932 161.808 120.724 153.572 118.456C145.336 116.187 140.532 109.432 139.159 106.338C128.435 83.3923 105.7 34.2006 100.552 21.0003C95.4048 7.80006 87.2545 4.49999 83.8228 4.49999C76.3588 4.84375 58.3424 5.73752 45.9883 6.56253C33.6342 7.38755 35.6932 22.2035 38.267 29.5083C39.3823 32.1725 42.488 40.6976 45.9883 53.4854C49.4886 66.2732 48.1331 75.1421 47.0178 77.9781C35.1785 137.362 10.2643 260.565 5.32268 278.303C0.38103 296.041 10.4702 299.1 16.1325 298.412Z" stroke="#2341FF" stroke-width="8"/>
            </svg>
            <h3 className={`${expansiva.className}`}>Circuit du Var</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <p className={`${futuraMedium.className}`}>The Circuit du Var used to be a test track for AGS Formula 1 cars. Today, it is mainly used for training courses and track days. A technical layout that combines fast corners and twisty sections.</p>
            <ul className={`${futuraMedium.className} list-disc`}>
            <li>Length - 2.2km</li>
            <li>Private Access from AGS</li>
            <li>AGS pit lane box</li>
            <li>Track rescue service</li>
            <li>Organiser&apos;s liability insurance</li>
            <li>Test day insurance</li>
            </ul>
          </div>
        </div>
      </div>
      <Toaster/>
      <CustomFooter />
    </div>
  );
};

export default Page;
