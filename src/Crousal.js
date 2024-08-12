import React, { useState } from 'react'

function Crousal() {

  const [move, setMove] = useState(0)
  return (
    <div className='overflow-hidden w-full'>
      <div style={{transform : `translateX(-${move}%)`}} className=' w-[400%] duration-200 h-[100vh] bg-slate-900 relative overflow-hidden text-red-800 flex '>
        <img className='object-cover w-[100%] ' src='https://wallpapercave.com/wp/wp2587537.jpg'></img>
        <img className='object-cover w-[100%] ' src='https://wallpapers.com/images/hd/yellow-sand-beach-b6p5zimgcshwbj3j.jpg'></img>
        <img className='object-cover w-[100%] ' src='https://cdn.wallpapersafari.com/0/58/uWc5KL.jpg'></img>
        <img className='object-cover w-[100%] ' src='https://cdn.wallpapersafari.com/0/58/uWc5KL.jpg'></img>
      </div>
      <div onClick={()=> move>0 ? setMove(move - 25): null} className='text-white text-[50px] absolute top-[50%] px-4'>{"<"}</div>
    <div onClick={()=> {
      if (move<75){
        setMove(move + 25)
      }
  
    }} className='text-white text-[50px] absolute right-0 top-[50%] px-4'>{">"}</div>

      <div className='flex gap-2 absolute  bottom-[10%] left-[50%]'>
        <div onClick={()=> setMove(0)} style={{backgroundColor: move==0 && "green"}} className='w-[20px] h-[20px] rounded-full border '></div>
        <div onClick={()=> setMove(25)} style={{backgroundColor: move==25 && "green"}} className='w-[20px] h-[20px] rounded-full border '></div>
        <div  onClick={()=> setMove(50)} style={{backgroundColor: move==50 && "green"}} className='w-[20px] h-[20px] rounded-full border '></div>
        <div  onClick={()=> setMove(75)} style={{backgroundColor: move==75 && "green"}} className='w-[20px] h-[20px] rounded-full border '></div>
        {/* <div className='w-[20px] h-[20px] rounded-full border '></div> */}
      </div>
    </div>


  )
}

export default Crousal 