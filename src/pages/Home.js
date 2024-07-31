import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <button className='bttn' onClick={()=>{navigate('/calci')}}>Calculator</button>
        <button className='bttn' onClick={()=>{navigate('/tic-tac-toe')}}>TicTacToe</button>
    </div>
  )
}

export default Home