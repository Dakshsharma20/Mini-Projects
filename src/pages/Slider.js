import React, { useState } from 'react'

function Slider() {
    const [slide, setSlide] = useState(0)
    return (
        <div className='w-[70%] ml-[15%] mt-[15vh] overflow-hidden'>
            {slide}
            <div style={{ transform: `translateX(-${slide}%)` }} className='flex w-[300%] duration-200'>
                <div className='bg-red-500 w-[100%] h-[70vh]'></div>
                <div className='bg-blue-500 w-[100%] h-[70vh]'></div>
                <div className='bg-green-500 w-[100%] h-[70vh]'></div>

            </div>
            <div className='absolute top-[50vh] left-[10%] text-[22px] flex justify-between w-[80%]'>
                <label onClick={() => slide>0 ? setSlide(slide - 33.3) : setSlide(66.6)}>{"<"}</label>
                <label onClick={() => {
                    if (slide < 66.6) {
                        setSlide(slide + 33.3)
                    }
                    else{
                        setSlide(0)
                    }
                }}>{">"}</label>
            </div>
        </div>
    )
}

export default Slider