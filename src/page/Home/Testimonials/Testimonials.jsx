

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Testimonials = () => {
    return (
        <div className="mt-15 mb-20">

            <div className='border-l-8 mt-10 mb-10 border-[#764AF1] '>

<h1 className="text-[54px] ml-4 font-bold"> TESTIMONIALS </h1>
  <small className='
  text-[#BEBEBE] ml-4  text-[12px] md:text-[16px] '>Our students shared their visa success stories</small>
</div>



<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay,  Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            
            
        <div className="flex card lg:card-side  shadow-xl">

  <figure><img className='flex-1' src="https://cdn.sanity.io/images/s37229yn/production/1838ecd4c726dd9ecacbc348c3aa2003e4271af3-764x1024.jpg?rect=0,0,764,859&w=320&auto=format" alt="Album"/></figure>
  <div className="card-body flex-1">

    <h2 className="card-title text-[32px] text-[#1B1464] font-medium mb-10">BM Abroad Dreamers Agency is the trusted friend
</h2>
    <p className='text-[18px] font-normal'>"BM Abroad Dreamers Agency has been my guiding light on this incredible journey of studying abroad. Their unwavering support and expert guidance have been the key to unlocking the doors to my dream education overseas. With their help, I've embarked on a life-changing adventure, embracing new cultures, and building memories that will last a lifetime. For anyone with aspirations of studying abroad, BM Abroad Dreamers Agency is the trusted friend you need to turn your dreams into reality."

</p>
   
  </div>
</div>



        </SwiperSlide>

        <SwiperSlide>  
            <div className="flex card lg:card-side  shadow-xl">

  <figure><img className='flex-1  w-[300px] md:h-1/2 h-[400px] ' src="https://cdn.sanity.io/images/s37229yn/production/04d39ea679cca9c102f95bcc297f3849bbecd856-764x1024.jpg?w=640&auto=format" alt="Album"/></figure>
  <div className="card-body flex-1">

    <h2 className="card-title text-[32px] text-[#1B1464] font-medium mb-10">They were everywhere for me
</h2>
    <p className='text-[18px] font-normal'>"BM Abroad Dreamers Agency played a pivotal role in making my study abroad dreams come true. Their expert guidance and unwavering support were instrumental at every step of my journey. From helping me navigate the intricate application process to offering personalized advice on scholarships and visa requirements, they were there for me. Thanks to their dedicated assistance, I am now living the experience of a lifetime, studying in a foreign country, immersing myself in a new culture, and gaining a global perspective. This incredible journey wouldn't have been possible without BM Abroad Dreamers."

</p>
   
  </div>
</div>

</SwiperSlide>
        
      </Swiper>






        </div>
    );
};

export default Testimonials;