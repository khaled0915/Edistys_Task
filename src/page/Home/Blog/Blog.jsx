
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import blog1 from '../../../assets/images/blog1.png'
import blog2 from '../../../assets/images/blog2.png'
import blog3 from '../../../assets/images/blog3.png'
import blog4 from '../../../assets/images/blog4.png'
import blog5 from '../../../assets/images/blog5.png'
import blog6 from '../../../assets/images/blog6.png'
import calendar from '../../../assets/images/calender.svg'

import { Pagination } from 'swiper/modules';
const Blog = () => {
    return (
        <div className='mt-10 mb-10'>

<div className='border-l-8 mt-10 mb-10 border-[#764AF1] '>

<h1 className="text-[54px] ml-4 font-bold"> Blogs </h1>
  <small className='
  text-[#BEBEBE] ml-4  text-[12px] md:text-[16px] '>Explore our latest blogs and articles
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='mr-10'>



        <div className="card   ">
  <figure><img className='border ml-5 rounded-md r' src={blog1} alt="Shoes" /></figure>
  <div className="card-body">

    <div className='flex gap-5 items-center'>
    <img className='w-[15px]' src={calendar} alt="" />
    <small className='text-base-400 font-light text-[14px]'> 16th Oct 2023  </small>
    </div>
    <p className='lg:text-[24px] text-[16px] font-medium md:pb-[32px]'>How to Secure Scholarships for Studying Abroad from Bangladesh</p>
    
  </div>
</div>






        </SwiperSlide>


        <SwiperSlide> <div className="card   ">
  <figure><img className='border ml-5 rounded-md r' src={blog2} alt="Shoes" /></figure>
  <div className="card-body">

    <div className='flex gap-5 items-center'>
    <img className='w-[15px]' src={calendar} alt="" />
    <small className='text-base-400 font-light text-[14px]'> 14th Sep 2023  </small>
    </div>
    <p className='lg:text-[24px] text-[16px] font-medium md:pb-[32px]'>A Comprehensive Guide to Scholarships and Financial Resources</p>
    
  </div>
</div></SwiperSlide>


        <SwiperSlide><div className="card   ">
  <figure><img className='border ml-5 rounded-md r' src={blog3} alt="Shoes" /></figure>
  <div className="card-body">

    <div className='flex gap-5 items-center'>
    <img className='w-[15px]' src={calendar} alt="" />
    <small className='text-base-400 font-light text-[14px]'> 16th Oct 2023
  </small>
    </div>
    <p className='lg:text-[24px] text-[16px] font-medium md:pb-[32px]'>Top Study Destinations for Bangladeshi Students in 2023</p>
    
  </div>
</div></SwiperSlide>



        <SwiperSlide><div className="card   ">
  <figure><img className='border ml-5 rounded-md r' src={blog4} alt="Shoes" /></figure>
  <div className="card-body">

    <div className='flex gap-5 items-center'>
    <img className='w-[15px]' src={calendar} alt="" />
    <small className='text-base-400 font-light text-[14px]'> 16th Oct 2023  </small>
    </div>
    <p className='lg:text-[24px] text-[16px] font-medium md:pb-[32px]'>Bangladeshi Students' Guide to Finding the Right Study Abroad Program</p>
    
  </div>
</div>
</SwiperSlide>
        <SwiperSlide><div className="card   ">
  <figure><img className='border ml-5 rounded-md r' src={blog5} alt="Shoes" /></figure>
  <div className="card-body">

    <div className='flex gap-5 items-center'>
    <img className='w-[15px]' src={calendar} alt="" />
    <small className='text-base-400 font-light text-[14px]'> 17th Oct 2023  </small>
    </div>
    <p className='lg:text-[24px] text-[16px] font-medium md:pb-[32px]'>How to Choose the Right Foreign University: A Comprehensive Guide for Bangladeshi Students</p>
    
  </div>
</div>
</SwiperSlide>

        <SwiperSlide> <div className="card   ">
  <figure><img className='border ml-5 rounded-md r' src={blog6} alt="Shoes" /></figure>
  <div className="card-body">

    <div className='flex gap-5 items-center'>
    <img className='w-[15px]' src={calendar} alt="" />
    <small className='text-base-400 font-light text-[14px]'> 2nd Nov 2023  </small>
    </div>
    <p className='lg:text-[24px] text-[16px] font-medium md:pb-[32px]'>Internship Opportunities for International Students in Bangladesh</p>
    
  </div>
</div></SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Blog;