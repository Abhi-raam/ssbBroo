import React, { useRef, useState } from 'react';
import mentor from "../assets/mentor.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard.jsx';

function Testimonial() {
    let students = [
        {
            Name : 'Student 1',
            Profession : 'Sample Profession',
            Writes : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used'
        },
        {
            Name : 'Student 2',
            Profession : 'Sample Profession',
            Writes : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used'
        },
        {
            Name : 'Student 3',
            Profession : 'Sample Profession',
            Writes : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used'
        },
        {
            Name : 'Student 4',
            Profession : 'Sample Profession',
            Writes : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used'
        },
    ]
  return (
    <div className='p-5 backdrop-filter backdrop-blur-lg bg-sky-00 opacity-100'>
        <div className='text-center py-4' data-aos="fade-up" data-aos-duration="1000"   data-aos-once="false">
            <h1 className="text-sky-500 font-bold">TESTIMONIAL</h1>
            <h1 className="font-bold text-4xl">Our Students Say!</h1>
        </div>
        <Swiper 
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pt-8"
      >
        {students.map((obj)=>(
        <SwiperSlide >
            <TestimonialCard {...obj}/>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial