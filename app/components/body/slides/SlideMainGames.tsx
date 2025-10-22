'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

// swipper
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// fonts
import { Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato,} from "next/font/google";


// heroIcons
import { HeartIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/16/solid";

const orbitron = Orbitron({weight:"800", subsets:["latin"]});
const roboto = Roboto({weight:"800", subsets:["latin"]});
const inter = Inter({weight:"400", subsets:["latin"]});
const russoOne = Russo_One ({weight:"400", subsets:["latin"]});
const audioWise = Audiowide({weight:"400", subsets:["latin"]});
const OpenSans = Open_Sans({weight:"300", subsets:["latin"]})
const fredoka = Fredoka({weight:"300", subsets:["latin"]});
const baloo2 = Baloo_2({weight:"600", subsets:["latin"]});
const nunito = Nunito({weight:"700", subsets:["latin"]});
const bebasNeue = Bebas_Neue({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"800", subsets:["latin"]});
const lato = Lato({weight:"400", subsets:["latin"]});

type MostPopularprops ={
    windowSize: number
}
export default function SlideMainGames({windowSize}: MostPopularprops){

    const [mainGames, setMainGames] = useState<any[]>([])
    const[gameCollections, setGamesCollections] = useState<any[]>([])

     useEffect(()=>{
            async function loagames(){
                const data = await fetch('api/games?type=main');
                const res = await data.json()
               setMainGames(res)
               try{
    
                   if(Array.isArray(res)){
                    } else{
                        console.log('error on API response: ', res)
                    }
                } catch(error){
                    console.log ("error to load the games: ", res)
                }
            }
             loagames()
        },[])



    // separing arrays API in three subarrays
        useEffect(()=>{
        
            const nelementsArray = 7;
            var GamesArray = []


            for(let i=0; i < mainGames.length; i += nelementsArray){
                GamesArray.push(mainGames.slice(i, i+nelementsArray))
            }
            
            setGamesCollections(GamesArray)
            
        },[mainGames])

    function calculate(value:number):number{
        if(value <= 500) return 2
        if(value <= 640) return 4
        if(value <= 1024) return 5
        if(value <= 1280) return 7
        return 7
    }


    function normalizeRating(rating:number|null):number | null{
        
        if(rating === null ) return null;

        const normalized:number = rating / 20;
        const routed:number = Math.round(normalized * 10) / 10;

        console.log("internet: ", routed)
        return routed
    }
        

    // Top New Releases
    return(
        <div className="w-full h-[50em] mt-[5em] text-[#fff] lg:h-[70em] sm:h-[60em] p-1">
            <p className={`${bebasNeue.className} w-full h-[3em]  p-3 flex justify-start
            items-center text-[1.5em]`}>Top New Releases</p>
            <div className=" w-full h-[13em] lg:h-[60em] p-2">
                <Swiper
                    slidesPerView={calculate(windowSize)}
                    spaceBetween={10} loop={true}
                    className={`mySwiper w-full h-full hidden my-5 sm:my-7 lg:my-16 lg:h-[15em] `}
                >
                    {gameCollections[0]?.map((value:any,index:number)=>(
                        <SwiperSlide key={index} className={`rounded-0 hidden 
                            relative z-20 group overflow-hidden transition-all duration-100 ease-in-out
                            cursor-pointer 
                            `}>
                            <Image 
                                src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`} 
                                alt="game image name" width={500} height={1500} 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className=" object-fill absolute
                                w-[100%] h-[100%] rounded-0 brightness-90 group-hover:brightness-110
                                scale-100 group-hover:scale-110
                                transition-all duration-1000 ease-in-out "/>
                            <div className="w-full h-[4em] lg:h-[4em] background:rgba(0, 0, 0, 0.3)
                                shadow-lg  backdrop-blur-[7.7px] absolute
                                bottom-0 z-10 flex justify-around items-center flex-col text-center">
                               <p className={`${inter.className} text-[.5em]`}>{value.name}</p>
                                <div className="w-full flex justify-between flex-row px-1.5">
                                    <div className=" flex flex-row justify-center gap-0.5">
                                        <StarIcon className="size-5" />
                                        <p className={`${nunito.className} font-light`}>
                                            {normalizeRating(value.rating) }
                                        </p>
                                    </div>
                                    <span className={`${montserrat.className} w-[4em]  bg-[#068FFF] text-[.9em] font-bold 
                                    rounded-[.2em] flex justify-center items-center`}>$55.90</span>
                                </div>
                            </div>
                        
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    slidesPerView={calculate(windowSize)}
                    spaceBetween={10} loop={true}
                    className={`mySwiper w-full h-full hidden my-5 sm:my-7 lg:my-16 lg:h-[15em] `}
                >
                    {gameCollections[1]?.map((value:any,index:number)=>(
                        <SwiperSlide key={index} className={`rounded-0 hidden 
                            relative z-20 group overflow-hidden transition-all duration-100 ease-in-out
                            cursor-pointer 
                            `}>
                            <Image 
                                src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`} 
                                alt="game image name" width={500} height={1500} 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className=" object-fill absolute
                                w-[100%] h-[100%] rounded-0 brightness-90 group-hover:brightness-110
                                scale-100 group-hover:scale-110
                                transition-all duration-1000 ease-in-out "/>
                            <div className="w-full h-[4em] lg:h-[4em] background:rgba(0, 0, 0, 0.3)
                                shadow-lg  backdrop-blur-[7.7px] absolute
                                bottom-0 z-10 flex justify-around items-center flex-col text-center">
                               <p className={`${inter.className} text-[.5em]`}>{value.name}</p>
                                <div className="w-full flex justify-between flex-row px-1.5">
                                    <div className=" flex flex-row justify-center gap-0.5">
                                        <StarIcon className="size-5" />
                                        <p className={`${nunito.className} font-light`}>
                                            {normalizeRating(value.rating) }
                                        </p>
                                    </div>
                                    <span className={`${montserrat.className} w-[4em]  bg-[#068FFF] text-[.9em] font-bold 
                                    rounded-[.2em] flex justify-center items-center`}>$55.90</span>
                                </div>
                            </div>
                        
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    slidesPerView={calculate(windowSize)}
                    spaceBetween={10} loop={true}
                    className={`mySwiper w-full h-full hidden my-5 sm:my-7 lg:my-16 lg:h-[15em] `}
                >
                    {gameCollections[2]?.map((value:any,index:number)=>(
                        <SwiperSlide key={index} className={`rounded-0 hidden 
                            relative z-20 group overflow-hidden transition-all duration-100 ease-in-out
                            cursor-pointer 
                            `}>
                            <Image 
                                src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`} 
                                alt="game image name" width={500} height={1500} 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className=" object-fill absolute
                                w-[100%] h-[100%] rounded-0 brightness-90 group-hover:brightness-110
                                scale-100 group-hover:scale-110
                                transition-all duration-1000 ease-in-out "/>
                            <div className="w-full h-[4em] lg:h-[4em] background:rgba(0, 0, 0, 0.3)
                                shadow-lg  backdrop-blur-[7.7px] absolute
                                bottom-0 z-10 flex justify-around items-center flex-col text-center">
                               <p className={`${inter.className} text-[.5em]`}>{value.name}</p>
                                <div className="w-full flex justify-between flex-row px-1.5">
                                    <div className=" flex flex-row justify-center gap-0.5">
                                        <StarIcon className="size-5" />
                                        <p className={`${nunito.className} font-light`}>
                                            {normalizeRating(value.rating) }
                                        </p>
                                    </div>
                                    <span className={`${montserrat.className} w-[4em]  bg-[#068FFF] text-[.9em] font-bold 
                                    rounded-[.2em] flex justify-center items-center`}>$55.90</span>
                                </div>
                            </div>
                        
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}












