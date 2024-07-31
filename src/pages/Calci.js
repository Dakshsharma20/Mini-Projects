import React, { useState } from 'react'

function Calci() {
  
  const[Inputvalue,setInputValue] = useState("")
  return (
    <div className='background'>
      <div className='maindiv'>
        <div className='container'>{Inputvalue}
        </div>
        <div className='container1'>
          <button onClick={()=> setInputValue("")} className='operator'>AC</button>
          <button onClick={()=>setInputValue(Inputvalue + "7")} className='btn'>7</button>
          <button onClick={()=>setInputValue(Inputvalue + "4")}  className='btn'>4</button>
          <button onClick={()=>setInputValue(Inputvalue + "1")}  className='btn'>1</button>
          <button onClick={()=>setInputValue(Inputvalue + "00")}  className='btn'>00</button>
          <button onClick={()=>setInputValue(Inputvalue.slice(0,Inputvalue.length-1))}  className='operator'>DEL</button>
          <button onClick={()=>setInputValue(Inputvalue + "8")}  className='btn'>8</button>
          <button onClick={()=>setInputValue(Inputvalue + "5")}  className='btn'>5</button>
          <button onClick={()=>setInputValue(Inputvalue + "2")}  className='btn'>2</button>
          <button onClick={()=>setInputValue(Inputvalue + "0")}  className='btn'>0</button>
          <button onClick={()=>setInputValue(Inputvalue + "%")}  className='operator'>%</button>
          <button onClick={()=>setInputValue(Inputvalue + "9")}  className='btn'>9</button>
          <button onClick={()=>setInputValue(Inputvalue + "6")}  className='btn'>6</button>
          <button onClick={()=>setInputValue(Inputvalue + "3")}  className='btn'>3</button>
          <button onClick={()=>setInputValue(Inputvalue + ".")}  className='btn'>.</button>
          <button onClick={()=>setInputValue(Inputvalue + "/")}  className='operator'>/</button>
          <button onClick={()=>setInputValue(Inputvalue + "*")}  className='operator'>*</button>
          <button onClick={()=>setInputValue(Inputvalue + "-")}  className='operator'>-</button>
          <button onClick={()=>setInputValue(Inputvalue + "+")}  className='operator'>+</button>
          <button onClick={()=>setInputValue(eval(Inputvalue)) }  className='equalbtn'>=</button>
        </div> 
      </div>
    </div>
  )
}

export default Calci