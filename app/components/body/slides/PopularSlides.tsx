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


    function calculate(value:number):number{
        if(value <= 500) return 1
        if(value <= 640) return 2
        if(value <= 1024) return 3
        if(value <= 1280) return 4
        return 5
    }

    return(
        <div className="w-full h-[25em] sm:h-[20em] bg-[#151515] flex justify-center 
        items-center flex-col sm:justify-start sm:items-start lg:h-[20em]
            text-[#fff] gap-1.5">
                <h1 className={`${montserrat.className} text-[1.5em] w-full pl-3 relative 
                before:h-full before:w-[5px] before:bg-[#0BA6DF] before:absolute before:left-0
                before:rounded-[1em]
                `}>Must Popular Games</h1>
        <Swiper
            slidesPerView={calculate(windowSize)}
            spaceBetween={30} loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false,}} modules={[Autoplay]}
            className={`mySwiper w-full h-full hidden`}>
            {popularGames.map((value,index)=>(
                <SwiperSlide key={index} className={` !flex justify-center items-center`}>
                    <div className="p-[1px] bg-gradient-to-r from-[#068FFF] to-[#0A5EB0]
                        w-[65%] h-[80%] rounded-lg flex justify-center items-center cursor-pointer
                        blur-[#151515]">
                        <div className="w-[99%] h-[99%] rounded-lg bg-[#111] relative z-0">
                            <div className="absolute w-full h-full bg-[rgba(0,0,0,.3)] 
                            lg:bg-[rgba(0,0,0,.4)] lg:hover:bg-[rgba(0,0,0,.1)] z-20
                            transition-all duration-300 ease-in rounded-lg"></div>
                        <Image 
                            src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`}  
                            alt="game image name" width={500} height={1500} 
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className=" object-fill  w-[100%] h-[100%] rounded-lg absolute z-10 "/>
                        <div className="absolute z-50 bottom-0 w-full h-[45%] bg-gradient-to-t 
                            from-[#0BA6DF]/90 to-transparent"></div>
                        <p className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-60 text-white 
                            text-center font-semibold text-lg 
                            drop-shadow-lg w-full
                            ${bebasNeue.className}
                            `}>{value.name}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        </div>

    )
}










