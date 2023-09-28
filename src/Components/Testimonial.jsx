import React, { useRef, useState } from 'react';
import mentor from "../assets/mentor.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Testimonial() {
  return (
    <div className='p-5 backdrop-filter backdrop-blur-lg bg-sky-00 opacity-100'>
        <div className='text-center py-4'>
            <h1 className="text-sky-500 font-bold">TESTIMONIAL</h1>
            <h1 className="font-bold text-4xl">Our Students Say!</h1>
        </div>
        <Swiper 
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pt-8"
      >
        <SwiperSlide>
            <div className='justify-items-center grid'>
                <div>
                    <img className='w-36 rounded-full' src={mentor} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Student 1</h1>
                    <h1>Profession</h1>
                </div>
                <div className='bg-sky-500 p-1 text-white rounded-md'>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='justify-items-center grid'>
                <div>
                    <img className='w-36 rounded-full' src={mentor} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Student 2</h1>
                    <h1>Profession</h1>
                </div>
                <div className='bg-sky-500 p-1 text-white rounded-md'>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='justify-items-center grid'>
                <div>
                    <img className='w-36 rounded-full' src={mentor} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Student 3</h1>
                    <h1>Profession</h1>
                </div>
                <div className='bg-sky-500 p-1 text-white rounded-md'>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='justify-items-center grid'>
                <div>
                    <img className='w-36 rounded-full' src={mentor} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Student 4</h1>
                    <h1>Profession</h1>
                </div>
                <div className='bg-sky-500 p-1 text-white rounded-md'>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='justify-items-center grid'>
                <div>
                    <img className='w-36 rounded-full' src={mentor} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Student 5</h1>
                    <h1>Profession</h1>
                </div>
                <div className='bg-sky-500 p-1 text-white rounded-md'>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='justify-items-center grid'>
                <div>
                    <img className='w-36 rounded-full' src={mentor} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Student 6</h1>
                    <h1>Profession</h1>
                </div>
                <div className='bg-sky-500 p-2 text-white rounded-md'>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Testimonial