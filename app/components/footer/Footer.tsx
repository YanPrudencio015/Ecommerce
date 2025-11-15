    "use client"
    import { Geist, Geist_Mono, Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato,} from "next/font/google";



    // components
    import Socials from "./Socials";
import Support from "./Support";
import Account from "./Account";
import Legal from "./Legal";
import Payment from "./Payment";

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
export default function Footer(){

    return(
        <div className="text-[#fff] w-full h-auto flex items-center justify-around
            flex-col gap-20 relative before:absolute before:top-0 before:right-1/2 
            before:translate-x-1/2 before:w-[90%] before:h-[1px] before:bg-[#fff] pt-5 bg-[#0F0E0E]">
            <p className={`w-full h-[1.5em] flex justify-center ${orbitron.className}
            text-[1.5em] text-[#fff]`}>
                Level Up                
            </p>
            <div className="w-full h-auto flex justify-between flex-col items-center gap-[5em] 
            sm:gap-[1em] sm:flex-row sm:flex-wrap">
                <Support/>
                <Account/>
                <Legal/>
                <Socials/>
                <Payment/>
            </div>
            <p className="w-[90%] h-full flex justify-center items-center text-center
            ">© 2025 GameStore. All rights reserved.
                All trademarks and game logos are the property of their respective owners.
                Prices and availability are subject to change without notice.
            </p>
        </div>
    )
}