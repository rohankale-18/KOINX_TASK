import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const Trending = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                const coins = response.data.coins.slice(0, 3);
                setTrendingCoins(coins);
            } catch (error) {
                console.error('Error fetching trending coins:', error);
            }
        };

        fetchTrendingCoins();
    }, []);
    // console.log(trendingCoins)
    return (
        <div className='mt-6 px-8 py-4 w-full border-2 bg-white shadow rounded-lg flex flex-col items-start justify-start font-interregular'>
            <div className='text-2xl font-interbold'>Trending Coins (24h)</div>
            {trendingCoins.map((coin) => (
                <div className='w-full flex flex-row'>
                    <div key={coin.item.coin_id} className='my-2 flex items-center justify-between'>
                        <img src={coin.item.small} alt={coin.item.name} className='w-8 h-8 mr-2 inline-block' />
                    </div>
                    <div className='flex flex-row justify-between items-center font-intersemibold text-sm w-full'>
                        <div className='ml-2'>{coin.item.name} ({coin.item.symbol})</div>
                        <div className={`ml-2 flex flex-row justify-center items-center text-xs px-1 py-1 rounded-md ${coin.item.data.price_change_percentage_24h?.usd < 0 ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100'}`}>
                            {coin.item.data.price_change_percentage_24h?.usd < 0 ? <GoTriangleDown /> : <GoTriangleUp />}
                            {coin.item.data.price_change_percentage_24h?.usd.toFixed(2)}%
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Trending;
