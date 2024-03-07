import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen py-2 sm:px-10 px-2 shadow  bg-white flex justify-between mb-1 border-b'>
      <div className='py-2'>
        <img src="/KoinXLogo.png" alt="logo"  />
      </div>

      <ul className='hidden md:flex items-center space-x-10 font-semibold'>
        <li>Crypto Taxes</li>
        <li>Free Tools</li>
        <li>Resource Center</li>
        <li>
          <button className='bg-gradient-to-br from-blue-500 to-blue-700 py-1 px-4 text-white rounded-lg'>Get Started</button>
        </li>
      </ul>

      {/* hamburger menu */}
      <button className='space-y-1 group md:hidden'>
        <div className='w-6 h-1 bg-black'></div>
        <div className='w-6 h-1 bg-black'></div>
        <div className='w-6 h-1 bg-black'></div>

        {/* menu */}
        <ul className='bg-white h-screen  font-semibold w-screen pt-2 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-start'>
          <button className='pr-12 py-6 relative ml-auto'>
            <div className='w-6 h-1 rotate-45 absolute bg-black'></div>
            <div className='w-6 h-1 -rotate-45 absolute bg-black'></div>
          </button>
          <li className='flex justify-center w-full py-4 hover:bg-slate-100'>Crypto Taxes</li>
          <li className='flex justify-center w-full py-4 hover:bg-slate-100'>Free Tools</li>
          <li className='flex justify-center w-full py-4 hover:bg-slate-100'>Resource Center</li>
          <li className='flex justify-center w-full py-4 hover:bg-slate-100'>Get Started</li>
        </ul>
      </button>
    </div>
  )
}

export default Navbar