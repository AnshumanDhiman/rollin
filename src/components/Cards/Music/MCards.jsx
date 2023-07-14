
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

import mi1 from '../../../assets/thumbnails/music/1.jpg'
import mi2 from '../../../assets/thumbnails/music/2.jpg'
import mi3 from '../../../assets/thumbnails/music/3.jpg'
import mi4 from '../../../assets/thumbnails/music/4.jpg'
import mi5 from '../../../assets/thumbnails/music/5.jpg'
import mi6 from '../../../assets/thumbnails/music/6.jpg'
import mi7 from '../../../assets/thumbnails/music/7.jpg'


export default function Index() {




    return (
        <div className="mx-auto">
            <div className="flex lg:items-center justify-center w-full h-full py-12 lg:py-16 px-8 lg:py-8 lg:px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                        <img src={mi1} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                     
                                    </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                        <img src={mi2} alt="sitting area" className="object-cover object-center w-full  rounded-lg" />
                                        
                                    </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                        <img src={mi3} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                      
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                        <img src={mi4} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                      
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                        <img src={mi5} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                      
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                        <img src={mi6} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                      
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                        <img src={mi7} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                      
                                        </div>
                                    </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={2} step={1} infinite={true}>
<div className="w-full relative flex items-center justify-center">
    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonBack>
    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <Slider>
            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={mi1} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={1}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi2} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={2}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi3} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={3}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi4} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={4}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi5} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={5}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi6} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={6}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi7} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                    </div>
                </Slide>
              
            </div>
        </Slider>
    </div>
    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonNext>
</div>
</CarouselProvider>

<CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={1} step={1} infinite={true}>
<div className="w-full relative flex items-center justify-center">
    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonBack>
    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <Slider>
            <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={mi1} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={1}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={mi2} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                    </div>
                </Slide>
                <Slide index={2}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi3} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={3}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi4} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={4}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi5} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={5}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={mi6} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>
                <Slide index={6}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={mi7} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                      
                    </div>
                </Slide>               
            </div>
        </Slider>
    </div>
    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonNext>
</div>
</CarouselProvider>
            </div>
        </div>
    );
}




// {/* Carousel for mobile and Small size Devices */}