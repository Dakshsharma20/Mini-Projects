import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <button className='bttn' onClick={()=>{navigate('/practice')}}>Practice</button>
        <button className='bttn' onClick={()=>{navigate('/calci')}}>Calculator</button>
        <button className='bttn' onClick={()=>{navigate('/tic-tac-toe')}}>TicTacToe</button>
        <button className='bttn' onClick={()=>{navigate('/crousal')}}>crousal </button>
        <button className='bttn' onClick={()=>{navigate('/slider')}}>crousal </button>
        <button className='bttn' onClick={()=>{navigate('/snakeladder')}}>SnakeLadder</button>

    </div>
  )
}

export default Home