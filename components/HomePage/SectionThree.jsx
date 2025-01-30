import localFont from "next/font/local";
import { Inter } from "next/font/google"

const inter = Inter({ subsets : ["latin"] ,weight : ["400", "500", "600"]})

const futuraLight = localFont({ src: '../../public/fonts/futura/futura-std-light.ttf' });
const futuraMedium = localFont({ src: '../../public/fonts/futura/futura-medium.ttf' });
const expansiva = localFont({ src: '../../public/fonts/expansiva/expansiva-bold.otf', weight: '700' });

const reviews = [
    {
        name : 'Jean Luc San',
        time : '2 months ago',
        review : 'Very warm welcome, competent team, great time on the circuit, nothing but happiness'
    },
    {
        name : 'Gilles Bruner',
        time : '2 years ago',
        review : 'The setting, exceptional, the infrastructures, perfect and then the quality of the whole team , without exception, combining courtesy, passion, kindness and competenceto recommend without any reservation and with your eyes closed'
    },
    {
        name : 'Pierre',
        time : '2 years ago',
        review : 'What a welcome! Received like friends, by an available and competent team. What a family! Who knows how to share the passion for cars with you, all audiences included!'
    },
]

const SectionThree = () => {
    return (
        <div className="flex flex-col items-center py-10 px-10 gap-5">
        <img src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Logo.png" alt="" className="h-12 object-contain"/>
        <div className="flex justify-center gap-4">
            {Array(4).fill(0).map((_, index) => (
            <svg
                key={index}
                fill="#09144A"
                strokeWidth="1.5"
                stroke="#09144A"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 h-10"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
            </svg>
            ))}
            {/* Half-filled star */}
            <div className="relative w-10 h-10">
            {/* Full star as the background */}
            <svg
                fill="#ffffff"
                strokeWidth="1.5"
                stroke="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="absolute inset-0"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
            </svg>
            {/* Clipped half star */}
            <svg
                fill="#09144A"
                strokeWidth="1.5"
                stroke="#09144A"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="absolute inset-0"
                style={{ clipPath: 'inset(0 50% 0 0)' }}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
            </svg>
            </div>
        </div>
        <p className={`${futuraMedium.className}`}>Average Rating - 4.5/5</p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 md:gap-10">
            {reviews.map((map) => {
                return(
                    <div className="bg-[#060D30] px-5 py-5 flex flex-col gap-2 md:gap-3 rounded-xl shadow-md" key={map.name}>
                        <h3 className={`text-white ${futuraMedium.className} text-xl tracking-tighter`}>{map.name}</h3>
                        <h4 className={`text-stone-300 ${inter.className} text-sm font-semibold tracking-tighter`}>{map.time}</h4>
                        <p className={`${inter.className} text-white md:text-lg tracking-tighter`}>{map.review}</p>
                    </div>
                )
            })}
        </div>
      </div>
    );
  };
  
  export default SectionThree;
  