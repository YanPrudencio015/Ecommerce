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
        <div className="w-[100%] h-[8em] p-2  flex justify-around flex-col overflow-hidden
                items-center ">
            <button className={`w-[90%] h-[2.5em] text-[#fff] bg-[#151515] flex justify-center items-center 
              rounded-[.5em] active:text-[#151515] active:bg-[#fff]
              group relative transform transition-all ease-in-out duration-500
              hover:bg-[#fff] hover:text-[#151515]
               focus:border-0
              ${isOpen? 'left-0':'left-0'} cursor-pointer`}
              onClick={()=> {toggleSidebar()}}
              >
              <HomeIcon className="size-7 w-[3em] h-[2em] rounded-[2em]"/>
              <span className={`w-[8em] ${bebasNeue.className} ${isOpen?'initial':'hidden'}`}>Home</span>
            </button>


              {/* sidebar open search icon */}
            <span className={`w-[95%] h-[3em] flex justify-center 
              items-center flex-row border-0 bg-[#fff] rounded-[5px] px-1 gap-2
              relative left-0 transition-all ease-in-out duration-500
              ${isOpen? 'bg-[#fff]':'bg-transparent'}`} onClick={()=>toggleSidebar()}>
              <button className={`rounded-[10px] w-[2.8em] h-[90%] flex justify-center items-center
                 ${isOpen? 'text-[#151515]':'text-[#fff]'}`}>
                <MagnifyingGlassIcon className="size-6"/>
              </button>
              <input type="text" placeholder="search here..." 
                className={`
                  bg-[#fff] w-[100%] h-[100%] focus:border-0 
                  focus:outline-0 rounded-[5px] text-[1em] ${montserrat.className} ${isOpen? 'inline':'hidden'} `}/>
            </span>
          </div>
    )
}