import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Getstarted = () => {
    return (
        <div className='rounded-lg bg-sidecard flex flex-col h-[500px] justify-center items-center'>
            <div className='m-3 text-white font-interbold text-2xl text-center flex justify-center items-center'>Get Started with Koinx for FREE</div>
            <div className='m-3 text-white font-interregular text-md text-center'>With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.</div>
            <img src="/Frame.png" alt="" className='w-[175px]'/>
            <button className='flex flex-row justify-center items-center text px-4 py-3 m-5 bg-white rounded-lg font-interbold text-base'>Get Started for FREE <FaArrowRight className='ml-3' /></button>
        </div>
    )
}

export default Getstarted