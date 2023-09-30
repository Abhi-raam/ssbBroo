import React from "react";
import course from "../assets/course.jpeg";
import course2 from "../assets/course02.jpg";
import course3 from "../assets/course3.jpeg";

function Courses() {
  return (
    <div id="course" className="p-5 pt-16">
      <div className="text-center" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="false">
        <h1 className="font-bold text-sky-500">COURSES</h1>
        <h1 className="font-bold text-4xl">COURSES CATEGORIES</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-6 lg:px-16 justify-items-center">
        <div className="max-w-lg lg:max-w-md ">
          <div className="relative">
            <img className="rounded-md w-[500px]" data-aos="zoom-in"  data-aos-duration="1000" data-aos-once="false" src={course} alt="" />
            <h1 className="absolute bottom-1 right-1 rounded-md p-1  bg-white font-bold ">
              Personal Interview
            </h1>
          </div>
          <div>
            <p className="font-bold">
              Online interview by experienced army officer and SSB mentor.
              Discussion about strengths and weaknesses of the candidate, where
              he/she needs to improve, do's and don'ts in personal interview,
              plan of action to improve OLQs and get recommended.
            </p>
          </div>
        </div>
        <div className="max-w-lg lg:max-w-md">
          <div className="relative">
            <img className="rounded-md " data-aos="zoom-in"  data-aos-duration="1000" data-aos-once="false" src={course2} alt="" />
            <h1 className="absolute bottom-1 right-1 rounded-md p-1  bg-white font-bold ">
              Psychology Assessment
            </h1>
          </div>
          <div>
            <p className="font-bold">
              Psychology tests conducted exactly as per SSB format. Experienced
              military psychologist will assess the responses given and tell the
              candidate all areas of improvement. OLQ score and suggestions for
              better performance will be provided.
            </p>
          </div>
        </div>
        <div className="max-w-lg lg:max-w-md">
          <div className="relative">
            <img className="rounded-md w-full " data-aos="zoom-in"  data-aos-duration="1000" data-aos-once="false" src={course3} alt="" />
            <h1 className="absolute bottom-1 right-1 rounded-md p-1  bg-white font-bold ">
              GTO Tasks
            </h1>
          </div>
          <div>
            <p className="font-bold">
              Series of group tasks conducted at SSB - group discussions, GPE,
              lecturette, PPDT and more. Peer learning with fellow aspirants.
              Everyday recorded sessions and personal suggestions for
              improvement. Focus on OLQ development through various interactive
              sessions.
            </p>
          </div>
        </div>
        <div className="max-w-lg lg:max-w-md">
          <div className="relative">
            <img className="rounded-md " data-aos="zoom-in"  data-aos-duration="1000" data-aos-once="false" src={course} alt="" />
            <h1 className="absolute bottom-1 right-1 rounded-md p-1  bg-white font-bold ">
              Personal mentorship
            </h1>
          </div>
          <div>
            <p className="font-bold">
              Individual mock SSB including psychology tests, personal interview
              and group testing. Complete analysis of OLQs. Detailed discussion
              about areas of improvement, plan of action to overcome weaknesses
              and face SSB with confidence. Conducted personally by the chief
              mentor - Capt Smart (aka SSB bro)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
