import React from 'react'
import Bluecard from './Bluecard'

const Team = () => {
  return (
    <div className=' mt-6 px-8 py-4 w-full border-2 bg-white shadow rounded-lg flex flex-col items-start justify-start font-interregular'>
          <div className='font-interbold text-2xl'>
              Team
          </div>   
          <div className='py-2 font-interregular'> 
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
          </div>
          <Bluecard name="John Smith" pic="/sandeep.png"/>
          <Bluecard name="Elina Williams" pic="/women.png"/>
          <Bluecard name="John Smith" pic="/sandeep2.png"/>
    </div>
  )
}

export default Team