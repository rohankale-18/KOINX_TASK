import React from 'react'
import { AiFillInfoCircle } from "react-icons/ai";
import Coincard from './Coincard';
import { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Senticard from './Senticard';

const Sentiment = () => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 500;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 500;
        }
    };
    return (
        <div className=' mt-6 px-8 py-4 w-full border-2 bg-white shadow rounded-lg flex flex-col items-start justify-start font-interregular'>
            <div className='font-bold text-2xl my-2 font-interextrabold'>Sentiments</div>
            <div className='font-interregular flex flex-row justify-center text-slate-600 items-center my-2'>Key Events <AiFillInfoCircle className='mx-2' /></div>
            <div className='flex flex-row items-center w-[100%] my-2'>

                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 shadow-md rounded-full h-[50px] w-[50px]' onClick={slideLeft} size={40} />
                <div
                    ref={sliderRef}
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    <Senticard />
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 shadow-md rounded-full h-[50px] w-[50px]' onClick={slideRight} size={40} />
            </div>
            <div className='font-interregular text-slate-600 flex flex-row justify-center items-center'>Analyst Estimates <AiFillInfoCircle className='mx-2' /></div>
            <div className='flex flex-row justify-center w-full items-center md:mx-10  my-4'>
                <div className='flex-[10%]'>
                    <div className='flex bg-green-200 opacity-90 rounded-full w-[150px] h-[150px] justify-center items-center'>
                        <div className='flex justify-center items-center font-intersemibold text-4xl text-green-600'>76%</div>
                    </div>

                </div>
                <div className='flex-[60%] font-interregular mx-4 text-gray-500'>
                    <div className='w-full  flex flex-col'>
                        <div className='flex flex-row items-center'>
                            <div className='w-[15%] md:w-[60px]'>Buy</div>
                            <div className='bg-green-500 rounded-sm h-[8px] mx-2 w-[76%]'></div>
                            <div>76%</div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='flex flex-row items-center'>
                            <div className='w-[15%] md:w-[60px]'>Hold</div>
                            <div className='bg-gray-400 rounded-sm h-[8px] mx-2 w-[8%]'></div>
                            <div>8%</div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='flex flex-row items-center'>
                            <div className='w-[15%] md:w-[60px]'>Sell</div>
                            <div className='bg-red-500 rounded-sm h-[8px] mx-2 w-[16%]'></div>
                            <div>16%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sentiment