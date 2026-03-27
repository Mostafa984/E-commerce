"use client"
//Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface MySliderPrototype {
  listOfImages: string[];
  spaceBetween?: number;
  slidesPerView?: number;
}
export default function MySlider({ spaceBetween = 100, slidesPerView = 1, listOfImages }: MySliderPrototype) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      loop
       pagination={{ clickable: true } } 


    >

      {listOfImages.map(item => <SwiperSlide key={item}> <img src={item} alt='slider Pic' className='w-full h-[400px] object-cover' />

      </SwiperSlide>)}

    </Swiper>
  );
};