import React from 'react'

const Senticard = ({ color }) => {
    return (
        <div className='flex flex-row'>
            <div className='w-[500px] p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 h-[200px] bg-blue-100 rounded-md my-3 mx-2 '>
                <div className='flex w-full'>
                    <div className='mt-2 '><img src="newspaper.png" alt="" /></div>
                    <div className='flex flex-col w-[500px] m-2'>
                        <div className='w-full text-wrap'>
                            <div className='font-interbold w-full text-md'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
                            <div className='font-interregular w-full text-md my-2'>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[500px] p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 h-[200px] bg-green-100 rounded-md my-3 mx-2 '>
                <div className='flex w-full'>
                    <div className='mt-2 '><img src="graph.png" alt="" /></div>
                    <div className='flex flex-col w-[500px] m-2'>
                        <div className='w-full text-wrap'>
                            <div className='font-interbold w-full text-md'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
                            <div className='font-interregular w-full text-md my-2'>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Senticard