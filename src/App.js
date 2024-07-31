import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calci'
import TicTacToe from './pages/TicTacToe'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/calci' element={<Calculator/>}></Route>
        <Route path='/tic-tac-toe' element={<TicTacToe/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App