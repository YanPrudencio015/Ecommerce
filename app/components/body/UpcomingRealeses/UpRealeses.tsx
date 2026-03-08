"use client";

import React, { useRef, useState, useEffect } from "react";
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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// images
import GameImage from "../../../../public/GameImages/c9f078c260d79339cb581054ce5ca49f2b56ab943d1beb20.jpg";

// icons
import { BellAlertIcon } from "@heroicons/react/24/outline";
// import required modules
import { Scrollbar } from "swiper/modules";
import Image from "next/image";
import { button, style } from "motion/react-client";

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

export default function UpRealeses() {
  // Interval to change all the screenchots
  const [screenN, setScreenN] = useState(0);

  // get all games for API
  const [allGames, setAllgames] = useState<any>([]);

  // current slide
  const [curentSlide, setCurrentSlide] = useState(0);

  // check if the slide was clicked
  const [slideClicked, setSlideClicked] = useState(false);

  // change the state to save which slide was clicked
  const [clickedSlideIndex, setClickedSlideIndex] = useState<number | null>(
    null,
  );

  interface NotifyButton {
    id: number;
    isOpen: boolean;
  }

  // state to count how many buttons the user clicked and change the button color
  const [buttonsClicked, setButtonClicked] = useState<NotifyButton[]>([]);

  // useState to save the currency windown scren size
  const [screenSize, setScreenSize] = useState<number | null>(null);

  // function to get API data

  useEffect(() => {
    async function LoadUpcomingGames() {
      try {
        const data = await fetch("api/realeses");
        const res = await data.json();
        setAllgames(Array.isArray(res.results) ? res.results : []);
      } catch (error) {
        console.log("Erro ao carregar a API: ", error);
      }
    }

    LoadUpcomingGames();
  }, []);

  useEffect(() => {
    // Validação completa antes de acessar os dados
    if (
      clickedSlideIndex === null ||
      allGames.length === 0 ||
      !allGames[clickedSlideIndex] ||
      !allGames[clickedSlideIndex].short_screenshots ||
      allGames[clickedSlideIndex].short_screenshots.length === 0
    )
      return;

    const totalScreenshots =
      allGames[clickedSlideIndex].short_screenshots.length;
    let count = 0;

    const interval = setInterval(() => {
      count++;
      if (count >= totalScreenshots) {
        count = 0;
      }
      setScreenN(count);
    }, 5000);

    return () => clearInterval(interval);
  }, [clickedSlideIndex, allGames]);

  function ShowTheInfo(index: number) {
    setCurrentSlide(index);
    setScreenN(0);
    setSlideClicked(true);
    setClickedSlideIndex(index);
  }

  // useEffect to recaulculate the screen size and then change the numbers of slides

  useEffect(() => {
    function handleScreenSize() {
      setScreenSize(window.innerWidth);
    }
    handleScreenSize();

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  useEffect(() => {
    if (allGames.length > 0) {
      setButtonClicked(
        allGames.map((_: any, index: number) => ({ id: index, isOpen: false })),
      );

      console.log("Batman: ", allGames);
    }
  }, [allGames]);

  // function to check if the "notify me" button was clicked

  function alertActived(buttonIndex: number) {
    setButtonClicked((prev) => {
      // check if exists an Id like the index
      const exist = prev.some((b) => b.id === buttonIndex);

      if (exist) {
        //if true, it's going to return the object with the isOpen value changed
        return prev.map((button) =>
          button.id === buttonIndex
            ? { ...button, isOpen: !button.isOpen }
            : button,
        );
      }

      return [...prev, { id: buttonIndex, isOpen: true }]; // if not exist, will return everything, and create one
    });
  }

  return (
    <div className="w-full h-[30em] flex flex-col items-center justify-around">
      {/* title */}
      <h1
        className={`relative ${bebasNeue.className} text-[1.5em] w-full flex justify-center
                    text-center text-white before:absolute before:w-[70%] before:h-[1px] before:bottom-0
                    before:bg-[#fff]
                `}
      >
        Upcoming Releases
      </h1>

      <Swiper
        slidesPerView={screenSize !== null && screenSize >= 1024 ? 4 : 1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="mySwiper mySwiper w-[95%] h-[23em] rounded-2xl lg:rounded-[1em]"
      >
        {/* create All cards games */}
        {allGames.map((value: any, index: number) => (
          <SwiperSlide
            key={index}
            className="flex justify-center text-center items-center w-full h-screen  
                overflow-hidden group lg:rounded-[1em]"
            onClick={() => ShowTheInfo(index)}
          >
            <Image
              src={
                (clickedSlideIndex === index
                  ? value?.short_screenshots?.[screenN]?.image
                  : value?.background_image) || "/placeholder-image.jpg" // Use uma imagem placeholder
              }
              width={1000}
              height={900}
              alt={value.name}
              className="w-full h-full object-cover group-hover:scale-120
                    transition-all ease-out duration-100 lg:duration-700 lg:rounded-[1em]"
            />

            <div className="absolute z-30 w-full h-full bottom-0 flex justify-end items-end">
              <div
                className={`w-full h-[10em] bg-[#15151599] relative transition-all duration-300  
                    ${curentSlide === index ? "bottom-[0em]" : "bottom-[-15em]"}`}
              >
                <p
                  className={` w-full h-[3em] text-[1.5em] text-white flex justify-center items-center
                        ${roboto.className} capitalize relative transition-all duration-500 lg:text-[1em]
                        ${curentSlide === index ? "bottom-[0]" : "bottom-[-50em]"}
                        `}
                >
                  {value.name}
                </p>
                <div className=" flex justify-between flex-row w-full h-[100%] p-2.5">
                  {/* game genres */}
                  <div
                    className="flex flex-row gap-2 lg:gap-1 h-[4em] justify-center  
                        items-center lg:items-end flex-wrap "
                  >
                    {value.genres.map((value: any, indexGenre: number) => (
                      <p
                        key={indexGenre}
                        className={`text-[#fff] ${montserrat.className}
                                bg-[rgba(255,255,255,.2)] w-auto px-2 rounded-3xl relative transition-all
                                duration-600 cursor-default lg:text-[.7em]
                                    ${curentSlide === index ? "left-3" : "left-[-50em]"}
                                `}
                        style={{ transitionDelay: `${indexGenre * 0.8}s` }}
                      >
                        {value.name}
                      </p>
                    ))}
                  </div>
                  <button
                    onClick={() => alertActived(index)}
                    className={`border-0 text-white  rounded-[.5em] h-[3.5em] w-[8em]
                            flex justify-center items-center active:text-[#151515] 
                            relative transition-all duration-800 lg:h-[2em] lg:cursor-pointer lg:duration-75
                            lg:hover:text-black lg:hover:bg-white
                            ${curentSlide === index ? "right-0" : "right-[-50em]"}
                            
                            ${buttonsClicked[index]?.isOpen ? "bg-pink-700" : "bg-[#151515]"}`}
                  >
                    <span>
                      <BellAlertIcon className="size-7 lg:size-5" />
                    </span>
                    <p className={`${lato.className} lg:text-[.8em]`}>
                      Notify Me
                    </p>
                  </button>
                </div>

                {/* bars for game's screenshoots */}
              </div>
              <div
                className="absolute top-[2%] w-[99%] h-[2em]
                            translate-x-[-50%] left-[50%] flex justify-center items-center flex-row gap-1
                            overflow-hidden"
              >
                {value?.short_screenshots?.map(
                  (screen: string, indexScreen: number) => (
                    <div
                      key={indexScreen}
                      className="w-[2.5em] h-full flex justify-center 
                                    items-center"
                    >
                      <div
                        className={`
                                        w-[3em] lg:w-[1.5em] h-0.75 relative transition-all duration-500 before:absolute
                                        before:w-full before:h-full before:transition-all
                                        before:left-[-3em] overflow-hidden
                                        ${
                                          screenN == indexScreen
                                            ? "bg-white before:left-[0em] before:duration-500 before:bg-[#068FFF]"
                                            : "bg-white before:bg-transparent before:duration-0"
                                        } 
                                            ${
                                              curentSlide === index
                                                ? "left-[25%] translate-x-[-50%]"
                                                : "left-[-500em]"
                                            }`}
                        style={{ transitionDelay: `${indexScreen * 0.1}s` }}
                      ></div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
