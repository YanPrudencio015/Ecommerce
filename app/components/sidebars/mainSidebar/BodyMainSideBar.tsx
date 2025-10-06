  import { useEffect, useState } from "react"


  import {Bebas_Neue, Montserrat} from "next/font/google";

// fontes
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "500", subsets: ["latin"] });


// icon heroicon
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
// icon FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons"
import { faXbox } from "@fortawesome/free-brands-svg-icons"
import { faComputer } from "@fortawesome/free-solid-svg-icons"
import { faTag } from "@fortawesome/free-solid-svg-icons"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"


// providers
  import { UseSidebar } from "@/app/contexts/SidebarContext";


export default function BodyMainSidebar(){

      const [handleDropDownButton, sethandleDropDown] = useState<boolean[]>([false, false])

      // condition when sidebar size change

      const {isOpen, toggleSidebar} = UseSidebar();


      
      function handleDropDown(index:number){
        sethandleDropDown(prev=> prev.map((_,i)=> i === index? !prev[i]: false))
        if(isOpen === false){
          toggleSidebar()
        }
      }

    useEffect(()=>{
      if(isOpen === false){
        sethandleDropDown([false, false]);
      }
    },[isOpen])

      const dropdownsLists =[
     [
           {
            animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-600 " : "-translate-x-[300px] delay-100"}`,
            faUIcon:faTag, 
            size:[["size-5"]],
            name:"New"    
        },
        {
            animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-800 " : "-translate-x-[300px] delay-300"}`,
            faUIcon:faLayerGroup, 
            size:[["size-5"]],
            name:"categories"    
        },
        {
            animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-900 " : "-translate-x-[300px] delay-400"}`,
            faUIcon:faComputer, 
            size:[["size-5"]],
            name:"PC"    
        },
        {
            animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-1000 " : "-translate-x-[300px] delay-500"}`,
            faUIcon:faXbox, 
            size:[["size-5"]],
            name:"Xbox"    
        },
        {
            animationCondition:`${handleDropDownButton[0] ? "translate-x-0 delay-1100 " : "-translate-x-[300px] delay-600"}`,
            faUIcon:faPlaystation, 
            size:[["size-5"]],
            name:"PlayStation"    
        },
     ],
    
     [
           {
            animationCondition:`${handleDropDownButton[1] ? "translate-x-0 delay-600 " : "-translate-x-[300px] delay-100"}`,
            faUIcon:faComments, 
            size:[["size-5"]],
            name:"Messages"    
        },
           {
            animationCondition:`${handleDropDownButton[1] ? "translate-x-0 delay-700 " : "-translate-x-[300px] delay-200"}`,
            faUIcon:faNewspaper, 
            size:[["size-5"]],
            name:"News"    
        },
           {
            animationCondition:`${handleDropDownButton[1] ? "translate-x-0 delay-800 " : "-translate-x-[300px] delay-300"}`,
            faUIcon:faUserGroup, 
            size:[["size-5"]],
            name:"Friends"    
        },
           {
            animationCondition:`${handleDropDownButton[1] ? "translate-x-0 delay-1100 " : "-translate-x-[300px] delay-600"}`,
            faUIcon:faUsers, 
            size:[["size-5"]],
            name:"Communities"    
        },
     ]
    
    ]


    return(
      <ul className={`w-[90%] m-2.5 flex justify-center gap-1.5 flex-col  
          transform transition-all ease-in-out rounded-[.5em] overflow-hidden
          items-center ${handleDropDownButton.some( isOpen => isOpen)? 'h-[38em] delay-150  duration-750': 
            'h-[25em] delay-700  duration-750'}          
          `}>

            {/* your game button */}
            <li className="w-[95%] h-[3em] text-[#fff] items-center
                flex-row">
              <button className=" w-full h-full flex justify-center px-0.5 items-center
                flex-row rounded-[.5em] active:bg-[#fff] active:text-[#000] focus:bg-[#fff] focus:text-[#151515]">
                  <RectangleStackIcon className="size-7"/>
                  <p className={`w-[80%] h-full justify-center
                  items-center ${bebasNeue.className}
                  transform transition-all duration-300 ease-in-out
                  ${isOpen? 'flex': 'hidden'}
                  `}>Your Game</p>
              </button>
            </li>

            {/* news button */}
            <li className="w-[95%] h-[3em] text-[#fff] items-center
                flex-row">
              <button className={`w-full h-full flex justify-center px-0.5 items-center
                flex-row rounded-[.5em] active:bg-[#fff] active:text-[#000]
                focus:bg-[#fff] focus:text-[#151515]`}>
                  <MegaphoneIcon className="size-7"/>
                  <p className={`w-[80%] h-full justify-center
                  items-center ${bebasNeue.className} ${isOpen? 'flex': 'hidden'}`}>News</p>
              </button>
            </li>
                      
            {/* Dropdown 1 */}    
            <li className={`w-full  text-[#fff] flex items-center flex-col 
                        bg-[#151515] overflow-hidden relative
                          transform transition-all duration-600 ease-in-out
                          ${handleDropDownButton[0]? `h-[20em] delay-75`:`h-[3em] delay-800`}
                          `}>
              <button className=" w-full h-[3em] bg-[#151515] flex justify-center px-0.5 items-center z-20
                flex-row active:bg-[#fff] active:text-[#151515]" onClick={()=> handleDropDown(0)}>
                  <ShoppingBagIcon className="size-7"/>
                  <p className={`w-[80%] h-full  flex justify-end gap-9  
                    items-center ${bebasNeue.className}  ${isOpen? 'flex': 'hidden'}`}>Store
                    <ChevronDownIcon className={`size-5
                      transform transition-transform duration-500 ease-in
                      ${handleDropDownButton[0]? `rotate-180`:`rotate-0 duration-200 `}`}/>
                  </p>
              </button>
              <ul className={` w-[90%] h-[15em] flex flex-col bg-[#151515]
                transform transition-transform duration-800 ease-in-out
                items-center justify-center gap-3 absolute ${handleDropDownButton[0]? `translate-y-12 delay-75`:`translate-y-[-550px] delay-800`}`}>
 
                    {dropdownsLists[0].map((value, index)=>(
                      <li key={index} className={`w-full h-[2.5em] border-0
                          transform transition-all duration-300 ease-in-out rounded-[.5em]
                          ${value.animationCondition}
                        `}>
                        <button className={`w-full h-full flex justify-center items-center gap-1
                        `}>
                            <div className="w-[2em] h-[2em] bg-[#fff] rounded-[.5em] flex justify-center items-center
                            text-[#151515]  ">
                              <FontAwesomeIcon icon={value.faUIcon} className={`value.size`}/>
                            </div>
                            <p className={` ${montserrat.className} w-[8em] h-full flex justify-center items-center`}>{value.name}</p>
                        </button>
                      </li>
                    ))}
                  
                </ul>
            </li>



            {/* Dropdown 2 */}
             <li className={`w-full  text-[#fff] flex items-center flex-col 
                        bg-[#151515] overflow-hidden relative
                          transform transition-all duration-600 ease-in-out
                          ${handleDropDownButton[1]? `h-[20em] delay-75`:`h-[3em] delay-800`}
                          `}>
              <button className=" w-full h-[3em] bg-[#151515] flex justify-center px-0.5 items-center z-20
                flex-row active:bg-[#fff] active:text-[#151515]" onClick={()=> handleDropDown(1)}>
                  <GlobeAltIcon className="size-7"/>
                  <p className={`w-[80%] h-full  flex justify-end gap-9  
                  items-center ${bebasNeue.className}  ${isOpen? 'flex': 'hidden'}`}> Network
                  <ChevronDownIcon className={`size-5
                      transform transition-transform duration-500 ease-in
                      ${handleDropDownButton[1]? `rotate-180`:`rotate-0 duration-200 `}`}/>
                  </p>
              </button>
              <ul className={` w-[90%] h-[15em] flex flex-col bg-[#151515]
                transform transition-transform duration-800 ease-in-out
                items-center justify-center gap-3 absolute ${handleDropDownButton[1]? `translate-y-12 delay-75`:`translate-y-[-550px] delay-800`}`}>
 
                    {dropdownsLists[1].map((value, index)=>(
                      <li key={index} className={`w-full h-[2.5em] border-0
                          transform transition-all duration-300 ease-in-out rounded-[.5em]
                          ${value.animationCondition}
                        `}>
                        <button className={`w-full h-full flex justify-center items-center gap-1 
                        focus:bg-[#fff] focus:text-[#151515]
                        `}>
                            <div className="w-[2em] h-[2em] bg-[#fff] rounded-[.5em] flex justify-center items-center
                            text-[#151515]  ">
                              <FontAwesomeIcon icon={value.faUIcon} className={`value.size`}/>
                            </div>
                            <p className={` ${montserrat.className} w-[8em] h-full flex justify-center items-center`}>{value.name}</p>
                        </button>
                      </li>
                    ))}
                </ul>
            </li>

              <li className="w-full h-[3em] text-[#fff] flex justify-center items-center">
              <button className=" w-[90%] h-full flex justify-center px-0.5 items-center
                flex-row rounded-[.5em] active:bg-[#fff] active:text-[#000]
                focus:bg-[#fff] focus:text-[#151515]
                ">
                  <InformationCircleIcon className="size-7"/>
                  <p className={`w-[80%] h-full flex justify-center 
                  items-center ${bebasNeue.className}  ${isOpen? 'flex': 'hidden'}`}>Suport</p>
              </button>
            </li>
            <li className="w-[95%] h-[3em] text-[#fff] items-center
                flex-row">
              <button className=" w-full h-full flex justify-center px-0.5 items-center
                flex-row rounded-[.5em] active:bg-[#fff] active:text-[#000]
                focus:bg-[#fff] focus:text-[#151515]">
                  <Cog8ToothIcon className="size-7"/>
                  <p className={`w-[80%] h-full flex justify-center
                  items-center ${bebasNeue.className}  ${isOpen? 'flex': 'hidden'}`}>Settings</p>
              </button>
            </li>
          </ul>
    )
}