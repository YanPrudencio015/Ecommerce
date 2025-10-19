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

import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

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
const montserrat = Montserrat({weight:"300", subsets:["latin"]});
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
            
            console.log(GamesArray)
            setGamesCollections(GamesArray)
            
        },[mainGames])

    

        useEffect(()=>{
            console.log("Natal: ", gameCollections[0])
        },[gameCollections])


    function calculate(value:number):number{
        if(value <= 500) return 2
        if(value <= 640) return 4
        if(value <= 1024) return 5
        if(value <= 1280) return 7
        return 7
    }
        

    // Top New Releases
    return(
        <div className="w-full h-[50em] text-[#fff]  p-1">
            <p className={`${inter.className}`}>Top New Releases</p>
            <div className=" w-full h-[13em]">
            <Swiper
                slidesPerView={calculate(windowSize)}
                spaceBetween={10} loop={true}
                className={`mySwiper w-full h-full hidden my-5`}
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
                        <div className="w-full h-[3em] background:rgba(0, 0, 0, 0.3)
                             
                            shadow-lg  backdrop-blur-[7.7px] absolute
                            bottom-0 z-10 flex justify-around items-center flex-col text-center">
                            <p className={`${lato.className} text-[.6em]`}>{value.name}</p>
                            <div className="w-full h-[2em] flex justify-around items-center">
                                <p className={` ${fredoka.className} w-[4em] rounded-[2em]
                                    `}>$55.99</p>
                                <div className="flex justify-around h-full w-[3.5em] items-center">
                                    <HeartIcon className="size-5 rounded-[5em] "/>
                                    <ShoppingBagIcon className="size-5 rounded-[5em]"/>
                                </div>
                            </div>
                        </div>
                    
                    </SwiperSlide>
                ))}
            </Swiper>




                </div>
        </div>
    )
}












