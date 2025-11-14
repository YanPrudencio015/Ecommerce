import { Geist, Geist_Mono, Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato,} from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faPix } from "@fortawesome/free-brands-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faApplePay } from "@fortawesome/free-brands-svg-icons";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";

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

    const PaymentIcon: any[] = [
        <FontAwesomeIcon icon={faCcVisa} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faCcMastercard} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faPix} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faPaypal} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faApplePay} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faGooglePay} className="text-[1.5em] z-10"/>,
    ]

    return(
    <div className="w-full h-auto flex justify-between flex-col items-center
            gap-10">
                <p className={`${bebasNeue.className} text-[2em]`}>Payment Methods</p>
                <div className="w-full h-[5em] flex justify-evenly flex-row">
                    {PaymentIcon.map((value, index)=>(
                        <div key={index} className="rounded-[5px] w-[5em] h-[3em] bg-gradient-to-bl 
                         p-0.5 hover:p-0 hover:bg-[#151515] transition-all duration-300
                            ease-in-out group flex-wrap">
                            <button className="rounded-[5px] w-full h-full bg-[#151515] overflow-hidden
                                flex justify-center items-center relative before:absolute before:top-1/2 
                                before:left-1/2 before:z-0 before:bg-[#151515] before:w-[.5em] before:h-[.5em]
                                before:-translate-y-1/2 before:-translate-x-1/2 before:content-[''] 
                                before:rounded-full group-hover:before:w-[5em] group-hover:before:h-[5em]
                                before:transition-all before:duration-500
                                group-hover:before:bg-[#0046FF] focus:before:bg-[#0046FF]
                                focus:before:h-[5em] focus:before:w-[5em] border-0 
                                focus:border-1 border-[#fff]">
                                {value}
                            </button>
                        </div>
                    ))}
            </div>
            </div>
    )
}