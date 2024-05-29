
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const Destination = () => {

 

    return (


      <div className=' mb-20'>

<div className='border-l-8 mt-10 mb-10 border-[#764AF1] '>

<h1 className="text-[54px] ml-4 font-bold"> TOP DESTINATION </h1>
  <small className='
  text-[#BEBEBE] ml-4  text-[12px] md:text-[16px] '>Study in your Dream Destinationd

  </small>
</div>


         <Swiper
         
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
          <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img src="https://cdn.sanity.io/images/s37229yn/production/8a927441826e5946a3f7c5a5ec21602728c387f4-2756x4164.jpg?w=320&auto=format" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
      </div>


      


        



    );
};

export default Destination;