import React from 'react'
import { FaLocationDot, FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaTelegram } from 'react-icons/fa6';
function Footer() {
    return (
        <div id='contact' className='bg-[#181d38] text-white py-4'>
            <div className="grid drid-cols-1 md:grid-cols-2 justify-items-center">
                <div className='space-y-4'>
                    <div>
                        <h1 className='font-bold text-xl'>CONTACT</h1>
                    </div>
                    <div className='flex space-x-4'>
                        <FaLocationDot />
                        <p>
                            GMC ONE Apartment,<br />
                            Kodipalya Road, Hobli, Kengeri,<br />
                            Bengaluru, Karnataka 560060
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <FaPhone />
                        <p>+91 7906127544</p>
                    </div>
                    <div className="flex space-x-4">
                        <FaEnvelope />
                        <p>defencecontent@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-5 gap-9 h-48 md:h-56 content-center '>
                        <a href="">
                            <FaWhatsapp className='text-4xl lg:text-5xl p-2 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-500 border-2 rounded-md' />
                        </a>
                        <a href="">
                            <FaInstagram className='text-4xl lg:text-5xl p-2 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-500 border-2 rounded-md' />
                        </a>
                        <a href="">
                            <FaYoutube className='text-4xl lg:text-5xl p-2 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-500 border-2 rounded-md' />
                        </a>

                        <a href="">
                            <FaFacebookF className='text-4xl lg:text-5xl p-2 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-500 border-2 rounded-md' />
                        </a>
                        <a href="">
                            <FaTelegram className='text-4xl lg:text-5xl p-2 transition duration-200 ease-in-out hover:bg-slate-100 hover:text-sky-500 border-2 rounded-md' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='text-center  md:max-w-none border-t-[1px] pt-3 px-3'>
                <p className='max-w-none text-center'>
                &copy; SSB <span className='text-red-700'>BRO</span> , All Right Reserved. Designed By SSB <span className='text-red-700'>BRO</span>
                </p>
            </div>
        </div>
    )
}

export default Footer