'use client'
import { useEffect, useState } from "react";

// swipper
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// fonts
import { Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato, Yesteryear,} from "next/font/google";

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


    // get the currencly date 




    useEffect(()=>{
        async function loagames(){
            const data = await fetch('api/games?type=popular');
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


    useEffect(()=>{
        console.log("Music: ",popularGames)
    },[popularGames])



    function calculate(value:number):number{
        if(value <= 500) return 1
        if(value <= 640) return 2
        if(value <= 1024) return 3
        if(value <= 1280) return 4
        return 5
    }

    return(
        <div className="w-full h-[25em] sm:h-[20em] bg-[#151515] flex justify-center 
        items-center flex-col sm:justify-start sm:items-start lg:h-[25em]
            text-[#fff] gap-1.5">
                <h1 className={`${montserrat.className} text-[1.5em] border-l-4
                border-[#068FFF]
                `}>Must Popular Games</h1>
        <Swiper
            slidesPerView={calculate(windowSize)}
            spaceBetween={30} loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false,}} modules={[Autoplay]}
            className={`mySwiper w-full h-full hidden`}>
            
            {popularGames.map((value,index)=>(
            <SwiperSlide key={index} className={` !flex justify-center items-center`}>
                <div className="w-[70%] h-[90%] bg-[#151515] rounded-[16px]
                    border border-[#fff] flex justify-between items-center flex-col pb-5 pt-2
                    sm:h-[80%] sm:pt-0 sm:border-0 lg:w-[90%] lg:h-[90%]
                    
                ">
                    <div className=" w-[95%] h-[14em] sm:h-[9em] sm:w-[100%] sm:rounded-[2em]
                        lg:h-[15em] lg:w[80%]">
                     <Image 
                         src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`} 
                         alt="game image name" width={500} height={1500} 
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className=" object-fill rounded-[1em] rounded-b-[.5em] sm:rounded-[.2em]
                            w-[100%] h-[100%] lg:border-[#fff] lg:border-2 lg:rounded-[.9em] "/>
                    </div>
                    <p className={`${OpenSans.className} 
                      w-full flex justify-center
                      text-[1em] items-center text-center`}>{value.name}</p>
                </div>
            </SwiperSlide>

            ))}
        </Swiper>
        </div>
    )
}










