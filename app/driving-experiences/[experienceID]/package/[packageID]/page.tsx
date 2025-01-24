"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import HeroTemplate from "@/components/HeroTemplate";
import CustomFooter from "@/components/CustomFooter";
import localFont from "next/font/local";
import { Checkbox } from "@/components/ui/checkbox";
import { auth, initFirebase } from "@/firebase";
import { getCheckoutUrl } from "./stripePayments";
import { useRouter } from "next/navigation";
import { experiences } from "@/experiences";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import CustomNavbar from "@/components/CustomNavbar";
import "cally";

const futuraMedium = localFont({
  src: "../../../../../public/fonts/futura/futura-medium.ttf",
});
const expansiva = localFont({
  src: "../../../../../public/fonts/expansiva/expansiva-bold.otf",
  weight: "700",
});

const Page = () => {
  const { packageID, experienceID } = useParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [firstName, setFirstName] = useState(auth.currentUser?.displayName || '');
  const [lastName, setLastName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [headCircumference, setHeadCircumference] = useState("");
  const [waistCircumference, setWaistCircumference] = useState("");
  const [thighCircumference, setThighCircumference] = useState("");
  const [legLength, setLegLength] = useState("");
  const [shoulderWidth, setShoulderWidth] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [selectedDate, setSelectedDate] = useState("");


  // Assuming `experiences` data is available (imported or declared above this component)
  const experience = experiences.find(
    (exp) => exp.experienceID === experienceID
  );
  const packageData = experience?.packages.find(
    (pkg) =>
      pkg.name.toLowerCase() ===
      (Array.isArray(packageID)
        ? packageID[0]?.toLowerCase()
        : packageID?.toLowerCase())
  );

  const [selectedAddons, setSelectedAddons] = useState<
    { title: string; price: number; priceID: string }[]
  >([]);
  const basePrice = packageData?.price || 0;

  // Calculate total price dynamically
  const totalPrice = selectedAddons.reduce(
    (total, addon: { price: number }) => total + addon.price,
    basePrice
  );

  const handleAddonChange = (addon: {
    title: string;
    price: number;
    priceID: string;
  }) => {
    setSelectedAddons(
      (prevSelected: { title: string; price: number; priceID: string }[]) => {
        if (prevSelected.includes(addon)) {
          return prevSelected.filter((selected) => selected !== addon);
        } else {
          return [...prevSelected, addon];
        }
      }
    );
  };

  const router = useRouter();
  // const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      // const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const purchase = async () => {
    setLoading(true);
    const app = initFirebase();
    const authUser = auth.currentUser; // Check the current user

    if (!authUser) {
      handleSignIn();
      setLoading(false); // Ensure loading state resets
      return;
    }

    const priceIds = [
      packageData?.priceID,
      ...selectedAddons.map((addon) => addon.priceID),
    ].filter((id): id is string => id !== undefined);

    const bookingDetails = selectedDate;
    const details = {
      firstName : firstName,
      lastName : lastName,
      height : height,
      weight : weight,
      age : age,
      head : headCircumference,
      waist : waistCircumference,
      thigh : thighCircumference,
      leg : legLength,
      shoulder : shoulderWidth,
      shoe : shoeSize,
      date : selectedDate
    }

    try {
      // Start the checkout process
      const checkoutUrl = await getCheckoutUrl(app, priceIds, bookingDetails, firstName,
        lastName,
        height,
        weight,
        age,
        headCircumference,
        waistCircumference,
        thighCircumference,
        legLength,
        shoulderWidth,
        shoeSize,
        selectedDate);
      router.push(checkoutUrl);

      toast({
        title: "Booking Successful",
        description: "Your booking has been confirmed and saved.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error completing purchase:", error);
      toast({
        title: "Error",
        description: "Failed to complete the booking. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const title =
    experience && packageData
      ? `${experience.name} ${packageData.name} Checkout`
      : "Package Not Found";

  return (
    <div>
      <CustomNavbar isHomePage={false} />
      <div className="px-3 md:px-10 flex flex-col items-center gap-10">
        <HeroTemplate
          image={packageData?.headerImage.src || ""}
          subtitle=""
          title={title}
        />
        <div className="w-full flex flex-col items-center gap-3">
          <h1
            className={`${futuraMedium.className} tracking-tighter md:text-left text-center text-2xl md:text-4xl`}
          >
            Review Your Selection
          </h1>
          <div className="bg-gradient-to-r from-transparent via-[#1C4773] to-transparent h-1 w-1/2"></div>
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-20 w-full py-10">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 justify-between">
              {experience?.checkoutImages.map((image) => {
                return (
                  <img
                    key={image.src}
                    src={image.src}
                    alt=""
                    className="h-36 w-96 object-cover"
                  />
                );
              })}
            </div>
            <div className="flex flex-col">
              <h2
                className={`${futuraMedium.className} text-2xl text-center md:text-left pb-10`}
              >
                ADD ONS
              </h2>
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
                        <p
                          className={`text-gray-500 ${futuraMedium.className}`}
                        >
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
              <select
                defaultValue="Choose a Date"
                className="select select-ghost"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option disabled={true}>Choose a Date</option>
                <option>18th January, 2025</option>
                <option>31st January, 2025</option>
                <option>22nd February, 2025</option>
                <option>28th February, 2025</option>
                <option>18th April, 2025</option>
                <option>22nd April, 2025</option>
                <option>26th May, 2025</option>
                <option>13th June, 2025</option>
                <option>14th June, 2025</option>
                <option>12th September, 2025</option>
                <option>26th September, 2025</option>
                <option>17th October, 2025</option>
                <option>24th October, 2025</option>
                <option>31st October, 2025</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <input
              type="text"
              className="input input-bordered w-full col-span-2"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Head Circumference"
              value={headCircumference}
              onChange={(e) => setHeadCircumference(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Waist Circumference"
              value={waistCircumference}
              onChange={(e) => setWaistCircumference(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Thigh Circumference"
              value={thighCircumference}
              onChange={(e) => setThighCircumference(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Leg Length"
              value={legLength}
              onChange={(e) => setLegLength(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Shoulder Width"
              value={shoulderWidth}
              onChange={(e) => setShoulderWidth(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              placeholder="Shoe Size"
              value={shoeSize}
              onChange={(e) => setShoeSize(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms-and-conditions"
              onCheckedChange={(checked) => setTermsAccepted(checked === true)}
            />

            <label
              htmlFor="terms-and-conditions"
              className={`${futuraMedium.className} text-sm text-gray-700 cursor-pointer pb-10`}
            >
              I have read and agree to the{" "}
              <a
                href="https://firebasestorage.googleapis.com/v0/b/ags-website-dc96a.firebasestorage.app/o/terms.pdf?alt=media&token=78ce6fce-457b-41f8-8052-575338fb044f"
                target="_blank"
                className="text-blue-500 underline"
              >
                Terms and Conditions
              </a>
              .
            </label>
          </div>
          <div className="bg-[#000000] flex flex-col md:flex-row items-center rounded-xl gap-3">
            <div className="bg-[#1C4773] rounded-xl flex justify-between items-center px-5 gap-10">
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
            <div className="flex flex-col items-start gap-2">
              <button
                onClick={purchase}
                disabled={!termsAccepted || loading} // Disable if T&C not accepted or loading
                className={`flex items-center gap-2 px-5 py-3 rounded-lg ${
                  !termsAccepted || loading
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <h2 className={`${futuraMedium.className} text-white`}>
                      Checkout
                    </h2>
                    <svg
                      data-slot="icon"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <CustomFooter />
    </div>
  );
};

export default Page;
