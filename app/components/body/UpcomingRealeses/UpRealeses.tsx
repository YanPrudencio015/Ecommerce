'use client'


import React, { useRef, useState, useEffect } from 'react';
import { Geist, Geist_Mono, Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato,} from "next/font/google";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import './styles.css';

// images
import GameImage from '../../../../public/GameImages/c9f078c260d79339cb581054ce5ca49f2b56ab943d1beb20.jpg'


// icons
import { BellAlertIcon } from '@heroicons/react/24/outline';
// import required modules
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import { style } from 'motion/react-client';




const orbitron = Orbitron({weight:"400", subsets:["latin"]});
const roboto = Roboto({weight:"400", subsets:["latin"]});
const inter = Inter({weight:"400", subsets:["latin"]});
const russoOne = Russo_One ({weight:"400", subsets:["latin"]});
const audioWise = Audiowide({weight:"400", subsets:["latin"]});
const OpenSans = Open_Sans({weight:"400", subsets:["latin"]})
const fredoka = Fredoka({weight:"400", subsets:["latin"]});
const baloo2 = Baloo_2({weight:"600", subsets:["latin"]});
const nunito = Nunito({weight:"700", subsets:["latin"]});
const bebasNeue = Bebas_Neue({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"400", subsets:["latin"]});
const lato = Lato({weight:"400", subsets:["latin"]});

