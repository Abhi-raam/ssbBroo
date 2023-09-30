import React,{useEffect} from 'react';
import heroImg from '../assets/heroImg.png';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Hero() {
        // AOS.init();

    const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay()])
    return (
        <div id='home' className="embla pt-20" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    {/* <img className='w-full' src={heroImg} alt="" /> */}
                    <div className="relative w-full h-[90vh]  md:h-[100vh]">
                        <div className="bg-cover bg-center w-full grid grid-cols-1 lg:grid-cols-2 items-center  h-full " style={{ backgroundImage: `url(${heroImg})` }}>
                            <div className='p-5 space-y-4' >
                                <h1 className='text-white relative font-bold text-3xl  md:text-6xl  lg:text-7xl z-10  ' data-aos="fade-down" data-aos-duration="1000"   data-aos-once="false" >The Best Online SSB Coaching Platform</h1>
                                <button className=' p-3 pl-4 pr-4 border-white border-[1px] rounded-full relative bg-transparent z-10 text-white hover:text-black hover:bg-white transition delay-75 duration-150 ease-in-out' data-aos="fade-right" data-aos-delay="150" data-aos-duration="1000"   data-aos-once="false" >Let's Chat</button>
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
                                <h1 className='text-white relative font-bold text-3xl md:text-6xl max-w-xs md:max-w-xl lg:max-w-2xl lg:text-7xl z-10' data-aos="fade-down" data-aos-duration="1000"   data-aos-once="false" >Get Trained Online From Your Home</h1>
                                <button className=' p-3 pl-4 pr-4 border-white border-[1px] rounded-full relative bg-transparent z-10 text-white hover:text-black hover:bg-white transition delay-75 duration-150 ease-in-out' data-aos="fade-right" data-aos-delay="150" data-aos-duration="1000"   data-aos-once="false" >Let's Chat</button>
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
