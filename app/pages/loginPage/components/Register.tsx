"use client";

import Form from "next/form";
import { Orbitron, Open_Sans, Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });
const OpenSans = Open_Sans({ weight: "400", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

interface Props {
  isRegister: boolean;
  setIsRegister: (value: boolean) => void;
}

export default function RegisterForm({ isRegister, setIsRegister }: Props) {
  return (
    //
    <Form
      className="w-[90%] flex justify-center items-center py-4 flex-col absolute top-20"
      action={"/"}
    >
      {/* section for Google and Discord buttons */}
      <div className="w-full h-[3em] flex justify-center gap-3 flex-row">
        <button
          className=" w-[3em] rounded-[10px] flex justify-center items-center border-2 border-[#068FFF] text-[#151515] active:scale-90
        active:text-white active:bg-[#068FFF]"
        >
          <FontAwesomeIcon icon={faGoogle} className="text-[1.5em] z-10" />
        </button>
        <button
          className=" w-[3em] rounded-[10px] flex justify-center items-center border-2 border-[#068FFF] text-[#151515] active:scale-90
        active:text-white active:bg-[#068FFF]"
        >
          <FontAwesomeIcon icon={faDiscord} className="text-[1.5em] z-10" />
        </button>
      </div>
      {/* section with inputs */}
      <div className=" w-full h-[7em] flex flex-col items-center justify-center">
        <label
          className={`w-full h-[2em] ${bebasNeue.className} md:text-[1.4em]`}
        >
          E-mail
        </label>
        <input
          className={`w-full h-[3em] md:h-[2.5em] border-0 outline-0 rounded-[5px] bg-[#ECECEC]
                ${OpenSans.className} px-2 md:text-black md:text-[1.4em]`}
          type="email"
          placeholder="Your email or user name"
        ></input>
      </div>
      <div className=" w-full h-[7em] flex flex-col items-center justify-center">
        <label
          className={`w-full h-[2em] ${bebasNeue.className} md:text-[1.4em]`}
        >
          Username
        </label>
        <input
          className={`w-full h-[3em] md:h-[2.5em] border-0 outline-0 rounded-[5px] bg-[#ECECEC]
                ${OpenSans.className} px-2 md:text-black md:text-[1.4em]`}
          type="text"
          placeholder="Your email or user name"
        ></input>
      </div>
      <div className=" w-full h-[7em] flex flex-col items-center justify-center">
        <label
          className={`w-full h-[2em] ${bebasNeue.className} md:text-[1.4em]`}
        >
          Password
        </label>
        <input
          className={` px-2 w-full h-[3em] md:h-[2.5em] border-0 outline-0 rounded-[5px] bg-[#ECECEC]
                ${OpenSans.className} md:text-[1.4em] md:text-[#151515]`}
          type="password"
          placeholder="********"
        ></input>
      </div>
      <div className=" w-full h-[7em] flex flex-col items-center justify-center">
        <label
          className={`w-full h-[2em] ${bebasNeue.className} md:text-[1.4em]`}
        >
          Confirm Password
        </label>
        <input
          className={` px-2 w-full h-[3em] md:h-[2.5em] border-0 outline-0 rounded-[5px] bg-[#ECECEC]
                ${OpenSans.className} md:text-[1.4em] md:text-[#151515]`}
          type="password"
          placeholder="********"
        ></input>
      </div>

      {/* <div className="w-full h-[3em] flex justify-between flex-row  items-center">
        <Link href={"/"} className="text-[.8em] active:text-[#068FFF]">
          Forgot Password
        </Link>
        <label className="text-[.8em] active:text-[#068FFF] flex items-center gap-5">
          Remember me
          <input type="checkbox" />
        </label>
      </div> */}

      <button
        type="submit"
        className={`w-[80%] h-[3em] md:h-[2em] rounded-3xl border-2 border-[#068FFF] 
                 ${bebasNeue.className} transition-all duration-75 md:mt-5
                ease-in-out transform active:scale-90 md:text-[1.5em]
                `}
      >
        Register
      </button>

      <button
        className={`${bebasNeue.className} h-[2em] w-[80%] mt-7 border-b hover:text-[#BF092F]
              md:text-[1.5em]`}
        onClick={() => setIsRegister(!isRegister)}
      >
        Welcome back! Log in to your account.
      </button>
    </Form>
  );
}
