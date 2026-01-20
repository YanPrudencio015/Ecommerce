'use client'

import { useEffect, useLayoutEffect, useState, useRef } from "react";
import Image from "next/image";

// swipper
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

// fonts
import {Inter, Nunito,  Bebas_Neue, Montserrat,} from "next/font/google";

// heroIcons
import { HeartIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/16/solid";

const inter = Inter({weight:"400", subsets:["latin"]});
const nunito = Nunito({weight:"700", subsets:["latin"]});
const bebasNeue = Bebas_Neue({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"300", subsets:["latin"]});


// Context
import { useLoading } from "@/app/contexts/LoadingContext";

type MostPopularprops ={
    windowSize: number
}

export default function SlideMainGames({windowSize}: MostPopularprops){

    // context
    const {isloaded, ToggleLoading} = useLoading();

    const [mainGames, setMainGames] = useState<any[]>([])
    const [gameCollections, setGamesCollections] = useState<any[]>([])
    
    // States to control complete renderization
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [swipersReady, setSwipersReady] = useState({ first: false, second: false, third: false });
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [isFullyRendered, setIsFullyRendered] = useState(false);
    
    // Refs to the Swipers
    const swiper1Ref = useRef<any>(null);
    const swiper2Ref = useRef<any>(null);
    const swiper3Ref = useRef<any>(null);


    // UseEffect to get API data
    useEffect(() => {
        async function loagames(){
            const data = await fetch('api/games?type=main');
            const res = await data.json();
            setMainGames(res)
            try{
                if(Array.isArray(res)){
                    // console.log("✅ Dados da API carregados");
                } else{
                    console.log('❌ Erro na resposta da API: ', res);
                }
            } catch(error){
                console.log ("❌ Erro ao carregar jogos: ", error);
            }
        }
        loagames()
    },[])


    // Separando arrays da API em três subarrays
    useEffect(() => {
        const nelementsArray = 7;
        var GamesArray = [];
        for(let i=0; i < mainGames.length; i += nelementsArray){
            GamesArray.push(mainGames.slice(i, i+nelementsArray))
        }
        setGamesCollections(GamesArray)
    }, [mainGames])

        // calcule the screen size and return the numbers of slides 
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
        return routed
    }

    // Check if The datas Loaded
    useLayoutEffect(() => {
        const allGamesCollections = gameCollections.every(games =>
            Array.isArray(games) && games.length > 0
        )
        const allGamesprops = gameCollections.every(collections =>
            collections.every((game: any) =>
                game &&
                game.cover &&
                game.cover.url &&
                game.rating
            )
        )

        if (allGamesCollections && allGamesprops) {
            // console.log("✅ Todos os dados carregaram")
            setIsDataLoaded(true);
        } else {
            console.log("⚠️ Alguns dados ainda não carregaram")
            setIsDataLoaded(false);
        }
    }, [gameCollections])

    // Check if all Swippers were builded
    useEffect(() => {
        if (swipersReady.first && swipersReady.second && swipersReady.third) {
            // console.log("✅ Todos os Swipers foram montados no DOM!");
        }
    }, [swipersReady])

    // 3. Callback when the image loaded 
    const handleImageLoad = () => {
        setImagesLoaded(prev => {
            const newCount = prev + 1;
            // console.log(`📸 Imagem ${newCount} carregada`);
            return newCount;
        });
    }

    // everithing was laoded
    useEffect(() => {
        const allSwipersReady = swipersReady.first && swipersReady.second && swipersReady.third;
        const totalExpectedImages = gameCollections.reduce((acc, col) => acc + col.length, 0);
        const allImagesLoaded = imagesLoaded >= totalExpectedImages;

        if (isDataLoaded && allSwipersReady && allImagesLoaded) {
            setIsFullyRendered(true);
            
            ToggleLoading(2)
        }
    }, [isDataLoaded, swipersReady, imagesLoaded, gameCollections])

    // Top New Releases
    return(
        <div className="w-full h-[50em] mt-[5em] text-[#fff] lg:h-[70em] sm:h-[60em] p-1">
            <p className={`${bebasNeue.className} w-full h-[3em]  p-3 flex justify-start
            items-center text-[1.5em]`}>Main Games</p>
            
            {/* Indicador de carregamento */}
            {!isFullyRendered && (
                <div className="w-full h-[3em] flex justify-center items-center">
                    <p className="text-gray-400 animate-pulse">🔄 Carregando jogos...</p>
                </div>
            )}

            <div className=" w-full h-[13em] lg:h-[60em] p-2">
                {/* PRIMEIRO SWIPER */}
                <Swiper
                    ref={swiper1Ref}
                    onSwiper={(swiper) => {
                        setSwipersReady(prev => ({ ...prev, first: true }));
                    }}
                    slidesPerView={calculate(windowSize)}
                    spaceBetween={10} 
                    loop={gameCollections.length > calculate(windowSize)}
                    className={`mySwiper w-full h-full ${!isDataLoaded ? 'hidden' : ''} my-5 sm:my-7 lg:my-16 lg:h-[15em]`}
                >
                    {gameCollections[0]?.map((value:any,index:number)=>(
                        <SwiperSlide key={index} className={`rounded-0 
                            relative z-20 group overflow-hidden transition-all duration-100 ease-in-out
                            cursor-pointer`}>
                            <Image 
                                src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`} 
                                alt={value.name}
                                width={500} 
                                height={1500} 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                onLoad={handleImageLoad}
                                className="object-fill absolute w-[100%] h-[100%] rounded-0 
                                brightness-90 group-hover:brightness-110 scale-100 group-hover:scale-110
                                transition-all duration-1000 ease-in-out"
                            />
                            <div className="w-full h-[4em] lg:h-[4em] background:rgba(0, 0, 0, 0.3)
                                shadow-lg backdrop-blur-[7.7px] absolute bottom-0 z-10 
                                flex justify-around items-center flex-col text-center">
                                <p className={`${inter.className} text-[.5em]`}>{value.name}</p>
                                <div className="w-full flex justify-between flex-row px-1.5">
                                    <div className="flex flex-row justify-center gap-0.5">
                                        <StarIcon className="size-5" />
                                        <p className={`${nunito.className} font-light`}>
                                            {normalizeRating(value.rating)}
                                        </p>
                                    </div>
                                    <span className={`${montserrat.className} w-[4em] bg-[#068FFF] 
                                    text-[.9em] font-light rounded-[.2em] flex justify-center items-center`}>
                                        $55.90
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* SEGUNDO SWIPER */}
                <Swiper
                    ref={swiper2Ref}
                    onSwiper={(swiper) => {
                        setSwipersReady(prev => ({ ...prev, second: true }));
                    }}
                    slidesPerView={calculate(windowSize)}
                    spaceBetween={10} 
                    loop={true}
                    className={`mySwiper w-full h-full ${!isDataLoaded ? 'hidden' : ''} my-5 sm:my-7 lg:my-16 lg:h-[15em]`}
                >
                    {gameCollections[1]?.map((value:any,index:number)=>(
                        <SwiperSlide key={index} className={`rounded-0 
                            relative z-20 group overflow-hidden transition-all duration-100 ease-in-out
                            cursor-pointer`}>
                            <Image 
                                src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`} 
                                alt={value.name}
                                width={500} 
                                height={1500} 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                onLoad={handleImageLoad}
                                className="object-fill absolute w-[100%] h-[100%] rounded-0 
                                brightness-90 group-hover:brightness-110 scale-100 group-hover:scale-110
                                transition-all duration-1000 ease-in-out"
                            />
                            <div className="w-full h-[4em] lg:h-[4em] background:rgba(0, 0, 0, 0.3)
                                shadow-lg backdrop-blur-[7.7px] absolute bottom-0 z-10 
                                flex justify-around items-center flex-col text-center">
                                <p className={`${inter.className} text-[.5em]`}>{value.name}</p>
                                <div className="w-full flex justify-between flex-row px-1.5">
                                    <div className="flex flex-row justify-center gap-0.5">
                                        <StarIcon className="size-5" />
                                        <p className={`${nunito.className} font-light`}>
                                            {normalizeRating(value.rating)}
                                        </p>
                                    </div>
                                    <span className={`${montserrat.className} w-[4em] bg-[#068FFF] 
                                    text-[.9em] font-bold rounded-[.2em] flex justify-center items-center`}>
                                        $55.90
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* TERCEIRO SWIPER */}
                <Swiper
                    ref={swiper3Ref}
                    onSwiper={(swiper) => {
                        // console.log("✅ Swiper 3 inicializado");
                        setSwipersReady(prev => ({ ...prev, third: true }));
                    }}
                    slidesPerView={calculate(windowSize)}
                    spaceBetween={10} 
                    loop={true}
                    className={`mySwiper w-full h-full ${!isDataLoaded ? 'hidden' : ''} my-5 sm:my-7 lg:my-16 lg:h-[15em]`}
                >
                    {gameCollections[2]?.map((value:any,index:number)=>(
                        <SwiperSlide key={index} className={`rounded-0 
                            relative z-20 group overflow-hidden transition-all duration-100 ease-in-out
                            cursor-pointer`}>
                            <Image 
                                src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`} 
                                alt={value.name}
                                width={500} 
                                height={1500} 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                onLoad={handleImageLoad}
                                className="object-fill absolute w-[100%] h-[100%] rounded-0 
                                brightness-90 group-hover:brightness-110 scale-100 group-hover:scale-110
                                transition-all duration-1000 ease-in-out"
                            />
                            <div className="w-full h-[4em] lg:h-[4em] background:rgba(0, 0, 0, 0.3)
                                shadow-lg backdrop-blur-[7.7px] absolute bottom-0 z-10 
                                flex justify-around items-center flex-col text-center">
                                <p className={`${inter.className} text-[.5em]`}>{value.name}</p>
                                <div className="w-full flex justify-between flex-row px-1.5">
                                    <div className="flex flex-row justify-center gap-0.5">
                                        <StarIcon className="size-5" />
                                        <p className={`${nunito.className} font-light`}>
                                            {normalizeRating(value.rating)}
                                        </p>
                                    </div>
                                    <span className={`${montserrat.className} w-[4em] bg-[#068FFF] 
                                    text-[.9em] font-bold rounded-[.2em] flex justify-center items-center`}>
                                        $55.90
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}