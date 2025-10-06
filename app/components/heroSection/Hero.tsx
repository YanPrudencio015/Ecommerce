'use client'
import Image from "next/image"
import gameImage from '@/public/GameImages/game3.jpg'
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
            ${isOpen? 'lg:h-[35em]':'lg:h-[40em]'}`}>
            <Image src={gameImage}       
                width={2000}
                height={2000}
                sizes=" 100vw, 50vw"
                style={{ width: "100%", height: "100%"}} className="brightness-70" alt="gameImage"/>

                {/* Game Info elements */}
                <div className="bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.1)] 
                    w-[13em] md:w-[20em] lg:w-[25em] h-full absolute 
                    bottom-0 text-white p-2 flex flex-col justify-end md:from-[rgba(0,0,0,0.8)] 
                    md:to-transparent md:justify-center lg:justify-end lg:pb-[6em]
                     ">
                <h2 className={`${OpenSans.className} text-[1em] md:text-[2em]`}>Red Dead Redemption 2</h2>
                <div className="w-full flex justify-between items-center ">
                    <p className={`${fredoka.className} text-[rgba(255,255,255,.5)] 
                        text-[.7em] md:text-[1.2em] lg:text-[1.5em] `}>Action & adventure</p>
                    <div>
                        <FontAwesomeIcon icon={faStar} className="text-[.6em] md:text-[1em] lg:text-[1.2em]" />
                        <FontAwesomeIcon icon={faStar} className="text-[.6em] md:text-[1em] lg:text-[1.2em]" />
                        <FontAwesomeIcon icon={faStar} className="text-[.6em] md:text-[1em] lg:text-[1.2em]" />
                        <FontAwesomeIcon icon={faStar} className="text-[.6em] md:text-[1em] lg:text-[1.2em]" />
                        <FontAwesomeIcon icon={faStar} className="text-[.6em] md:text-[1em] lg:text-[1.2em]" />
                    </div>
                </div>
                <div className=" text-[#fff] h-[2em] md:h-[4em] flex justify-around items-center">
                    <button className={`bg-[#00993d] w-[5em] h-full rounded-[.2em] 
                        hover:bg-[rgba(0,153,61,.5)] focus:bg-[[rgba(0,153,61,.5)] focus:text-[#fff]
                        transition-all ease-in-out duration-100 cursor-pointer 
                        lg:w-[9em] lg:text-[1.2em] ${lato.className}`}>$ 59.99</button>

                    <div className=" flex justify-between gap-3 h-full w-[5em] md:items-center md:w-[8em]">
                        <button className="rounded-[2em] w-[3em] flex 
                            justify-center items-center h-[2em] md:h-[3em] bg-[#068FFF] hover:bg-[#fff] group
                            cursor-pointer ">
                            <ShoppingBagIcon className="size-5 md:size-7 text-[#fff] group-hover:text-[#068FFF]" /></button>
                        <button className="rounded-[2em] w-[3em] flex 
                            justify-center items-center h-[2em] md:h-[3em] bg-[#068FFF]  hover:bg-[#fff] group cursor-pointer">
                            <HeartIcon className="size-5 md:size-7 text-[#fff] group-hover:text-[#068FFF]" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

