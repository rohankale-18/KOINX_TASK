import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const Mininav = () => {
    return (
        <div className='flex flex-row justify-start my-3 font-intersemibold border-b-2 h-[50px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            
            <div className='hover:text-blue-600 hover:border-b-4 hover:border-blue-600 px-4 py-3'>Overview</div>
            <div className='hover:text-blue-600 hover:border-b-4 hover:border-blue-600 px-4 py-3'>Fundamentals</div>
            <div className='hover:text-blue-600 hover:border-b-4 hover:border-blue-600 px-4 py-3'>News Insights</div>
            <div className='hover:text-blue-600 hover:border-b-4 hover:border-blue-600 px-4 py-3'>Sentiments</div>
            <div className='hover:text-blue-600 hover:border-b-4 hover:border-blue-600 px-4 py-3'>Team</div>
            <div className='hover:text-blue-600 hover:border-b-4 hover:border-blue-600 px-4 py-3'>Technicals</div>
            <div className='hover:text-blue-600 hover:border-b-4 hover:border-blue-600 px-4 py-3'>Tokenomics</div>
        </div>
    )
}

export default Mininav