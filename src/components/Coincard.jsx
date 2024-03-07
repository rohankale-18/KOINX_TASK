import React from 'react';

const Coincard = ({ logo, symbol, change, price, sparkline }) => {
  for (let i = 0; i < price.length; i++) {
    if (price.substr(i, 3) === 'sub') {
      price = "~$0.000";
      break;
    }
  }
  
  return (
    <div className='w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 h-[225px] bg-white border-2 border-slate-200 rounded-md my-3 mx-2'>
      <div className='flex flex-row justify-start items-center'>
        <img src={logo} alt='' className='w-[45px]' />
        <div className='font-interbold mx-2'>{symbol}</div>
        <div className={`ml-2 flex flex-row justify-center items-center text-xs px-1 py-1 rounded-md ${change < 0 ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100'}`}>
          {change < 0 ? "" : "+"}{change.toFixed(2)}%
        </div>
      </div>
      <div className='font-interbold text-lg my-2'>{price}</div>
      <div className='flex justify-center items-center'>
        <img src={sparkline} alt="" className='w-[70%] h-[80px]' />
      </div>
    </div>
  );
};

export default Coincard;
