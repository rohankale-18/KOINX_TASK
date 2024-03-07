import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoTriangleUp,GoTriangleDown } from "react-icons/go";

const Firstcoin = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true&precision=2');
        setData(response.data.bitcoin);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { inr, inr_24h_change, usd, usd_24h_change } = data;

  return (
    <div className='px-8 py-4 w-full border-2 bg-white rounded-tl-lg rounded-tr-lg flex flex-col items-start justify-start font-interregular'>
      <div className='flex flex-row items-center my-2'>
        <img className='my-2 mx-1' src="/btclogo.png" alt="" />
        <div className='my-2 mx-1 font-interextrabold'>Bitcoin</div>
        <div className='my-2 mx-1 text-sm text-gray-400 font-intersemibold'>BTC</div>
        <div className='bg-gray-500 text-sm px-2 py-1 mx-4 text-white rounded-md'>Rank #1</div>
      </div>
      <div className='flex flex-row justify-center items-center my-2'>
        <div className='font-interbold text-xl mx-1'>${usd.toLocaleString()}</div>
        <div className={`font-intersemibold rounded-md [70px] h-[25px] mx-3 px-2 text-xs flex flex-row items-center justify-center ${usd_24h_change < 0 ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100'}`}>
          {usd_24h_change < 0 ? <GoTriangleDown /> : <GoTriangleUp />}
          {usd_24h_change.toFixed(2)}%</div>
        <div className='text-gray-500 text-xs font-intersemibold'>(24H)</div>
      </div>
      <div className='font-intersemibold text-sm text-gray-800 mx-1 pb-2'>₹{Math.trunc(inr).toLocaleString()}</div>
    </div>
  );
};

export default Firstcoin;
