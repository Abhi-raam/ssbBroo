import React from "react";
import aboutImg from '../assets/aboutImg.webp';
import { FaArrowRight } from 'react-icons/fa';

function About() {
    return (
        <div className="p-5 mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="space-y-6">
                    <h1 className="text-sky-500 font-bold">ABOUT US</h1>
                    <h1 className="font-bold text-4xl">Welcome TO SSB <span className="text-red-700">BRO</span></h1>
                    <div className="px-2 ">
                        <p className="max-w-2xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing
                        </p>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-bold">WE PROVIDE</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 pt-3 ">
                            <div className="flex space-x-3">
                                <FaArrowRight className="text-red-700" />
                                <h1 className="">Psychology Tests</h1>
                            </div>
                            <div className="flex space-x-3">
                                <FaArrowRight className="text-red-700" />
                                <h1 className="">Psychology Tests</h1>
                            </div>
                            <div className="flex space-x-3">
                                <FaArrowRight className="text-red-700" />
                                <h1 className="">Psychology Tests</h1>
                            </div>
                            <div className="flex space-x-3">
                                <FaArrowRight className="text-red-700" />
                                <h1 className="">Psychology Tests</h1>
                            </div>
                            <div className="flex space-x-3">
                                <FaArrowRight className="text-red-700" />
                                <h1 className="">Psychology Tests</h1>
                            </div>
                            <div className="flex space-x-3">
                                <FaArrowRight className="text-red-700" />
                                <h1 className="">Detailed Disuccion on Area of Improvement</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <img className="rounded-md " src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
