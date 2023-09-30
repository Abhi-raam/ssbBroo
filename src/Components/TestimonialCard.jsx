import React from 'react'
import mentor from "../assets/mentor.jpeg";

function TestimonialCard(props) {
    let students = {...props}
    return (
        <div >
            <div className='justify-items-center grid p-10' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500"   data-aos-once="false">
                <div>
                    <img className='w-36 rounded-full' src={mentor} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-center'>{students.Name}</h1>
                    <h1>{students.Profession}</h1>
                </div>
                <div className='bg-sky-500 p-4 text-white '>
                    <p>{students.Writes}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard