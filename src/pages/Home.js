import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-4'>
      <div className='w-[20%] h-[40vh] bg-red-500 bg-center bg-cover bg-[url(https://www.elprocus.com/wp-content/uploads/2015/03/Simple-Mini-Projects.jpg)]'></div>

      <div className='flex gap-5'>
        <button className='bttn border box-border shadow h-[20vh] w-[20%]  bg-center bg-yellow-500   bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9LTgLw3pPdpkhGpokMtq8wIfm2ZThAJLKQQ&s)]' onClick={() => { navigate('/practice') }}></button>
        <button className='bttn border box-border shadow h-[20vh] w-[20vh] bg-yellow-500 bg-center bg-cover bg-[url(https://cdn.pixabay.com/photo/2015/11/03/08/53/calculator-1019743_640.jpg)]' onClick={() => { navigate('/calci') }}></button>
        <button className='bttn border box-border shadow h-[20vh] w-[20vh] bg-yellow-500 bg-center bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEk93zHL08RSBu5vr6fHsHRQVhqbmJ5hDyyg&s)]' onClick={() => { navigate('/tic-tac-toe') }}></button>
        <button className='bttn border box-border shadow h-[20vh] w-[20vh] bg-yellow-500 bg-center bg-cover bg-[url(https://www.searchenginejournal.com/wp-content/uploads/2021/12/instagram-carousel-61b7446cb19e1-sej-1280x720.jpg)]' onClick={() => { navigate('/crousal') }}> </button>
        <button className='bttn border box-border shadow h-[20vh] w-[20vh] bg-yellow-500 bg-center bg-cover bg-[url()]' onClick={() => { navigate('/slider') }}>crousal </button>
        <button className='bttn border box-border shadow h-[20vh] w-[20vh] bg-yellow-500 bg-center bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_pqrz7Yq5AoTdOv-4ESRCNmyvp2IBOzwryw&s)]' onClick={() => { navigate('/snakeladder') }}></button>
        <button className='bttn border box-border shadow h-[20vh] w-[20vh] bg-yellow-500 bg-center bg-cover bg-[url(https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=360)]' onClick={() => navigate('/rock-paaper-scisor')}></button>
        <button className='bttn border box-border shadow h-[20vh] w-[20vh] bg-yellow-500 bg-center bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdewQCy9Hggmu9OgAaxXgRuOzzAAqrSYfoA&s)]' onClick={() => navigate('/todo')}></button>
      </div>
    </div>
  )
}

export default Home