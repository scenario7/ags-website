import img2 from "@/public/images/2.jpg";
import img3 from "@/public/images/3.jpg";
import img4 from "@/public/images/4.jpg";
import f4packageHeader1 from "@/public/images/5.jpg"; // Example header images
import f4packageHeader2 from "@/public/images/6.jpg";
import f4packageHeader3 from "@/public/images/7.jpg";
import f35packageHeader1 from "@/public/images/8.jpg";
import f35packageHeader2 from "@/public/images/9.jpg";
import f35packageHeader3 from "@/public/images/10.jpg";
import f1packageHeader1 from "@/public/images/11.jpg";
import f1packageHeader2 from "@/public/images/12.jpg";
import f1packageHeader3 from "@/public/images/13.jpg";

import f1Checkout1 from '@/public/images/checkout/f1/1.jpg'
import f1Checkout2 from '@/public/images/checkout/f1/2.jpg'
import f1Checkout3 from '@/public/images/checkout/f1/3.jpg'
import f1Checkout4 from '@/public/images/checkout/f1/4.jpg'
import f35Checkout1 from '@/public/images/checkout/f35/1.jpg'
import f35Checkout2 from '@/public/images/checkout/f35/2.jpg'
import f35Checkout3 from '@/public/images/checkout/f35/3.jpg'
import f35Checkout4 from '@/public/images/checkout/f35/4.jpg'
import f4Checkout1 from '@/public/images/checkout/f4/1.jpg'
import f4Checkout2 from '@/public/images/checkout/f4/2.jpg'
import f4Checkout3 from '@/public/images/checkout/f4/3.jpg'
import f4Checkout4 from '@/public/images/checkout/f4/4.jpg'

const addons = [
  {
    title: "Oreca FLM09 (Two Seater)",
    description: "Ride as a passenger with a professional driver.",
    price: 550,
    priceID: "price_1QfKI6G0uhOoAJjD9HdQNp57",
  },
  {
    title: "Simulator Session",
    description: "1 hour session with coach.",
    price: 150,
    priceID: "price_1QfKIJG0uhOoAJjDnafqUhRH",
  },
  {
    title: "On Board Camera Videos",
    description: "You leave with videos of your ride",
    price: 75,
    priceID: "price_1QfKIgG0uhOoAJjD0MTATjr7",
  },
  {
    title: "Lunch (if not included)",
    description: "Starter, Main Course, Desert",
    price: 25,
    priceID: "price_1QfKIoG0uhOoAJjDkeRgXKqk",
  },
  {
    title: "Accompanying Pass",
    description: "Breakfast and softs.",
    price: 25,
    priceID: "price_1QfKJ9G0uhOoAJjDYWYaGJTM",
  },
  {
    title: "Accompanying Pass +",
    description: "Breakfast, lunch and softs",
    price: 50,
    priceID: "price_1QfKJOG0uhOoAJjDJBNgmZ2B",
  },
];

