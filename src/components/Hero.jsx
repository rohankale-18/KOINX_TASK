import React from 'react'
import Trending from './Trending'
import TradingView from './TradingView'
import Team from './Team'
import About from './About'
import Tokenomics from './Tokenomics'
import Footer from './Footer'
import Sentiment from './Sentiment'
import Mininav from './Mininav'
import Performance from './Performance'
import Firstcoin from './Firstcoin'
import Getstarted from './Getstarted'

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-7 px-2 sm:px-12'>
            <div className='sm:col-span-5 p-3 h-full'>
                <Firstcoin />   
                <div className='h-[350px] sm:h-[550px]'>
                    <TradingView />
                </div>
                <Mininav />
                <Performance />
                <Sentiment />
                <About />
                <Tokenomics />
                <Team />
                <div className='sm:hidden'>
                    <Footer />
                </div>
            </div>
            <div className='flex flex-col justify-start sm:col-span-2 items-center p-3'>
                {/* <div>
                    <img src="/FrameBlue.png" alt="" />
                </div> */}
                <Getstarted />
                <Trending />
            </div>
        </div>
    )
}

export default Hero