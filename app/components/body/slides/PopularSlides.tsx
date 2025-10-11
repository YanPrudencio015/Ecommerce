import { useEffect, useState } from "react";

// swipper
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';



type MostPopularprops ={
    windowSize: number
}

export default function MostPopular({windowSize}: MostPopularprops){

    const[currentSize,setCurrentSize] = useState<number>(0)

    function calculate(value:number):number{
        if(value <= 500) return 1
        if(value <= 640) return 2
        if(value <= 1024) return 3
        if(value <= 1280) return 4
        return 5
    }

    return(
        <div className="">
        <Swiper
            slidesPerView={calculate(windowSize)}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </div>
    )
}