'use client'
import { 
  Montserrat,
  Bebas_Neue 
} from "next/font/google";


// fontes
const montserrat = Montserrat({ weight: "500", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

// icon heroicon
import { HomeIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


// contexts
import { UseSidebar } from "@/app/contexts/SidebarContext";


export default function HeaderMainSidebar(){
  
  const {isOpen, toggleSidebar} = UseSidebar();
  
  return(
        <div className="w-[90%] h-[8em] m-2.5 flex justify-around flex-col overflow-hidden
                items-center">
            <button className={`w-[90%] h-[2.5em] text-[#fff] bg-[#151515] flex justify-center items-center 
              rounded-[.5em] border-1 border-[#DCDCDC] active:text-[#151515] active:bg-[#fff]
              group relative transform transition-all ease-in-out duration-500
              hover:bg-[#fff] hover:text-[#151515]
              focus:bg-[#068FFF] focus:border-0
              ${isOpen? 'left-[0em]':'left-[50em]'} cursor-pointer`}
              onClick={()=> {toggleSidebar()}}
              >
              <HomeIcon className="size-7 w-[3em] h-[2em] rounded-[2em]"/>
              <span className={`w-[8em] ${bebasNeue.className}`}>Home</span>
            </button>

            {/* sidebar close icon Home */}
            <button className={`relative bottom-[2.5em] transform transition-all ease-in-out duration-300 
              text-[#fff] ${isOpen? 'right-[50em]':'right-[0em]'}
              border-1 border-[#fff] rounded-[.5em] h-[2.5em] active:text-[#151515] z-50
              active:bg-[#fff] cursor-pointer`}>
              <HomeIcon className="size-7 w-[3em]"/>
            </button>

              {/* sidebar open search icon */}
            <span className={`w-[95%] h-[3em] flex justify-center 
              items-center flex-row border-0 bg-[#fff] rounded-[5px] px-1 gap-2
              relative ${isOpen? 'left-0':'left-[50em]'} transition-all ease-in-out duration-500
              `}>
              <button className=" bg-[#151515] text-[#fff] rounded-[10px] 
                w-[2.8em] h-[90%] flex justify-center items-center
                "><MagnifyingGlassIcon className="size-6"/></button>
              <input type="text" placeholder="search here..." 
                className={`
                  bg-[#fff] w-[100%] h-[100%] focus:border-0 
                  focus:outline-0 rounded-[5px] text-[1em] ${montserrat.className} `}/>
            </span>
        {/* sidebar close search icon */}
            <button className={`absolute ${isOpen? 'right-[50em]':'right-[.9em]'} top-[6em] text-[#fff] border-1 
              w-[3em] h-[6%] flex justify-center items-center rounded-[10px] transform 
              transition-all ease-in-out duration-300`} onClick={()=>toggleSidebar()}>
              <MagnifyingGlassIcon className="size-6"/>
            </button>
          </div>
    )
}