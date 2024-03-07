import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 640);
  });
  return (
    <div className=" bg-konixbg overflow-x-hidden">
      <Navbar />
      <div className='flex flex-row bg-konixbg items-center'>
        <div className='m-2 pl-4 sm:pl-12 font-interregular'>Cryptocurrencies </div><MdKeyboardDoubleArrowRight /><div className='m-2 font-interbold'>Bitcoin</div>
      </div>
      <div className='flex flex-col'>
        <Hero />
        {!isMobile && (
          <Footer />
        )}
      </div>
    </div>
  )
}

export default App
