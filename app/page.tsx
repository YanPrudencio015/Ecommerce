"use client";

// pages

import LoginPage from "./pages/loginPage/loginPage";

//components
import Header from "./components/Header";
import MainSidebar from "./components/sidebars/mainSidebar/MainSidebar";
import Body from "./components/body/Body";

import Form from "next/form";

import {
  Geist,
  Geist_Mono,
  Orbitron,
  Roboto,
  Inter,
  Russo_One,
  Audiowide,
  Open_Sans,
  Fredoka,
  Baloo_2,
  Nunito,
  Bebas_Neue,
  Montserrat,
  Lato,
} from "next/font/google";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });
const russoOne = Russo_One({ weight: "400", subsets: ["latin"] });
const audioWise = Audiowide({ weight: "400", subsets: ["latin"] });
const OpenSans = Open_Sans({ weight: "400", subsets: ["latin"] });
const fredoka = Fredoka({ weight: "400", subsets: ["latin"] });
const baloo2 = Baloo_2({ weight: "600", subsets: ["latin"] });
const nunito = Nunito({ weight: "700", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

import { useLoading } from "./contexts/LoadingContext";
import { useEffect } from "react";
import SidebarComponent from "./components/sidebars/SidebarComponent";

export default function Home() {
  const { isloaded, ToggleLoading } = useLoading();
  const allComponentsLoaded = isloaded.every((status) => status === true);
  useEffect(() => {
    // console.log("//////////////////////////////")
    // console.log("isloaded: ", isloaded)
  }, [isloaded]);
  return (
    <div className="text-[#000] border-0 outline-0 box-border">
      <div
        className={`w-full h-screen  fixed flex justify-center items-center text-white
          ${
            allComponentsLoaded === false
              ? "bg-[#151515] z-10000000"
              : "bg-transparent pointer-events-none z-[-10]"
          }`}
      >
        Level UP
      </div>
      <Header />
      <MainSidebar />
      <SidebarComponent />
      <Body />
    </div>

    // <LoginPage />
  );
}