export const experiences = [
  {
    name: "F4",
    link: "/driving-experiences/f4",
    subtitle : "Discover single-seater driving in complete safety thanks to our Formula 4 Experience. Adrenalin and thrills guaranteed!",
    experienceID: "f4",
    image: img2,
    checkoutImages : [f4Checkout1, f4Checkout2, f4Checkout3, f4Checkout4],
    description: {
      text: "Discover single-seater driving in complete safety thanks to our Formula 4 Experience. Adrenalin and thrills guaranteed!",
      points: [
        {
          heading: "Welcome and equipment",
          subtitle:
            "Welcome coffee, safety briefing, full FIA driver equipment provided.",
        },
        {
          heading: "Several driving sessions",
          subtitle: "The first behind a pace-car, followed by free driving.",
        },
        {
          heading: "Data and video",
          subtitle:
            "Onboard data and video analysis by professional coaches after each session.",
        },
        {
          heading: "Mygale M14 F4",
          subtitle:
            "FIA carbon monocoque • 2.0 Renault Sport 4-cylinder turbo engine • 160bhp • 500kg • SADEV 6-speed sequential gearbox with paddle-shift",
        },
      ],
    },
    packages: [
      {
        name: "Discover",
        headerImage: f4packageHeader1,
        price: 1650,
        priceID: "price_1QfHzGG0uhOoAJjDUPJ2Xhxb",
        laps: [
          { quantity: "2x8", car: "F4" },
        ],
        addons: addons,
      },
      {
        name: "Intermediary",
        headerImage: f4packageHeader2,
        price: 2200,
        priceID: "price_1QfHzZG0uhOoAJjDZtqWlvn2",
        laps: [
          { quantity: "4x8", car: "F4" },
        ],
        addons: addons,
      },
      {
        name: "Race",
        headerImage: f4packageHeader3,
        price: 2500,
        priceID: "price_1QfHzpG0uhOoAJjDhl9FRm9Y",
        laps: [
          { quantity: "5x8", car: "F4" },
        ],
        addons: addons,
      },
    ],
  },
  {
    name: "F3.5",
    link: "/driving-experiences/f35",
    subtitle : "Discover single-seater driving in complete safety thanks to our Formula 3.5 Experience. Adrenalin and thrills guaranteed!",
    experienceID: "f35",
    checkoutImages : [f35Checkout1, f35Checkout2, f35Checkout3, f35Checkout4],
    image: img4,
    description: {
      text: "Climb the ranks of single-seaters by discovering Formula 3.5. A school of Formula 1, these single-seaters offer impressive sensations!",
      points: [
        {
          heading: "Welcome and equipment",
          subtitle:
            "Welcome coffee, safety briefing, full FIA driver equipment provided.",
        },
        {
          heading: "3 sessions of 8 laps in F4",
          subtitle: "Tuning and setup of the car for optimal performance.",
        },
        {
          heading: "3 Sessions of 8 Laps in F4",
          subtitle:
            "The first behind pace-car, the following free laps. Data/video analysis.",
        },
        {
          heading: "Lunch and Workshop Tour",
          subtitle: "",
        },
        {
          heading: "Sessions of 6 laps in 3.5",
          subtitle: "Free Sessions",
        },
        {
          heading: "Dallara T05 WSR 3.5",
          subtitle: "V6 425hp • 628kg • Paddle Shift",
        },
        {
          heading: "Dallara T08 WSR 3.5",
          subtitle: "V6 485hp • 628kg • Carbon Brakes",
        },
      ],
    },
    packages: [
      {
        name: "Discover",
        headerImage: f1packageHeader1,
        price: 3500,
        priceID: "price_1QfI08G0uhOoAJjDsXNV8yDX",
        laps: [{ quantity: "3x8", car: "F4" },{ quantity: "1x6", car: "F3.5" }],
        addons: addons,
      },
      {
        name: "Intermediary",
        headerImage: f1packageHeader2,
        price: 4500,
        priceID: "price_1QfI0OG0uhOoAJjDMnqK1tTN",
        laps: [{ quantity: "3x8", car: "F4" },{ quantity: "2x6", car: "F3.5" }],
        addons: addons,
      },
      {
        name: "Race",
        headerImage: f1packageHeader3,
        price: 5500,
        priceID: "price_1QfI0eG0uhOoAJjDHBaTWSS4",
        laps: [{ quantity: "3x8", car: "F4" },{ quantity: "3x6", car: "F3.5" }],
        addons: addons,
      },
    ],
  },
  {
    name: "F1",
    link: "/driving-experiences/f1",
    subtitle : "Discover single-seater driving in complete safety thanks to our Formula 1 Experience. Adrenalin and thrills guaranteed!",
    experienceID: "f1",
    checkoutImages : [f1Checkout1, f1Checkout2, f1Checkout3, f1Checkout4],
    image: img3,
    description: {
      text: "The ultimate F1 experience, driving one of the most iconic cars on the planet at incredible speeds.",
      points: [
        {
          heading: "Welcome and equipment",
          subtitle:
            "Welcome coffee, safety briefing, full FIA driver equipment provided.",
        },
        {
          heading: "3 sessions of 8 laps in F4",
          subtitle: "Tuning and setup of the car for optimal performance.",
        },
        {
          heading: "Lunch and Workshop Tour",
          subtitle: "",
        },
        {
          heading: "Sessions of 6 Laps in F1",
          subtitle: "Free Sessions",
        },
        {
          heading: "Prost AP-02 • Arrows A20 • AGS SH1",
          subtitle: "V8 Cosworth 550hp • 500-550kg • Paddle Shift",
        },
      ],
    },
    packages: [
      {
        name: "Discover",
        headerImage: f35packageHeader1,
        price: 4600,
        priceID: "price_1QfI1IG0uhOoAJjDJUPpga4V",
        laps: [{ quantity: "3x8", car: "F4" },{ quantity: "1x6", car: "F1" }],
        addons: addons,
      },
      {
        name: "Intermediary",
        headerImage: f35packageHeader2,
        price: 5200,
        priceID: "price_1QfI1jG0uhOoAJjDAGkTtrE0",
        laps: [{ quantity: "3x8", car: "F4" },{ quantity: "2x6", car: "F1" }],
        addons: addons,
      },
      {
        name: "Race",
        headerImage: f35packageHeader3,
        price: 7200,
        priceID: "price_1QfI1zG0uhOoAJjD6Hqvsoss",
        laps: [{ quantity: "3x8", car: "F4" },{ quantity: "3x6", car: "F1" }],
        addons: addons,
      },
    ],
  },
];
