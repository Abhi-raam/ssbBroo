import React from "react";
import mentor from "../assets/mentor.jpeg";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Mentor() {
  return (
    <div className="px-4 pt-5 pb-16">
      <div className="text-center space-y-3">
        <h1 className="text-sky-500 font-bold">MENTOR</h1>
        <h1 className="font-bold text-4xl">EXPERT MENTOR</h1>
      </div>
      <div className="grid justify-items-center pt-4">
        <div className="">
          <img className="w-full hover:scale-[1.04] transition delay-150 duration-500 ease-in-out md:w-72 rounded-md" src={mentor} alt="" />
          <div className="flex  justify-center  ">
            <FaWhatsapp className="bg-sky-500 text-white text-4xl md:text-4xl m-2 p-2 rounded-full" />
            <FaFacebookF className="bg-sky-500 text-white text-4xl md:text-4xl m-2 p-2 rounded-full" />
            <FaInstagram className="bg-sky-500 text-white text-4xl md:text-4xl m-2 p-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
