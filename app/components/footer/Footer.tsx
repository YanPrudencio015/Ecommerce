    "use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"


import {Orbitron} from "next/font/google"

const orbitron = Orbitron({weight:"400", subsets:["latin"]});
export default function Footer(){

    return(
        <div className="text-[#fff] w-full h-auto flex items-center justify-around
            flex-col gap-20 relative before:absolute before:top-0 before:right-1/2 
            before:translate-x-1/2 before:w-[90%] before:h-[1px] before:bg-[#fff] pt-5">
            <p className={`w-full h-[1.5em] flex justify-center ${orbitron.className}
            text-[1.5em] text-[#fff]`}>
                Level Up                
            </p>
            <div className="w-full h-[5em] flex justify-evenly flex-row">
                <div className="rounded-full w-[3em] h-[3em] bg-gradient-to-bl from-[#068FFF]
                    to-[#FF9A00] p-0.5 hover:p-0 hover:bg-[#151515] transition-all duration-300
                        ease-in-out group">
                    <div className="rounded-full w-full h-full bg-[#151515] overflow-hidden
                    flex justify-center items-center relative before:absolute before:top-1/2 
                    before:left-1/2 before:z-0 before:bg-[#151515] before:w-[.5em] before:h-[.5em]
                    before:-translate-y-1/2 before:-translate-x-1/2 before:content-[''] 
                    before:rounded-full group-hover:before:w-[5em] group-hover:before:h-[5em]
                    before:transition-all before:duration-500 group-hover:before:bg-[#068FFF] ">
                    <FontAwesomeIcon icon={faFacebook} className="text-[1.5em] z-10"/>
                    </div>
                </div>
                <div className="rounded-full w-[3em] h-[3em] bg-gradient-to-bl from-[#068FFF]
                    to-[#FF9A00] p-0.5 hover:p-0 hover:bg-[#151515] transition-all duration-300
                        ease-in-out group">
                    <div className="rounded-full w-full h-full bg-[#151515] overflow-hidden
                    flex justify-center items-center relative before:absolute before:top-1/2 
                    before:left-1/2 before:z-0 before:bg-[#151515] before:w-[.5em] before:h-[.5em]
                    before:-translate-y-1/2 before:-translate-x-1/2 before:content-[''] 
                    before:rounded-full group-hover:before:w-[5em] group-hover:before:h-[5em]
                    before:transition-all before:duration-500 group-hover:before:bg-[#068FFF] ">
                    <FontAwesomeIcon icon={faInstagram} className="text-[1.5em] z-10"/>
                    </div>
                </div>
                <div className="rounded-full w-[3em] h-[3em] bg-gradient-to-bl from-[#068FFF]
                    to-[#FF9A00] p-0.5 hover:p-0 hover:bg-[#151515] transition-all duration-300
                        ease-in-out group">
                    <div className="rounded-full w-full h-full bg-[#151515] overflow-hidden
                    flex justify-center items-center relative before:absolute before:top-1/2 
                    before:left-1/2 before:z-0 before:bg-[#151515] before:w-[.5em] before:h-[.5em]
                    before:-translate-y-1/2 before:-translate-x-1/2 before:content-[''] 
                    before:rounded-full group-hover:before:w-[5em] group-hover:before:h-[5em]
                    before:transition-all before:duration-500 group-hover:before:bg-[#068FFF] ">
                    <FontAwesomeIcon icon={faXTwitter} className="text-[1.5em] z-10"/>
                    </div>
                </div>
            </div>
        </div>
    )
}