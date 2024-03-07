import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Holding = () => {
    return (
        <div className='flex flex-col justify-start items-start  w-full border-b-2 border-gray-300 pb-5'>
            <div className='font-interextrabold text-2xl my-3'>Already Holding Bitcoin?</div>

            <div className='flex flex-col md:flex-row justify-between w-full'>
                <div className='bg-gradient-to-br from-green-400 to-blue-800 h-[200px] md:w-[50%] m-2 md:mr-2 rounded-lg flex flex-row'>
                    <div className='flex justify-center items-center w-[40%]'>
                        <img src="/phone.png" alt="" className='h-[85%] pl-3' />
                    </div>
                    <div className='w-[60%] flex flex-col justify-center items-start'>
                        <div className='text-3xl font-intersemibold mx-3 text-white'>Calculate Your Profits</div>
                        <button className='flex flex-row justify-center items-center px-4 py-1 m-3 bg-white rounded-lg font-interbold text-base'>Check Now <FaArrowRight className='ml-3'/></button>
                    </div>
                </div>
                <div className='bg-gradient-to-br from-orange-400 to-red-500 h-[200px] md:w-[50%] m-2 md:ml-2 rounded-lg flex flex-row'>
                    <div className='flex justify-center items-center w-[40%]'>
                        <img src="/phone2.png" alt="" className='h-[85%] pl-3' />
                    </div>
                    <div className='w-[60%] flex flex-col justify-center items-start'>
                        <div className='text-3xl font-intersemibold mx-3 text-white'>Calculate Your Tax Liability</div>
                        <button className='flex flex-row justify-center items-center px-4 py-1 m-3 bg-white rounded-lg font-interbold text-base'>Check Now <FaArrowRight className='ml-3' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Holding