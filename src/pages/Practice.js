import React from 'react'

function Practice() {
    let List = ["APPLE", "BALL", "CAT"]

  return (
    <div>
        {List.map((i, index)=> 
        <button className='h-[30px] w-[30%] bg-amber-400 border-x-4  '>{i.length}</button>
        )}
    </div>
  )
}                              

export default Practice