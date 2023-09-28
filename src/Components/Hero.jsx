import React from 'react';
import heroImg from '../assets/heroImg.png';
// import hero2 from '../assets/hero2.jpeg';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function Hero() {
    const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay()])

        ;
    return (
        <div className="embla pt-20" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    {/* <img className='w-full' src={heroImg} alt="" /> */}
                    <div className="relative w-full h-[90vh]  md:h-[100vh]">
                        <div className="bg-cover bg-center w-full grid grid-cols-1 lg:grid-cols-2 items-center  h-full " style={{ backgroundImage: `url(${heroImg})` }}>
                            <div className='p-5 space-y-4'>
                                <h1 className='text-white relative font-bold text-3xl  md:text-6xl  lg:text-7xl z-10 '>The Best Online SSB Coaching Platform</h1>
                                <button className=' p-3 pl-4 pr-4 border-white border-[1px] rounded-full relative bg-transparent z-10 text-white hover:text-black hover:bg-white transition delay-75 duration-150 ease-in-out'>Let's Chat</button>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-60"></div>
                        </div>
                    </div>
                </div>
                <div className="embla__slide">
                    {/* <img className='w-full' src={heroImg} alt="" /> */}
                    <div className="relative w-full h-[90vh]  md:h-[100vh]">
                    <div className="bg-cover bg-center w-full grid grid-cols-1  lg:grid-cols-2 items-center text-start  h-full " style={{ backgroundImage: `url(${heroImg})` }}>
                            <div className='p-5 space-y-4'>
                                <h1 className='text-white relative font-bold text-3xl md:text-6xl max-w-xs md:max-w-xl lg:max-w-2xl lg:text-7xl z-10 '>Get Trained Online From Your Home</h1>
                                <button className=' p-3 pl-4 pr-4 border-white border-[1px] rounded-full relative bg-transparent z-10 text-white hover:text-black hover:bg-white transition delay-75 duration-150 ease-in-out'>Let's Chat</button>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
