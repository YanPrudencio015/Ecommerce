'use client'
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay} from 'swiper/modules';
import { Bebas_Neue, Montserrat} from "next/font/google";
import Image from "next/image";

// IMPORT CONTEXT
import { useLoading } from "@/app/contexts/LoadingContext";
import { useFetchGame } from "@/app/contexts/GameContext";

type MostPopularprops ={
    windowSize: number
}

const bebasNeue = Bebas_Neue({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"300", subsets:["latin"]});

export default function MostPopular({windowSize}: MostPopularprops){


    const {isloaded, ToggleLoading} = useLoading();
    const {fetchGame, gameData} = useFetchGame();
    const [popularGames, setPopularGames] = useState<any[]>([])
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [swiperReady, setSwiperReady] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [allRendered, setAllRendered] = useState(false);
    const route = useRouter();

    const swiperRef = useRef<any>(null);

    // Fetch API data
    useEffect(()=>{
        async function loadGames(){
            try {
                const data = await fetch('api/games?type=popular');
                const res = await data.json();
                
                if(Array.isArray(res)){
                    setPopularGames(res);
                    // console.log("✅ Dados carregados:", res.length, "jogos");
                } else {
                    console.log('❌ Erro na resposta da API:', res);
                    setPopularGames([]);
                }
            } catch(error){
                console.log("❌ Erro ao carregar jogos:", error);
                setPopularGames([]);
            }
        }
        loadGames();
    }, []);

    // Calculate slides per view
    function calculate(value:number):number{
        if(value <= 500) return 1
        if(value <= 640) return 2
        if(value <= 1024) return 3
        if(value <= 1280) return 4
        return 5
    }

    // Check if data is loaded
    useLayoutEffect(()=>{
        if(popularGames.length === 0) return;
        
        const allGames = popularGames.every(game=>(
            game &&
            game.cover &&
            game.cover.url &&
            game.name
        ));
    
        if(allGames){
            setIsDataLoaded(true);
        }
    }, [popularGames]); 

    // Handle image load
    const handleImageLoad = ()=>{
        setImagesLoaded((prev)=>{
            const newCount = prev + 1;
            // console.log(`📸 Imagem ${newCount} carregada`);
            return newCount;
        });
    }

    // Check if everything is rendered
    useEffect(()=>{
        const totalExpectedImages = popularGames.length; 
        const allImagesLoaded = imagesLoaded >= totalExpectedImages;
        
        if(allImagesLoaded && swiperReady && isDataLoaded){
            // console.log("🎉 Tudo foi carregado!!!");
            setAllRendered(true);
            
        }
    }, [isDataLoaded, swiperReady, popularGames, imagesLoaded]);


    useEffect(()=>{
        ToggleLoading(1) // change the LOADING CONTEXT
    },[allRendered])



    function toGamePage(gameName:string){
        console.log("Testando se o card: ", gameName, " responde");
        fetchGame(gameName)


        if(gameData !== null){
            route.push('/game')

        }
    }

    return(
        <div className="w-full h-[25em] sm:h-[20em] bg-[#151515] flex justify-center 
        items-center flex-col sm:justify-start sm:items-start lg:h-[20em]
        text-[#fff] gap-1.5">
            <h1 className={`${montserrat.className} text-[1.5em] w-full pl-3 relative 
            before:h-full before:w-[5px] before:bg-[#0BA6DF] before:absolute before:left-0
            before:rounded-[1em]`}>
                Must Popular Games
            </h1>

            <Swiper
                ref={swiperRef}
                slidesPerView={calculate(windowSize)}
                spaceBetween={5} 
                loop={popularGames.length > calculate(windowSize)}
                autoplay={{ delay: 2000, disableOnInteraction: false }} 
                modules={[Autoplay]}
                className={`mySwiper w-full h-full ${!isDataLoaded ? 'hidden' : ''}`}
                onSwiper={()=>{
                    setSwiperReady(true);
                }}>
                {popularGames.map((value, index)=>(
                    <SwiperSlide key={index} className={`!flex justify-center items-center `}>
                        <div onClick={()=>toGamePage(value.name)} 
                            className="p-[1px] bg-gradient-to-r from-[#068FFF] to-[#0A5EB0]
                                        w-[60%] md:w-[75%] lg:w-[70%] h-[80%] md:h-[80%] lg:h-[90%] rounded-lg flex justify-center 
                                        items-center cursor-pointer overflow-hidden">
                            <div className="w-[99%] h-[99%] rounded-lg bg-[#111] relative z-0">
                                <div className="absolute w-full h-full bg-[rgba(0,0,0,.3)] 
                                lg:bg-[rgba(0,0,0,.4)] lg:hover:bg-[rgba(0,0,0,.1)] z-20
                                transition-all duration-300 ease-in rounded-lg"></div>
                                <Image 
                                    onLoad={handleImageLoad}
                                    src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`}  
                                    alt={value.name} 
                                    width={500} 
                                    height={1500} 
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-fill w-[100%] h-[100%] rounded-lg absolute z-10"
                                />
                                <div className="absolute z-50 bottom-0 w-[100em] h-[45%] bg-gradient-to-t 
                                    from-[#0BA6DF]/50 to-transparent left-1/2 translate-x-[-50%]"></div>
                                <p className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-60 text-white 
                                    text-center font-semibold text-lg drop-shadow-lg w-full
                                    ${bebasNeue.className}`}>
                                    {value.name}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}