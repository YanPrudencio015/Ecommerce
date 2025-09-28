'use client'
'use client'
import { 
  Geist, 
  Geist_Mono, 
  Orbitron, 
  Roboto, 
  Inter, 
  Russo_One, 
  Open_Sans as OpenSans, 
  Fredoka, 
  Baloo_2, 
  Nunito,  
  Bebas_Neue, 
  Montserrat, 
  Lato
} from "next/font/google";



import BodyMainSidebar from "./BodyMainSideBar";
import HeaderMainSidebar from "./HeaderMainSideBar";
// fontes
const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });
const russoOne = Russo_One({ weight: "400", subsets: ["latin"] });
const openSans = OpenSans({ weight: "400", subsets: ["latin"] });
const fredoka = Fredoka({ weight: "400", subsets: ["latin"] });
const baloo2 = Baloo_2({ weight: "600", subsets: ["latin"] });
const nunito = Nunito({ weight: "700", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] }); // só 400
const montserrat = Montserrat({ weight: "500", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });


// icon heroicon
import { HomeIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

// icon FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons"
import { faXbox } from "@fortawesome/free-brands-svg-icons"
import { faComputer } from "@fortawesome/free-solid-svg-icons"
import { faTag } from "@fortawesome/free-solid-svg-icons"
import { faGridVertical } from "@fortawesome/free-solid-svg-icons"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { faFaceMehBlank } from "@fortawesome/free-solid-svg-icons"


import { useEffect, useState } from "react"
export default function MainSidebar() {

  const [handleDropDownButton, sethandleDropDown] = useState<boolean[]>([false, false])

  function handleDropDown(index:number){
    sethandleDropDown(prev=> prev.map((_,i)=> i === index? !prev[i]: false))
  }


  useEffect(()=>{
    console.log(handleDropDownButton)
  },[handleDropDownButton])


  return (
<div
  className="text-[#000] w-[14em] h-[100vh] bg-[#151515] border border-[#fff] 
  fixed top-[4em] overflow-auto pb-[5em] scrollbar-hide"
>

        {/*sidebar Header  */}
          <HeaderMainSidebar/>
        {/* Sidebar Body */}
          <BodyMainSidebar/>
    </div>
  );
}
