import React from 'react'

const Bluecard = ({name,pic}) => {
    return (
        <div className='flex sm:flex-row flex-col bg-bluecard p-2 m-2 rounded-md font-interregular'>
            <div className='flex-[45%] justify-center items-center p-3'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={pic} alt="" />
                    <div className='font-interbold text-md'>{ name }</div>
                    <div className='font-intermedium text-xs'>Designation Here</div>
                </div>
            </div>
            <div className='flex items-center text-sm font-interregular'>
                <div>
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                </div>
            </div>
        </div>
    )
}

export default Bluecard