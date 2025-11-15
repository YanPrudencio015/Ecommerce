import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"


export default function Socials(){


    const socialsIcons: any[] = [
        <FontAwesomeIcon icon={faFacebook} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faInstagram} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faXTwitter} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faTiktok} className="text-[1.5em] z-10"/>,
        <FontAwesomeIcon icon={faDiscord} className="text-[1.5em] z-10"/>
    ];

    return(
        <div className="w-full flex justify-between sm:w-[20em] sm:h-[20em] lg:h-[5em]  
        lg:w-[15em] flex-col  lg:gap-1.5 items-center">
                       <div className="w-full h-[5em] flex justify-evenly items-center flex-row 
                        sm:h-full lg:w-[10em] lg:flex-wrap lg:flex-row">
                    {socialsIcons.map((value, index)=>(
                        <div key={index} className="rounded-full w-[3em] h-[3em] bg-gradient-to-bl from-[#068FFF]
                        to-[#151515] p-0.5 hover:p-0 hover:bg-[#151515] transition-all duration-300
                            ease-in-out group">
                            <button className="rounded-full w-full h-full bg-[#151515] overflow-hidden
                                flex justify-center items-center relative before:absolute before:top-1/2 
                                before:left-1/2 before:z-0 before:bg-[#151515] before:w-[.5em] before:h-[.5em]
                                before:-translate-y-1/2 before:-translate-x-1/2 before:content-[''] 
                                before:rounded-full group-hover:before:w-[5em] group-hover:before:h-[5em]
                                before:transition-all before:duration-500 
                                group-hover:before:bg-[#0046FF] focus:before:bg-[#0046FF]
                                focus:before:h-[5em] focus:before:w-[5em] border-0 cursor-pointer
                                ">
                                {value}
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    )
}