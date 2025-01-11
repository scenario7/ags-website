import img2 from "@/public/images/2.jpg";
import img3 from "@/public/images/3.jpg";
import img4 from "@/public/images/4.jpg";
import packageHeader1 from "@/public/images/5.jpg"; // Example header images
import packageHeader2 from "@/public/images/6.jpg";
import packageHeader3 from "@/public/images/7.jpg";

const addons = [
    {
      title: "Oreca FLM09 (Two Seater)",
      description: "Ride as a passenger with a professional driver.",
      price: 550,
      priceID : 'price_1QfKI6G0uhOoAJjD9HdQNp57',
    },
    {
      title: "Simulator Session",
      description: "1 hour session with coach.",
      price: 150,
      priceID : 'price_1QfKIJG0uhOoAJjDnafqUhRH',
    },
    {
      title: "On Board Camera Videos",
      description: "You leave with videos of your ride",
      price: 75,
      priceID : 'price_1QfKIgG0uhOoAJjD0MTATjr7',
    },
    {
      title: "Lunch (if not included)",
      description: "Starter, Main Course, Desert",
      price: 25,
      priceID : 'price_1QfKIoG0uhOoAJjDkeRgXKqk',
    },
    {
      title: "Accompanying Pass",
      description: "Breakfast and softs.",
      price: 25,
      priceID : 'price_1QfKJ9G0uhOoAJjDYWYaGJTM',
    },
    {
      title: "Accompanying Pass +",
      description: "Breakfast, lunch and softs",
      price: 50,
      priceID : 'price_1QfKJOG0uhOoAJjDJBNgmZ2B',
    },
    {
      title: "Simulator Session with Coach",
      description: "1 hour session with coach.",
      price: 700,
      priceID : 'price_1QfKJlG0uhOoAJjDGFTWCsV5',
    },
  ]

export const experiences = [
    {
      name: "F4",
      link: "/driving-experiences/f4",
      experienceID: "f4",
      image: img2,
      description: {
        text: "The F4 experience offers an exciting taste of high-speed racing. Feel the thrill as you take control of the wheel in one of the most sought-after racing cars.",
        points: [
          {
            heading: "Training",
            subtitle: "Initial coaching to get you race-ready.",
          },
          {
            heading: "Racing",
            subtitle: "Experience the track and feel the adrenaline.",
          },
          {
            heading: "Precision",
            subtitle: "Perfect your technique with each lap.",
          },
        ],
      },
      packages: [
        {
          name: "Discover",
          headerImage: packageHeader1,
          price: 1650,
          priceID : 'price_1QfHzGG0uhOoAJjDUPJ2Xhxb',
          laps: [
            { quantity: "3x8", car: "F3" },
            { quantity: "2x8", car: "F4" },
          ],
          addons: addons
        },
        {
          name: "Intermediary",
          headerImage: packageHeader2,
          price: 2200,
          priceID : 'price_1QfHzZG0uhOoAJjDZtqWlvn2',
          laps: [
            { quantity: "5x8", car: "F3" },
            { quantity: "4x8", car: "F4" },
          ],
          addons: addons
        },
        {
          name: "Race",
          headerImage: packageHeader3,
          price: 2500,
          priceID : 'price_1QfHzpG0uhOoAJjDhl9FRm9Y',
          laps: [
            { quantity: "7x8", car: "F3" },
            { quantity: "5x8", car: "F4" },
          ],
          addons: addons
        },
      ],
    },
    {
      name: "F3.5",
      link: "/driving-experiences/f35",
      experienceID: "f35",
      image: img3,
      description: {
        text: "The F3.5 experience lets you race a powerful open-wheel car, offering incredible performance and handling.",
        points: [
          {
            heading: "Preparation",
            subtitle: "Intensive training for performance driving.",
          },
          {
            heading: "Race Setup",
            subtitle: "Tuning and setup of the car for optimal performance.",
          },
          {
            heading: "Track Control",
            subtitle: "Master the track with precision driving.",
          },
        ],
      },
      packages: [
        {
          name: "Discover",
          headerImage: packageHeader1,
          price: 3500,
          priceID : 'price_1QfI08G0uhOoAJjDsXNV8yDX',
          laps: [{ quantity: "3x8", car: "F3.5" }],
          addons: addons
        },
        {
          name: "Intermediary",
          headerImage: packageHeader2,
          price: 4500,
          priceID : 'price_1QfI0OG0uhOoAJjDMnqK1tTN',
          laps: [{ quantity: "4x8", car: "F3.5" }],
          addons: addons
        },
        {
          name: "Race",
          headerImage: packageHeader3,
          price: 5500,
          priceID : 'price_1QfI0eG0uhOoAJjDHBaTWSS4',
          laps: [{ quantity: "6x8", car: "F3.5" }],
          addons: addons
        },
      ],
    },
    {
      name: "F1",
      link: "/driving-experiences/f1",
      experienceID: "f1",
      image: img4,
      description: {
        text: "The ultimate F1 experience, driving one of the most iconic cars on the planet at incredible speeds.",
        points: [
          {
            heading: "Performance",
            subtitle: "Experience the power of an F1 car.",
          },
          { heading: "Strategy", subtitle: "Learn race strategy from the pros." },
          {
            heading: "Elite Track",
            subtitle: "Race on the most prestigious circuits.",
          },
        ],
      },
      packages: [
        {
          name: "Discover",
          headerImage: packageHeader1,
          price: 4600,
          priceID : 'price_1QfI1IG0uhOoAJjDJUPpga4V',
          laps: [{ quantity: "2x8", car: "F1" }],
          addons: addons
        },
        {
          name: "Intermediary",
          headerImage: packageHeader2,
          price: 5200,
          priceID : 'price_1QfI1jG0uhOoAJjDAGkTtrE0',
          laps: [{ quantity: "4x8", car: "F1" }],
          addons: addons
        },
        {
          name: "Race",
          headerImage: packageHeader3,
          price: 7200,
          priceID : 'price_1QfI1zG0uhOoAJjD6Hqvsoss',
          laps: [{ quantity: "6x8", car: "F1" }],
          addons: addons
        },
      ],
    },
  ];