export default function UpRealeses(){
    // Interval to change all the screenchots
    const [screenN, setScreenN] = useState(0);

    // get all games for API
    const [allGames, setAllgames] = useState<any>([])

    // current slide
    const [curentSlide, setCurrentSlide] = useState(0);

    // check if the slide was clicked
    const[slideClicked, setSlideClicked] = useState(false)


    // Mude o estado para armazenar qual slide foi clicado
const [clickedSlideIndex, setClickedSlideIndex] = useState<number | null>(null);


useEffect(()=>{
    async function LoadUpcomingGames(){

        try{
            const data  = await fetch('api/realeses');
            const res = await data.json();
            console.log("Dados da nova API: ", res.results)
            setAllgames(res.results)
        }catch(error){

            console.log("Erro ao carregar a API: ", error )
        }
    }

    LoadUpcomingGames()
},[])



useEffect(() => {
    // Só roda se o slide foi clicado e os dados existem
    if(clickedSlideIndex === null || allGames.length === 0 || !allGames[clickedSlideIndex]) return;
    
    const totalScreenshots = allGames[clickedSlideIndex].short_screenshots.length;
    let count = 0;
    
    const interval = setInterval(() => {
        count++;
        if(count >= totalScreenshots) {
            count = 0;
        }
        setScreenN(count);
    }, 5000);
    
    return () => clearInterval(interval);
    
}, [clickedSlideIndex]); // ← Só escuta clickedSlideIndex, não allGames!

function ShowTheInfo(index:number){
    setCurrentSlide(index)
    setScreenN(0) // Reinicia os screenshots ao trocar de slide
    setSlideClicked(true)
    setClickedSlideIndex(index) // Guarda qual slide foi clicado
}

    return(
        <div className="w-full h-[30em] flex flex-col items-center justify-around">

                {/* title */}
                <h1 className={`relative ${bebasNeue.className} text-[1.5em] w-full flex justify-center
                    text-center text-white before:absolute before:w-[70%] before:h-[1px] before:bottom-0
                    before:bg-[#fff]
                `}>Upcoming Releases</h1>
                 <Swiper
                loop={true}
                scrollbar={{
                hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper w-[95%] h-[23em] rounded-2xl"
      >

        {/* create All cards games */}
        {allGames.map((value:any, index:number)=>(
            <SwiperSlide key={index} className='flex justify-center text-center items-center w-full h-screen  
        overflow-hidden group' onClick={()=> ShowTheInfo(index)} >
            {/* <Image src={`${value.background_image}`} width={1000} height={900} alt={value.name}  */}
            <Image 
                src={clickedSlideIndex === index ? 
                    value.short_screenshots[screenN]?.image : 
                    value.background_image
                } 
                width={1000} 
                height={900} 
                alt={value.name} 
                className='w-full h-full object-cover group-hover:scale-120
                    transition-all ease-out duration-100 '
            />

            <div className='absolute z-30 w-full h-full bottom-0 flex justify-end items-end'>
                <div className={`w-full h-[10em] bg-[#15151599] relative transition-all duration-300  
                    ${curentSlide === index? 'bottom-[0em]':'bottom-[-15em]'}`}>
                    <p className={` w-full h-[3em] text-[1.5em] text-white flex justify-center items-center
                        ${roboto.className} capitalize relative transition-all duration-500
                        ${curentSlide === index? 'bottom-[0]':'bottom-[-50em]'}
                        `}>{value.name}</p>
                    <div className=' flex justify-between flex-row w-full h-[100%] p-2.5'>

                        {/* game genres */}
                        <div className='flex flex-row gap-2 h-[4em] justify-center rounded-[5px]
                        items-center flex-wrap'>
                            {value.genres.map((value:any,indexGenre:number)=>(
                                <p key={indexGenre} className={`text-[#fff] ${montserrat.className}
                                bg-[rgba(255,255,255,.2)] w-auto px-2 rounded-3xl relative transition-all
                                duration-600
                                    ${curentSlide === index?'left-3':'left-[-50em]'}
                                `} style={{transitionDelay: `${indexGenre * 0.8}s`}}>
                                    {value.name}
                                </p>
                                ))}
                        </div>
                        <button className={`border-0 text-white bg-[#151515] rounded-[.5em] h-[3.5em] w-[8em]
                            flex justify-center items-center active:bg-[#068FFF] active:text-[#151515] 
                            relative transition-all duration-800
                            ${curentSlide === index?'right-0': 'right-[-50em]'}`}>
                        <span>
                            <BellAlertIcon className='size-7'/>
                        </span>
                        <p className={`${lato.className}`}>Notify Me</p>
                    </button>
                    </div>

                    {/* bars for game's screenshoots */}
                </div>
                        <div className='absolute top-[2%] w-[99%] h-[2em]
                            translate-x-[-50%] left-[50%] flex justify-center items-center flex-row gap-1
                            overflow-hidden'>

                                {value.short_screenshots.map((screen:string, indexScreen:number)=>(
                                <div key={indexScreen} className='w-[2.5em] h-full flex justify-center items-center'>
                                    <div className={`
                                        w-[3em] h-[3px] 
                                        ${screenN == indexScreen? 'bg-[#068FFF]': 'bg-[#fff]'} relative transition-all
                                            duration-500 ${curentSlide === index?'left-[50%] translate-x-[-50%]':
                                            'left-[-500em]'}`} 
                                            style={{transitionDelay: `${indexScreen* 0.1}s`}}>
                                    </div>
                                </div>
                                ))}
                        </div>
            </div>
        </SwiperSlide>
        ))}
        
      </Swiper>
        </div>
    )
}





        // <SwiperSlide className='flex justify-center text-center items-center w-full h-screen  
        // overflow-hidden'>
        //     <Image src={GameImage} alt='game Image name' className='w-full h-full object-fill
        //         transition-all ease-out duration-1000 '/>
        //     <div className='absolute z-30 w-full h-full bottom-0 flex justify-end items-end '>
        //         <div className='w-full h-[10em] bg-[#15151580] relative bottom-[0em]'>
        //             <p className={` w-full h-[3em] text-[1.5em] text-white flex justify-center items-center
        //             ${roboto.className} capitalize`}>lego batman legacy of the dark knight</p>
        //             <div className=' flex justify-between flex-row w-full h-[100%] p-2.5'>
        //                 <div className='flex flex-row bg-[#15151590] h-[3em] justify-between rounded-[5px]
        //                 items-center'>
        //                      <BellAlertIcon className='size-7 text-pink-700'/>
        //                      <BellAlertIcon className='size-7 text-pink-700'/>
        //                      <BellAlertIcon className='size-7 text-pink-700'/>
        //                      <BellAlertIcon className='size-7 text-pink-700'/>
        //                 </div>
        //                 <button className='border-0 text-[#9929EA] bg-[#151515] rounded-[.5em] h-[3.5em] w-[8em]
        //                     flex justify-center items-center active:bg-[#9929EA] active:text-[#151515]'>
        //                 <span>
        //                     <BellAlertIcon className='size-7'/>
        //                 </span>
        //                 <p className={`${lato.className}`}>Notify Me</p>
        //             </button>
        //             </div>
        //         </div>
        //                 <div className='absolute top-[2%] w-[95%] h-[2em] 
        //                     translate-x-[-50%] left-[50%] flex justify-center items-center flex-row gap-3'>
        //                         <div className='w-[3em] h-full flex justify-center items-center'>
        //                             <div className={`
        //                                 w-[3em] h-[3px] 
        //                                 ${screenN == 0? 'bg-[#9929EA]': 'bg-[#fff]'}`}></div>
        //                         </div>
        //                         <div className='w-[3em] h-full flex justify-center items-center'>
        //                             <div className={`
        //                                 w-[3em] h-[3px] 
        //                                 ${screenN == 1? 'bg-[#9929EA]': 'bg-[#fff]'}`}></div>
        //                         </div>
        //                         <div className='w-[3em] h-full flex justify-center items-center'>
        //                             <div className={`
        //                                 w-[3em] h-[3px] 
        //                                 ${screenN == 2? 'bg-[#9929EA]': 'bg-[#fff]'}`}></div>
        //                         </div>
        //                         <div className='w-[3em] h-full flex justify-center items-center'>
        //                             <div className={`
        //                                 w-[3em] h-[3px] 
        //                                 ${screenN == 3? 'bg-[#9929EA]': 'bg-[#fff]'}`}></div>
        //                         </div>
        //                         <div className='w-[3em] h-full flex justify-center items-center'>
        //                             <div className={`
        //                                 w-[3em] h-[3px] 
        //                                 ${screenN == 4? 'bg-[#9929EA]': 'bg-[#fff]'}`}></div>
        //                         </div>
        //                 </div>
        //     </div>
        // </SwiperSlide>