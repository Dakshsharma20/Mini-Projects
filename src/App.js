import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calci'
import TicTacToe from './pages/TicTacToe'
import Crousal from './Crousal'
import Slider from './pages/Slider'
import SnakeLadder from './pages/SnakeLadder'
import Practice from './pages/Practice'
import RockPapperScisor from './pages/RockPapperScisor'
import Todo from './pages/Todo'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/calci' element={<Calculator/>}></Route>
        <Route path='/tic-tac-toe' element={<TicTacToe/>}></Route>
        <Route path='/crousal' element={<Crousal/>}></Route>
        <Route path='/slider' element={<Slider/>}></Route>
        <Route path='/snakeladder' element={<SnakeLadder/>}></Route>
        <Route path='/practice' element={<Practice/>}></Route>
        <Route path='/rock-paaper-scisor' element={<RockPapperScisor/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App