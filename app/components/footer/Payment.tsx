
import { Geist, Geist_Mono, Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato,} from "next/font/google";

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
export default function Payment(){

        const options: string[] = [
        "Visa",
        "Mastercard",
        "Pix",
        "PayPal",
        "Apple Pay",
        "Google Pay",
    ];

    return(
    <div className="w-full h-auto flex justify-between flex-col items-center
            gap-10">
                <p className={`${bebasNeue.className} text-[2em]`}>Payment Methods</p>
                <ul className="w-full flex justify-center items-center flex-col gap-5">
                    {options.map((value, index)=>(
                        <li key={index} className={`${ montserrat.className} w-full h-[2em]`}>
                            <button className="w-full h-full flex justify-center items-center relative 
                                text-[1em] before:absolute before:bottom-0 before:right-1/2 
                                before:translate-x-1/2 before:w-[0%] before:h-[1px] 
                                before:bg-[#fff] hover:before:w-[50%] before:transition-all 
                                before:duration-200
                                focus:before:w-[50%]
                                ">{value}</button>
                        </li>
                    ))}
                </ul>
            </div>
    )
}