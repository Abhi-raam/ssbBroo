import React, { useState } from 'react'
// import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg'

function NavBar() {
    const [mobileToggle, setMobiletoggle] = useState(false)
    const buttonClick = () => {
        setMobiletoggle(!mobileToggle)
    }
    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className="navbar  bg-white backdrop-blur">
                <div className="flex-1 space-x-3">
                    <img className='rounded-full w-12' src={logo} alt="" />
                    <a className="font-semibold text-xl md:text-2xl lg:text-3xl">SSB <span className='text-red-700'>BRO</span></a>
                </div>
                <div>
                    <ul className="lg:flex items-center space-x-6  font-semibold">
                        <li className='lg:inline-block hidden cursor-pointer hover:text-sky-600 transition delay-75 duration-150 ease-in-out'>
                            {/* <Link to="home" smooth={true} duration={500}>Home</Link> */}
                            <a href="">Home</a>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer hover:text-sky-600 transition delay-75 duration-150 ease-in-out">

                            {/* <Link to="about" smooth={true} duration={500}>About Me</Link> */}
                            <a href="">About</a>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer hover:text-sky-600 transition delay-75 duration-150 ease-in-out">

                            {/* <Link to="knowledge" smooth={true} duration={500}>Knowledge</Link> */}
                            <a href="">Course</a>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer hover:text-sky-600 transition delay-75 duration-150 ease-in-out">
                            {/* <Link to="skills" smooth={true} duration={500}>Skills</Link> */}
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-none lg:hidden">
                    <button className="btn btn-square btn-ghost " onClick={buttonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>

            {/* mobile view */}
            {mobileToggle && (
                <div className="relative">
                    <div className='grid backdrop-filter backdrop-blur  bg-white justify-end font-semibold absolute top-0 left-0 right-0'>
                        <ul className="mr-3 space-y-2" >
                            <li className='hover:text-sky-600 transition delay-75 duration-150 ease-in-out'>
                                {/* <Link to="home" smooth={true} duration={500}>Home</Link> */}
                                <a href="">Home</a>
                            </li>
                            <li className='hover:text-sky-600 transition delay-75 duration-150 ease-in-out'>
                                {/* <Link to="about" smooth={true} duration={500}>About Me</Link> */}
                                <a href="">About</a>
                            </li>
                            <li className='hover:text-sky-600 transition delay-75 duration-150 ease-in-out'>
                                {/* <Link to="knowledge" smooth={true} duration={500}>Knowledge</Link> */}
                                <a href="">Course</a>
                            </li>
                            <li className='hover:text-sky-600 transition delay-75 duration-150 ease-in-out'>
                                {/* <Link to="skills" smooth={true} duration={500}>Skills</Link> */}
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar