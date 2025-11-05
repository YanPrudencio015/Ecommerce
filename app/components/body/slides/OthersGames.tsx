'use client'
import React, { useEffect, useMemo, useState } from "react";

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


// icons
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { url } from "inspector";

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



export default function OthersGames({windowSize}: MostPopularprops){

    const[currentSize,setCurrentSize] = useState<number>(0)


    const[Racingames, setRacingames] = useState<any[]>([]);
    const[AdventureGames, setAdventureGames] = useState<any[]>([]);
    const [ShooterGames, setShooterGames] = useState<any[]>([]);
    const [FightGames, setFightGames] = useState<any[]>([]);
    const[SportsGame, setSportsGames] = useState<any[]>([]);

    // const[gamesCategories, setGamesCategories] = useState<any[]>([]);
    // get the currencly date 



    // useEffect(()=>{
    //     async function LoaGames(){

    //         const data = await fetch('api/games?type=racing')
    //         const response = await data.json();
    //         setRacingames([...response.slice(0,5)])
            
    //         const dataAdventure = await fetch('api/games?type=adventure');
    //         const responseAdventure = await dataAdventure.json();
    //         setAdventureGames([...responseAdventure.slice(0,5)]);

    //         const dataShooter = await fetch("api/games?type=shooter");
    //         const responseShooter = await dataShooter.json();
    //         setShooterGames([...responseShooter.slice(0,5)]); 
 
    //         const dataFight = await fetch("api/games?type=fight");
    //         const responseFight = await dataFight.json();
    //         setFightGames([...responseFight.slice(0,5)]); 

    //         const dataSport = await fetch("api/games?type=sport");
    //         const responseSport = await dataSport.json();
    //         setSportsGames([...responseSport.slice(0,5)]); 
    //     }

    //     LoaGames();
    // },[])

    interface GameCategories {
        url: string,
        data: React.Dispatch<React.SetStateAction<any[]>>,
    }

    useEffect(()=>{
        let racing = {url:'api/games?type=racing', data:setRacingames};
        let adventure = {url:'api/games?type=adventure', data:setAdventureGames};
        let shooter = {url:'api/games?type=shooter', data:setShooterGames};
        let fight = {url:'api/games?type=fight', data:setFightGames};
        let sport = {url:'api/games?type=sport', data:setSportsGames};
        
        async function LoagamesCategores(games: GameCategories){
            const data = await fetch(games.url);
            const response = await data.json();
            games.data(response.slice(0, 5));
        }
        LoagamesCategores(racing)
        LoagamesCategores(adventure)
        LoagamesCategores(shooter)
        LoagamesCategores(fight)
        LoagamesCategores(sport)
    },[])


            //   useEffect(()=>{
            //     setGamesCategories([Racingames,AdventureGames,ShooterGames,FightGames,SportsGame])
            //   },[Racingames,AdventureGames,ShooterGames,FightGames,SportsGame])

            const gamesCategories = useMemo(()=>[Racingames,AdventureGames,ShooterGames,FightGames,SportsGame],
        [Racingames,AdventureGames,ShooterGames,FightGames,SportsGame])

              useEffect(()=>{

                console.log("all categories:", gamesCategories);

                gamesCategories.forEach((categories,index)=>{
                    console.log(`categories:${index}: `, categories)
                    
                    for(let i = 0; i < categories.length; i++){
                        console.log(`categoriesElements: `, categories[i].name)
                    }
                })

            },[gamesCategories])

    function calculate(value:number):number{
        if(value <= 500) return 1
        if(value <= 640) return 2
        if(value <= 1024) return 2
        if(value <= 1280) return 5
        return 5
    }

    return(
        <div className="w-full h-[50em] sm:h-[40em] lg:h-[50em] flex justify-center 
        items-center flex-row sm:justify-start sm:items-start
            text-[#fff] gap-1.5">
        <Swiper
            slidesPerView={calculate(windowSize)}
            spaceBetween={5} loop={Racingames.length > calculate(windowSize)}
            // autoplay={{ delay: 10000, disableOnInteraction: false,}} modules={[Autoplay]}
            className={`mySwiper w-full h-full hidden`}>
                {/* creating Sliders */}
            {gamesCategories.map((value, index)=>(
                <SwiperSlide  key={index} className={` !flex justify-center items-center flex-col gap-3.5
                    py-[2em]`}>
                        {/* Slider title */}
                        <h1 className={`${bebasNeue.className} text-[2em]`}>{value[0]?.genres?.[0]?.name}</h1>
                        {/* games cards*/}
                        {value.map((value, index)=>(
                            <div key={index} className=" w-[95%] h-auto rounded-2xl !flex justify-center 
                            items-center flex-col gap-3.5 sm:rounded-0  ">
                            {/* games cards background Border*/}
                            <div className=" w-full h-[6em] sm:h-[5em] lg:h-[6.5em] rounded-[.5em] flex justify-center items-center bg-gradient-to-bl
                                from-[#9d14ff] to-[#FF9A00] overflow-hidden p-0">
                                    {/* games cards image */}
                                <div className="w-[99%] h-[95%] bg-[#151515] rounded-[.5em] text-[#fff] flex flex-row items-center">
                                    <div className="h-full w-[25%] sm:w-[5em] bg-[#151515]  rounded-[.5em] ">
                                        <Image  src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`}  
                                            alt={value.name}
                                            width={500}
                                            height={700}
                                            className="w-full h-full object-fill rounded-[.5em]"
                                        />
                                    </div>
                                    {/* game card information */}
                                <div className="w-[90%] h-full p-[1em] relative sm:w-[70%]">
                                    <p className={`${montserrat.className}
                                        w-full text-[.9em] sm:text-[.7em]`}>{value.name}</p>
                                    <div className=" w-[5em] flex justify-between flex-row absolute right-3 bottom-1
                                        lg:w-[3.5em] lg:h-[2em] items-center">
                                        <button className=" w-[2.5em] h-[2.5em] flex justify-center items-center rounded-full
                                        active:bg-[#BF092F] lg:w-[3em] lg:h-[2em] group">
                                            <HeartIcon className="size-7 text-[#BF092F] 
                                            group-active:text-[#fff] hover:text-[#fff]
                                            lg:size-5 cursor-pointer"/>
                                        </button>
                                        <button className=" w-[2.5em] h-[2.5em] flex justify-center items-center rounded-full
                                        active:bg-[#068FFF] lg:w-[3em] lg:h-[2em] group">
                                            <ShoppingBagIcon className="size-7 text-[#068FFF] hover:text-[#fff] 
                                            group-active:text-[#fff] cursor-pointer lg:size-5"/>
                                        </button>
                                    </div>
                                    <p className={`${OpenSans.className} bg-[#068FFF] 
                                    w-[5em] flex justify-center 
                                    rounded-[.5em] lg:text-[.8em]`}>R$ 59.99</p>
                                </div>
                                </div>
                       
                            </div>
                        </div>
                        ))}
                    <button className={`${lato.className} h-[1.5em] bg-[#fff] 
                        text-[#151515] w-[90%] rounded-[.5em]
                        text-[1.5em] cursor-pointer relative lg:h-[1em]
                        flex justify-center items-center lg:rounded-[.2em]
                        before:absolute before:w-[15em] before:h-[10em] before:bg-[#068FFF] 
                        before:rounded-full before:z-10 z-20 overflow-hidden
                        hover:before:top-[-5em] before:top-[8em] before:transition-all
                        before:duration-700 before:ease-in-out`}>
                            <p className="z-20">View More</p>
                        </button>
                </SwiperSlide>
            ))}
            
                
        </Swiper>
        </div>
    )
}


                // <SwiperSlide className={` !flex justify-center items-center flex-col gap-3.5
                //     py-[2em]`}>
                //         <h1 className={`${bebasNeue.className} text-[2em]`}>{Racingames[0]?.genres?.[0]?.name}</h1>
                //         {Racingames.map((value, index)=>(
                //             <div key={index} className=" w-[95%] h-auto rounded-2xl !flex justify-center 
                //             items-center flex-col gap-3.5">
                //             <div className=" w-full h-[6em] rounded-[.5em] flex justify-center items-center bg-gradient-to-bl
                //                 from-[#9d14ff] to-[#FF9A00] p-0">
                //                 <div className="w-[99%] h-[95%] bg-[#151515] rounded-[.5em] text-[#fff] flex flex-row items-center">
                //                     <div className="h-full w-[25%] bg-[#151515]  rounded-[.5em]">
                //                         <Image  src={`https:${value.cover.url.replace('t_thumb', 't_cover_big')}`}  
                //                             alt={value.name}
                //                             width={500}
                //                             height={700}
                //                             className="w-full h-full object-fill rounded-[.5em]"
                //                         />
                //                     </div>
                //                 <div className="w-[90%] h-full p-[1em] relative">
                //                     <p className={`${montserrat.className}
                //                         w-full text-[.9em]`}>{value.name}</p>
                //                     <div className=" w-[5em] flex justify-between flex-row absolute right-3 bottom-1">
                //                         <button className=" w-[2.5em] h-[2.5em] flex justify-center items-center rounded-full
                //                         active:bg-[#BF092F] group">
                //                             <HeartIcon className="size-7 text-[#BF092F] 
                //                             group-active:text-[#fff] hover:text-[#fff]"/>
                //                         </button>
                //                         <button className=" w-[2.5em] h-[2.5em] flex justify-center items-center rounded-full
                //                         active:bg-[#068FFF] group">
                //                             <ShoppingBagIcon className="size-7 text-[#068FFF] hover:text-[#fff] group-active:text-[#fff]"/>
                //                         </button>
                //                     </div>
                //                     <p className={`${OpenSans.className} bg-gradient-to-bl
                //                 from-[#9d14ff] to-[#FF9A00] w-[5em]
                //                         flex justify-center rounded-[.5em]`}>R$ 59.99</p>
                //                 </div>
                //                 </div>
                       
                //             </div>
                //         </div>
                //         ))}
                //     <button className={`${lato.className} h-[1.5em] bg-[#fff] 
                //         text-[#151515] w-[90%] rounded-[.5em]
                //         text-[1.5em]`}>View More</button>
                // </SwiperSlide>