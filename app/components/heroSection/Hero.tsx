'use client'
import Image from "next/image"
import gameImage from '@/public/GameImages/gameImage.jpg'
import { UseSidebar } from "@/app/contexts/SidebarContext"

// fonts
import { Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato,} from "next/font/google";
const orbitron = Orbitron({weight:"400", subsets:["latin"]});
const roboto = Roboto({weight:"400", subsets:["latin"]});
const inter = Inter({weight:"400", subsets:["latin"]});
const russoOne = Russo_One ({weight:"400", subsets:["latin"]});
const audioWise = Audiowide({weight:"400", subsets:["latin"]});
const OpenSans = Open_Sans({weight:"400", subsets:["latin"]})
const fredoka = Fredoka({weight:"400", subsets:["latin"]});
const baloo2 = Baloo_2({weight:"600", subsets:["latin"]});
const nunito = Nunito({weight:"700", subsets:["latin"]});
const bebasNeue = Bebas_Neue({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"400", subsets:["latin"]});
const lato = Lato({weight:"400", subsets:["latin"]});



// icons FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"

// heroIcon
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { HeartIcon } from "@heroicons/react/24/outline"
export default function HeroSection(){

    const {isOpen,toggleSidebar} = UseSidebar()

    return(
        <div className={`relative w-full transition-all ease-in-out duration-300 bg-[#151515] z-20
            ${isOpen? 'lg:h-[35em]':'lg:h-[30em]'} w-full h-[20em] group overflow-hidden`}>
            <Image
                src={gameImage}
                fill
                sizes="100vw"
                className="object-cover brightness-70  transition-all ease-in duration-9000
                    scale-100 group-hover:scale-110 group-hover:duration-9000"
                alt="gameImage"
                priority
            />

                {/* Game Info elements */}
                <div className=" from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.9)] 
                    w-full h-[8em] lg:w-full lg:h-[13em] md:h-[15em] absolute  
                    bottom-0 text-white p-2 flex flex-col justify-end md:from-[rgba(0,0,0,0)] 
                    md:to-[rgba(0,0,0,0.9)] md:justify-center lg:justify-end lg:pb-[6em] transition-all duration-700
                    ease-[cubic-bezier(0.95,0.05,0.795,0.035)] 
                    ">
                <h2 className={`${OpenSans.className} text-[1em] md:text-[2em]`}>Game Name</h2>
                <div className="w-full flex justify-between items-start flex-col">
                    <p className={`${fredoka.className} text-[rgba(255,255,255,.5)] 
                        text-[.7em] md:text-[1.2em] lg:text-[1.5em] `}>Game gengers</p>
                    <div className={`${montserrat.className} border-[#fff] lg:w-[25vw] 
                        lg:h-[25vh] text-center hidden sm:inline sm:h-[10em] sm:w-[25em] md:w-[20em]
                        md:text-[.7em] md:text-center lg:text-[1em]`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non animi ad 
                            culpa nobis est aspernatur dolores corporis illo delectus assumenda, 
                            sint incidunt perspiciatis debitis consequuntur inventore, 
                            harum deleniti adipisci.
                        </p>
                    </div>
                </div>
                <div className=" relative w-full sm:w-[6em] h-[20em] flex justify-around items-end
                    pb-1 md:w-[15em] md:h-[12em] md:absolute md:right-0 md:top-[50%]
                    md:translate-y-[-50%] md:flex-col md:justify-end md:gap-[1em] md:items-center
                    md:px-1 lg:right-15 lg:top-[20%]">
                        <button className={`bg-[#068FFF] text-white w-[6em] h-[2em] rounded-[2em]
                            text-[1em] md:text-[1.2em] md:w-full md:h-[1.5em] md:rounded-md lg:h-[3em]
                            lg:bg-transparent lg:border lg:border-[#068FFF] lg:hover:bg-[#068FFF]
                            lg:cursor-pointer`}>Buy now</button>
                        <p className={`absolute top-0 left-[50%] translate-x-[-50%]
                            border-white md:text-[2em] text-[#F3F4F4] ${lato.className}`}>$59,90</p>
                        <button className={`bg-[#068FFF] text-white w-[6em] h-[2em] rounded-[2em]
                            text-[1em] md:text-[1.2em] md:w-full md:h-[1.5em] md:rounded-md
                            lg:h-[3em] lg:bg-transparent lg:border lg:border-[#068FFF] 
                            lg:hover:bg-[#068FFF] lg:cursor-pointer   `}>
                            Wish list
                        </button>
                </div>
            </div>
        </div>
    )
}

