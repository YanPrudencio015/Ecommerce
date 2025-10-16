'use client'
import { useEffect, useState } from "react";

// swipper
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// fonts
import { Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato,} from "next/font/google";

// images
import Image from "next/image";
import GameImage from '@/public/GameImages/game3.jpg'


type MostPopularprops ={
    windowSize: number
}



const orbitron = Orbitron({weight:"800", subsets:["latin"]});
const roboto = Roboto({weight:"800", subsets:["latin"]});
const inter = Inter({weight:"400", subsets:["latin"]});
const russoOne = Russo_One ({weight:"400", subsets:["latin"]});
const audioWise = Audiowide({weight:"400", subsets:["latin"]});
const OpenSans = Open_Sans({weight:"300", subsets:["latin"]})
const fredoka = Fredoka({weight:"400", subsets:["latin"]});
const baloo2 = Baloo_2({weight:"600", subsets:["latin"]});
const nunito = Nunito({weight:"700", subsets:["latin"]});
const bebasNeue = Bebas_Neue({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"300", subsets:["latin"]});
const lato = Lato({weight:"400", subsets:["latin"]});



export default function MostPopular({windowSize}: MostPopularprops){

    const[currentSize,setCurrentSize] = useState<number>(0)


    const[popularGames, setPopularGames] = useState<any[]>([])


    useEffect(()=>{
        async function loagames(){
            const data = await fetch('api/games');
            const res = await data.json()
            setPopularGames(res)
           
           try{

               if(Array.isArray(res)){
                   setPopularGames(res)
                } else{
                    console.log('error on API response: ', res)
                    setPopularGames([])
                }
            } catch(error){
                console.log ("error to load the games: ", res)
                setPopularGames([])
            }
        }
         loagames()
    },[])



    function calculate(value:number):number{
        if(value <= 500) return 1
        if(value <= 640) return 2
        if(value <= 1024) return 3
        if(value <= 1280) return 4
        return 5
    }

    return(
        <div className="w-full h-[25em] sm:h-[20em] bg-[#151515] flex justify-center 
        items-center flex-col sm:justify-start sm:items-start
            text-[#fff] gap-1.5">
                <h1 className={`${montserrat.className} text-[1.5em] `}>Must Popular Games</h1>
        <Swiper
            slidesPerView={calculate(windowSize)}
            spaceBetween={30} loop={true}
            // autoplay={{ delay: 3500, disableOnInteraction: false,}} modules={[Autoplay]}
            className={`mySwiper w-full h-full hidden`}>
            
            {popularGames.map((value,index)=>(
            <SwiperSlide key={index} className={` relative rounded-[1em] !flex 
                justify-center items-center flex-col `}>
                <div className=" w-[60%] sm:w-[75%] h-[80%] sm:h-[80%] relative 
                    ">
                    <Image 
                        src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`} 
                        alt="game image name" width={900} height={900} 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className=" object-fill rounded-[1em] rounded-b-[0em] sm:rounded-[0em]
                        w-[100%] h-[100%]"/>
                </div>
                <div className="w-[60%] sm:w-full flex justify-center items-center text-center">
                    <p className={`${OpenSans.className} text-[1em]`}>{value.name}</p>
                </div>
            </SwiperSlide>

            ))}
        </Swiper>
        </div>
    )
}










