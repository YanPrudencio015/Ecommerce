'use client'
import Image from "next/image";


// contexts
import { UseSidebar } from "../contexts/SidebarContext";

// icons
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

// fonts
import {Orbitron, Roboto, Montserrat } from "next/font/google"
import { useEffect } from "react";


const orbitron = Orbitron({weight:"400", subsets:["latin"]});
const roboto = Roboto({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"400", subsets:["latin"]});


// login options only appears whe the size is larger than mobiles sizes
export default function Header(){

    const {isOpen, toggleSidebar} = UseSidebar();

    return(
        <div className="bg-[#151515]
                        fixed
                        z-50
                        h-[4em] 
                        w-full 
                        flex 
                        justify-between 
                        items-center 
                        px-[3%] 
                        before:absolute 
                        before:bottom-0 
                        before:left-[50%] 
                        before:translate-x-[-50%] 
                        before:translate-y-[-50%] 
                        before:w-[70%] 
                        before:h-[1px] 
                        rounded-0">

                            {/* Menu bars button */}
                        <button   className="
                        lg:w-[7em]
                        sm:duration-300
                        ease-in
                        cursor-pointer
                        sm:relative
                        sm:before:absolute
                        sm:before:bottom-0
                        sm:before:right-[100%]
                        sm:hover:before:right-0
                        sm:before:w-full
                        sm:before:h-[1px]
                        sm:before:bg-white
                        sm:before:transition-all
                        sm:overflow-hidden
                        lg:rounded-[5px]
                        sm:flex
                        sm:justify-center
                        sm:items-center
                    " onClick={()=>{toggleSidebar()}}
                    >
                            <Bars3BottomLeftIcon className="text-[#fff] 
                                size-7
                                lg:hidden
                                
                                "/>
                            <h1 className={`hidden
                                lg:inline 
                                ${orbitron.className} text-[#fff]`}>LevelUp</h1>
                        </button>
                        <h1 className={`lg:hidden ${orbitron.className} text-[#fff]`}>LevelUp</h1>
                            {/* user's navbar list*/}
                        <ul className="
                            border-[#fff]
                            w-[13em] 
                            h-[100%]
                            flex
                            justify-center
                            items-center
                            flex-row
                            gap-7
                            sm:w-[36em]
                            lg:w-[50em]
                            ">
                                {/* search icon and input text */}
                            <li className="relative 
                            w-[3em] h-full 
                            border-0                            
                            justify-center 
                            items-center
                            hidden
                            sm:flex
                            sm:flex-row
                            sm:justify-between
                            sm:border-0
                            sm:items-center
                            sm:w-[15em]
                            lg:w-[20em]
                            ">
                                <span className="w-[90%]
                                    h-[1.8em]
                                    px-0.5
                                    border-0
                                    flex
                                    justify-between
                                    flex-row
                                    items-center
                                    rounded-[5px]
                                    bg-[#fff]
                                    sm:w-[100%]
                                    sm:px-0
                                    lg:w-[100%]
                                    lg:h-[2em]
                                ">
                                    <input type="text" className={`w-[100%]
                                        bg-transparent
                                        focus:outline-0
                                        focus:border-0
                                        text-[#000]
                                        ${roboto.className}
                                        `}
                                        placeholder="Press / to search games"></input>
                                    <button className="w-[2em]
                                        h-[100%]
                                        bg-[#151515]
                                        flex
                                        justify-center
                                        items-center
                                        rounded-[2px]
                                        cursor-pointer
                                        sm:border[#fff]
                                        sm:border-1
                                        ">
                                        <MagnifyingGlassIcon className=" hidden 
                                        size-5
                                        sm:flex
                                        sm:justify-center
                                        sm:items-center
                                        text-[#fff]
                                        rounded-2xl
                                        "/>
                                </button>
                                </span>
                            </li>
                            {/* wish icon button */}
                            <li className="relative 
                                w-[3em] h-full 
                                border-0 
                                border-[#fff] 
                                flex 
                                justify-center 
                                items-center
                                cursor-pointer
                                group
                            ">
                                <HeartIcon className="
                                text-[#fff] 
                                size-7
                                "
                                />
                                <span className={`absolute 
                                right-[-1em] 
                                bottom-[2.3em] 
                                w-[2.5em] 
                                h-[1.9em] 
                                rounded-[5px] 
                                border-0 
                                bg-[#9d14ff] 
                                flex 
                                justify-center 
                                items-center 
                                text-[.9em]
                                ${orbitron.className}`}>+99</span>
                            </li>
                            {/* cart icon button */}
                            <li className="relative 
                                w-[3em] 
                                h-full 
                                border-0 
                                border-[#fff] 
                                flex 
                                justify-center 
                                items-center
                                cursor-pointer
                            ">

                                <ShoppingBagIcon className="text-[#fff] 
                                size-7"/>
                                <span className={`absolute 
                                right-[-1em] 
                                bottom-[2.3em] 
                                w-[2.5em] 
                                h-[1.9em] 
                                rounded-[5px] 
                                border-0 
                                bg-[#00993d] 
                                flex 
                                justify-center 
                                items-center 
                                text-[.9em]
                                ${orbitron.className}`}>+99</span>
                            </li>
                            {/* Login icon/text */}
                            <li className="border-0
                            cursor-pointer
                            border-[#fff]
                            w-[3em] sm:w-[10em]
                            h-[2.5em]
                            rounded-[5px]
                            flex
                            justify-center sm:justify-between
                            items-center
                            flex-row 
                            bg-[#068FFF] 
                            sm:bg-transparent
                            sm:border-l-1
                            sm:rounded-[0px]
                            sm:pl-1.5
                            sm:relative
                            ">
                                                            {/* bg-[#068FFF] */}
                                <UserIcon className="text-[#fff] 
                                               
                                                    sm:w-[1.5em]
                                                    sm:h-[1.5em]
                                                    size-7
                                                    sm:size-1"/>

                                {/* <Image 
                                    src="/playerPhoto.jpg" 
                                    alt="user Image" 
                                    width={300}
                                    height={300}
                                    className="w-[3em]
                                    h-[3em]
                                    rounded-[2em]
                                    border-1
                                    outline-1
                                    outline-[#fff]
                                    border-[#fff]
                                    cursor-pointer
                                    sm:w-[2em]
                                    sm:h-[2em]
                                    sm:outline-0
                                    "
/> */}
                                <span className={`hidden
                                                sm:inline
                                                text-[.8em]
                                                ${montserrat.className} text-[#fff]`}>Hello, UserName</span>
                            </li>
                        </ul>
                     
        </div>
    )
}

