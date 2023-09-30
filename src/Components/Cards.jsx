import React from 'react'
import { FaGraduationCap,FaGlobe,FaUserAlt,FaBookOpen } from 'react-icons/fa';
function Cards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 px-4 lg:px-16 mx-auto pt-16'>
        <div className='bg-sky-100 p-6 space-y-4 flex flex-col rounded-md items-center justify-center hover:bg-sky-500 hover:text-white hover:-translate-y-6 transition delay-100 duration-500 ease-in-out  ' data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500" data-aos-once="false" >
            <FaGraduationCap className='text-6xl'/>
            <h1 className='font-bold text-xl'>Skilled Mentors</h1>
            <h1>Skilled and qualified mentors</h1>
        </div>
        <div className='bg-sky-100 p-6 space-y-4 flex flex-col rounded-md items-center justify-center hover:bg-sky-500 hover:text-white hover:-translate-y-6 transition delay-100 duration-500 ease-in-out'data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" data-aos-once="false" >
            <FaGlobe className='text-6xl'/>
            <h1 className='font-bold text-xl'>Online Meets</h1>
            <h1>Everyday google meet for your development</h1>
        </div>
        <div className='bg-sky-100 p-6 space-y-4 flex flex-col rounded-md items-center justify-center hover:bg-sky-500 hover:text-white hover:-translate-y-6 transition delay-100 duration-500 ease-in-out' data-aos="fade-up" data-aos-delay="350" data-aos-duration="1500" data-aos-once="false" >
            <FaUserAlt className='text-6xl'/>
            <h1 className='font-bold text-xl'>Personal Feedback</h1>
            <h1>Personal feedback for all defence aspirants for their self improvement</h1>
        </div>
        <div className='bg-sky-100 p-6 space-y-4 flex flex-col rounded-md items-center justify-center hover:bg-sky-500 hover:text-white hover:-translate-y-6 transition delay-100 duration-500 ease-in-out' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" data-aos-once="false" >
            <FaBookOpen className='text-6xl'/>
            <h1 className='font-bold text-xl'>Free Resources</h1>
            <h1>Get access to free online resources from SSB BRO</h1>
        </div>
    </div>
  )
}

export default Cards