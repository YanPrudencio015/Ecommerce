'use client'
'use client'
import { 
  Open_Sans as OpenSans, 
  Nunito,
  Montserrat, 
} from "next/font/google";


// fontes
const nunito = Nunito({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "500", subsets: ["latin"] });


// icon heroicon
import { HomeIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function HeaderMainSidebar(){
    return(
        <div className="w-[90%] h-[8em] m-2.5 flex justify-around flex-col 
                items-center">
            <button className="w-[90%] h-[2em] bg-[#151515] flex justify-center items-center 
              rounded-[1em] border-1 border-[#DCDCDC] active:text-[#151515] active:bg-[#fff]
              group">
              <HomeIcon className="size-7 w-[3em] h-[2em] text-[#fff] rounded-[2em] 
              group-active:text-[#151515]"/>
              <span className={`w-[8em] ${nunito.className} text-[#DCDCDC]
                group-active:text-[#000]`}>Home</span>
            </button>

            <span className="w-[95%] h-[3em] flex justify-center 
              items-center flex-row border-0 bg-[#fff] rounded-[5px] px-1 gap-2 ">
              <button className=" bg-[#151515] text-[#fff] rounded-[10px] 
                w-[2.8em] h-[90%] flex justify-center items-center
                "><MagnifyingGlassIcon className="size-6"/></button>
              <input type="text" placeholder="search here..." 
                className={`
                  bg-[#fff] w-[100%] h-[100%] focus:border-0 
                  focus:outline-0 rounded-[5px] text-[1em] ${montserrat.className} `}/>
            </span>
          </div>
    )
}