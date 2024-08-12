import React, { useState } from 'react'

function SnakeLadder() {
  const [dice, setDice] = useState("")
  const [p1, setP1] = useState(0)
  const[p2, setP2] = useState(0)
  const [turn, setTurn] = useState(1)
  const throwDice = ()=>{
    let diceValue = Math.ceil(Math.random()*6)
    setDice(diceValue)
    if(turn == 1){
      if(diceValue+p1<31){
        setP1(diceValue+p1)
      }
      setTurn(2)
    }
    else if (turn == 2){
      if(p2 + diceValue<31){

        setP2(diceValue+p2)
      }
      setTurn(1)
    }
  }
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100%] '>
      {p1==3 ? setTimeout(()=>{setP1(22)}, 800) : null}
      {p1==5 ? setTimeout(() =>{setP1(8)}, 800) : null}     
      {p1==11 ? setTimeout(()=>{setP1(26)},800) : null}
      {p1==20 ? setTimeout(()=>{setP1(29)},800) : null}

      {p1==17 ? setTimeout(()=>{setP1(4)},800) : null}
      {p1==19 ? setTimeout(()=>{setP1(7)},800) : null}     
      {p1==21 ? setTimeout(()=>{setP1(9)},800) : null}
      {p1==27 ? setTimeout(()=>{setP1(1)},800) : null}

      {p2==3  ? setTimeout(()=>{setP2(22)},800) : null}
      {p2==5  ? setTimeout(()=>{setP2(8)}, 800) : null}     
      {p2==11 ? setTimeout(()=>{setP2(26)},800) : null}
      {p2==20 ? setTimeout(()=>{setP2(29)},800) : null}

      {p2==17 ? setTimeout(()=>{setP2(4)},800) : null}
      {p2==19 ? setTimeout(()=>{setP2(7)},800) : null}     
      {p2==21 ? setTimeout(()=>{setP2(9)},800) : null}
      {p2==27 ? setTimeout(()=>{setP2(1)},800) : null}
       
      {p1==30? setTimeout(()=>alert("Player 1 won"), 300):null}
      {p2==30? setTimeout(()=>alert("player 2 won"),300):null}

      <div className='flex bg-cover    flex-wrap h-[500px] w-[600px]  bg-[url(https://media.licdn.com/dms/image/C4D12AQFPcUrsF97dTw/article-cover_image-shrink_600_2000/0/1543747519723?e=2147483647&v=beta&t=-12hmqMWefu4vwmnTJxLrgchhwBwqX4oUpUleOzVD0E)]'>
        <button className={ p1==25 && p2==25 ? "dono" : p1 == 25 ? "goti1" : p2 == 25 ? "goti2" : "blank" }>25</button>
        <button className={ p1==26 && p2==26 ? "dono" : p1 == 26 ? "goti1" : p2 == 26 ? "goti2" : "blank" }>26</button>
        <button className={ p1==27 && p2==27 ? "dono" : p1 == 27 ? "goti1" : p2 == 27 ? "goti2" : "blank" }>27</button>
        <button className={ p1==28 && p2==28 ? "dono" : p1 == 28 ? "goti1" : p2 == 28 ? "goti2" : "blank" }>28</button>
        <button className={ p1==29 && p2==29 ? "dono" : p1 == 29 ? "goti1" : p2 == 29 ? "goti2" : "blank" }>29</button>
        <button className={ p1==30 && p2==30 ? "dono" : p1 == 30 ? "goti1" : p2 == 30 ? "goti2" : "blank" }>30</button>
        <button className={ p1==24 && p2==24 ? "dono" : p1 == 24 ? "goti1" : p2 == 24 ? "goti2" : "blank" }>24</button>
        <button className={ p1==23 && p2==23 ? "dono" : p1 == 23 ? "goti1" : p2 == 23 ? "goti2" : "blank" }>23</button>
        <button className={ p1==22 && p2==22 ? "dono" : p1 == 22 ? "goti1" : p2 == 22 ? "goti2" : "blank" }>22</button>
        <button className={ p1==21 && p2==21 ? "dono" : p1 == 21 ? "goti1" : p2 == 21 ? "goti2" : "blank" }>21</button>
        <button className={ p1==20 && p2==20 ? "dono" : p1 == 20 ? "goti1" : p2 == 20 ? "goti2" : "blank" }>20</button>
        <button className={ p1==19 && p2==19 ? "dono" : p1 == 19 ? "goti1" : p2 == 19 ? "goti2" : "blank" }>19</button>
        <button className={ p1==13 && p2==13 ? "dono" : p1 == 13 ? "goti1" : p2 == 13 ? "goti2" : "blank" }>13</button>
        <button className={ p1==14 && p2==14 ? "dono" : p1 == 14 ? "goti1" : p2 == 14 ? "goti2" : "blank" }>14</button>
        <button className={ p1==15 && p2==15 ? "dono" : p1 == 15 ? "goti1" : p2 == 15 ? "goti2" : "blank" }>15</button>
        <button className={ p1==16 && p2==16 ? "dono" : p1 == 16 ? "goti1" : p2 == 16 ? "goti2" : "blank" }>16</button>
        <button className={ p1==17 && p2==17 ? "dono" : p1 == 17 ? "goti1" : p2 == 17 ? "goti2" : "blank" }>17</button>
        <button className={ p1==18 && p2==18 ? "dono" : p1 == 18 ? "goti1" : p2 == 18 ? "goti2" : "blank" }>18</button>
        <button className={ p1==12 && p2==12 ? "dono" : p1 == 12 ? "goti1" : p2 == 12 ? "goti2" : "blank" }>12</button>
        <button className={ p1==11 && p2==11 ? "dono" : p1 == 11 ? "goti1" : p2 == 11 ? "goti2" : "blank" }>11</button>
        <button className={ p1==10 && p2==10 ? "dono" : p1 == 10 ? "goti1" : p2 == 10 ? "goti2" : "blank" }>10</button>
        <button className={ p1==9 && p2==9 ? "dono" : p1 == 9 ? "goti1" : p2 == 9 ? "goti2" : "blank" }>9</button>
        <button className={ p1==8 && p2==8 ? "dono" : p1 == 8 ? "goti1" : p2 == 8 ? "goti2" : "blank" }>8</button>
        <button className={ p1==7 && p2==7 ? "dono" : p1 == 7 ? "goti1" : p2 == 7 ? "goti2" : "blank" }>7</button>
        <button className={ p1==1 && p2==1 ? "dono" : p1 == 1 ? "goti1" : p2 == 1 ? "goti2" : "blank" }>1</button>
        <button className={ p1==2 && p2==2 ? "dono" : p1 == 2 ? "goti1" : p2 == 2 ? "goti2" : "blank" }>2</button>
        <button className={ p1==3 && p2==3 ? "dono" : p1 == 3 ? "goti1" : p2 == 3 ? "goti2" : "blank" }>3</button>
        <button className={ p1==4 && p2==4 ? "dono" : p1 == 4 ? "goti1" : p2 == 4 ? "goti2" : "blank" }>4</button>
        <button className={ p1==5 && p2==5 ? "dono" : p1 == 5 ? "goti1" : p2 == 5 ? "goti2" : "blank" }>5</button>
        <button className={ p1==6 && p2==6 ? "dono" : p1 == 6 ? "goti1" : p2 == 6 ? "goti2" : "blank" }>6</button>
      </div>
      p1:{p1}
      <br></br>
      p2:{p2}
      <br></br>
      turn: {turn}
      <button onClick={()=>throwDice()} className='blank1'>{dice}</button>
    </div>
  )
}

export default SnakeLadder