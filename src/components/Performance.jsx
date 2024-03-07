import React from 'react'
import { AiFillInfoCircle } from "react-icons/ai";

const Performance = () => {
    return (
        <div className='mt-6 px-8 py-4 w-full border-2 bg-white shadow rounded-lg flex flex-col items-start justify-start font-interregular'>
            <div className='font-interbold text-2xl my-4'>Performance</div>
            <div className='flex flex-row justify-between items-center w-full my-2'>
                <div>
                    <div className='my-1 text-slate-500'>Today's Low</div>
                    <div className='my-1 text-slate-500 font-intersemibold'>46,930.22</div>
                </div>
                <div className='w-[70%] mx-3 h-[8px] rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500'></div>
                <div className='flex flex-col items-end'>
                    <div className='my-1 text-slate-500'>Today's High</div>
                    <div className='my-1 text-slate-500 font-intersemibold'>49,343.83</div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center w-full my-2'>
                <div>
                    <div className='my-1 text-slate-500'>52W Low</div>
                    <div className='my-1 text-slate-500 font-intersemibold'>16,930.22</div>
                </div>
                <div className='w-[70%] mx-3 h-[8px] rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500'></div>
                <div className='flex flex-col items-end'>
                    <div className='my-1 text-slate-500'>52W High</div>
                    <div className='my-1 text-slate-500 font-intersemibold'>49,743.83</div>
                </div>
            </div>
            <div className='font-intersemibold text-slate-600 text-lg my-3 flex flex-row items-center'>Fundamentals <AiFillInfoCircle className='mx-2' /></div>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='text-slate-500 col-span-1 md:w-[50%] w-full'>
                    <div className='flex flex-row justify-between py-4 m-2  border-b-2'>
                        <div>Bitcoin Price</div>
                        <div className="font-intersemibold text-gray-700">$16,815.46</div>
                    </div>
                    <div className='flex flex-row justify-between py-4 m-2 border-b-2'>
                        <div>24h Low / 24h High</div>
                        <div className="font-intersemibold text-gray-700">$16,382.07 / $16,874.12</div>
                    </div>
                    <div className='flex flex-row justify-between py-4 m-2 border-b-2'>
                        <div>7d Low / 7d High</div>
                        <div className="font-intersemibold text-gray-700">$16,382.07 / $16,874.12</div>
                    </div>
                    <div className='flex flex-row justify-between py-4 m-2 border-b-2'>
                        <div>Trading Volume</div>
                        <div className="font-intersemibold text-gray-700">$23,249,202,782</div>
                    </div>
                    <div className='flex flex-row justify-between py-4 m-2 border-b-2'>
                        <div>Market Cap Rank</div>
                        <div className="font-intersemibold text-gray-700">#1</div>
                    </div>
                </div>
                <div className='text-slate-500 col-span-1 md:w-[50%] w-full'>
                    <div className='flex flex-row justify-between py-4 m-2 border-b-2'>
                        <div>Market Cap</div>
                        <div className="font-intersemibold text-gray-700">$323,507,290,047</div>
                    </div>
                    <div className='flex flex-row justify-between py-4 m-2 border-b-2'>
                        <div>Market Cap Dominance</div>
                        <div className="font-intersemibold text-gray-700">38.343%</div>
                    </div>
                    <div className='flex flex-row justify-between py-4 m-2 border-b-2'>
                        <div>Volume / Market Cap</div>
                        <div className="font-intersemibold text-gray-700">0.0718</div>
                    </div>
                    <div className='flex flex-row justify-between items-center py-2 my-2 border-b-2'>
                        <div>All-Time High</div>
                        <div className='flex flex-col justify-center text-sm items-end'>
                            <div className='flex flex-row'>
                                <div className='font-intersemibold text-gray-700 mx-2'>$69,044.77</div>
                                <div className='font-intersemibold text-red-500'>-75.6%</div>
                            </div>
                            <div className='font-interregular text-sm text-gray-600'>Nov 10, 2021 (about 1 year)</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center py-2 my-2 border-b-2'>
                        <div>All-Time Low</div>
                        <div className='flex flex-col justify-center text-sm items-end'>
                            <div className='flex flex-row'>
                                <div className='font-intersemibold text-gray-700 mx-2'>$67.81</div>
                                <div className='font-intersemibold text-green-600'>24729.1%</div>
                            </div>
                            <div className='font-interregular text-sm text-gray-600'>Nov 10, 2021 (about 1 year)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance