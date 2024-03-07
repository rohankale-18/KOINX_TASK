import React, { useState, useEffect, useRef } from 'react';
import Coincard from './Coincard'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import axios from 'axios';

const Footer = () => {
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
    const [trendingCoins, setTrendingCoins] = useState([]);

    const slideLeft = (sliderRef) => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= window.innerWidth <= 768 ? 100 : 500;
        }
    };

    const slideRight = (sliderRef) => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += window.innerWidth <= 768 ? 100 : 500;
        }
    };

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                const coins = response.data.coins;
                setTrendingCoins(coins);
            } catch (error) {
                console.error('Error fetching trending coins:', error);
            }
        };

        fetchTrendingCoins();
    }, []);
    // console.log(trendingCoins);
    return (
        <div className='w-full h-[800px] bg-white py-16 px-2 md:px-24 mt-4 overflow-x-auto'>
            <div className='relative flex items-start flex-col'>
                <div className='font-intersemibold text-xl my-4'>You May Also Like</div>
                <div className='flex flex-row items-center w-[100%]'>

                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 shadow-md rounded-full h-[50px] w-[50px]' onClick={() => slideLeft(slider1Ref)} size={40} />
                    <div
                        ref={slider1Ref}
                        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {trendingCoins.map((coin) => (
                            <Coincard
                                logo={coin.item.small}
                                symbol={coin.item.symbol}
                                change={coin.item.data.price_change_percentage_24h?.usd}
                                price={coin.item.data.price}
                                sparkline={coin.item.data.sparkline} // Corrected prop name
                            />
                        ))}

                    </div>
                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 shadow-md rounded-full h-[50px] w-[50px]' onClick={() => slideRight(slider1Ref)} size={40} />
                </div>
            </div>
            <div className='relative flex items-start flex-col'>
                <div className='font-intersemibold text-xl my-4'>Trending Coins</div>
                <div className='flex flex-row items-center w-[100%]'>

                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 shadow-md rounded-full h-[50px] w-[50px]' onClick={() => slideLeft(slider2Ref)} size={40} />
                    <div
                        ref={slider2Ref}
                        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {trendingCoins.map((coin) => (
                            <Coincard
                                logo={coin.item.small}
                                symbol={coin.item.symbol}
                                change={coin.item.data.price_change_percentage_24h?.usd}
                                price={coin.item.data.price}
                                sparkline={coin.item.data.sparkline} // Corrected prop name
                            />
                        ))}

                    </div>
                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 shadow-md rounded-full h-[50px] w-[50px]' onClick={() => slideRight(slider2Ref)} size={40} />
                </div>
            </div>
        </div>
    )
}

export default Footer