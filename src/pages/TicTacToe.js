import React, { useState } from 'react'

function TicTacToe() {
    const [a1, setA1] = useState("")
    const [a2, setA2] = useState("")
    const [a3, setA3] = useState("")
    const [a4, setA4] = useState("")
    const [a5, setA5] = useState("")
    const [a6, setA6] = useState("")
    const [a7, setA7] = useState("")
    const [a8, setA8] = useState("")
    const [a9, setA9] = useState("")
    const [turn, setTurn] = useState(1)
    const block1Fn = () => {
        if (turn == 1 && a1 == "") {
            setA1("X")
            setTurn(2)
        }
        else if (turn == 2 && a1 == "") {
            setA1("O")
            setTurn(1)
        }
    }

    const block2Fn = () => {
        if (turn == 1 && a2 == "") {
            setA2("X")
            setTurn(2)
        }
        else if (turn == 2 && a2 == "") {
            setA2("O")
            setTurn(1)

        }
    }
    const block3Fn = () => {
        if (turn == 1 && a3 == "") {
            setA3("X")
            setTurn(2)
        }
        else if (turn == 2 && a3 == ""){
            setA3("O")
        setTurn(1)
    }
}
    const block4Fn = () => {
        if (turn == 1 && a4 == "") {
            setA4("X")
            setTurn(2)
        }
        else if (turn == 2 && a4 == ""){
            setA4("O")
        setTurn(1)}
    }
    const block5Fn = () => {
        if (turn == 1 && a5 == "") {
            setA5("X")
            setTurn(2)
        }
        else if (turn == 2 && a5 == ""){
            setA5("O")
        setTurn(1)}
    }
    const block6Fn = () => {
        if (turn == 1 && a6 == "") {
            setA6("X")
            setTurn(2)
        }
        else if (turn == 2 && a6 == ""){
            setA6("O")
        setTurn(1)}
    }
    const block7Fn = () => {
        if (turn == 1 && a7 == "") {
            setA7("X")
            setTurn(2)
        }
        else if (turn == 2 && a7 == ""){
            setA7("O")
        setTurn(1)}
    }
    const block8Fn = () => {
        if (turn == 1 && a8 == "") {
            setA8("X")
            setTurn(2)
        }
        else if (turn == 2 && a8 == ""){
            setA8("O")
        setTurn(1)}
    }
    const block9Fn = () => {
        if (turn == 1 && a9 == "") {
            setA9("X")
            setTurn(2)
        }
        else if (turn == 2 && a9 == ""){
            setA9("O")
        setTurn(1)}
    }
    return (
        <div className='background'>
            {a1=="X" && a2=="X" && a3 == "X" ? setTimeout(()=>{alert("Player 1 won")},100) : null}
            {a4=="X" && a5=="X" && a6=="X" ? setTimeout(()=>{alert("player 1 won")},100): null}
            {a7=="X" && a8=="X" && a9=="X" ? setTimeout(()=>{alert("player 1 won")},100):null}
            {a1=="X" && a4=="X" && a7=="X" ? setTimeout(()=>{alert("player 1 won")},100):null}
            {a2=="X" && a5=="X" && a8=="X" ? setTimeout(()=>{alert("player 1 won")},100):null}
            {a3=="X" && a6=="X" && a9=="X" ? setTimeout(()=>{alert("player 1 won")},100):null}
            {a1=="X" && a5=="X" && a9=="X" ? setTimeout(()=>{alert("player 1 won")},100):null}
            {a3=="X" && a5=="X" && a7=="X" ? setTimeout(()=>{alert("player 1 won")},100):null}

            {a1=="O" && a2=="O" && a3=="O" ? setTimeout(()=>{alert("Player 2 won")},100) : null}
            {a4=="O" && a5=="O" && a6=="O" ? setTimeout(()=>{alert("player 2 won")},100): null}
            {a7=="O" && a8=="O" && a9=="O" ? setTimeout(()=>{alert("player 2 won")},100):null}
            {a1=="O" && a4=="O" && a7=="O" ? setTimeout(()=>{alert("player 2 won")},100):null}
            {a2=="O" && a5=="O" && a8=="O" ? setTimeout(()=>{alert("player 2 won")},100):null}
            {a3=="O" && a6=="O" && a9=="O" ? setTimeout(()=>{alert("player 2 won")},100):null}
            {a1=="O" && a5=="O" && a9=="O" ? setTimeout(()=>{alert("player 2 won")},100):null}
            {a3=="O" && a5=="O" && a7=="O" ? setTimeout(()=>{alert("player 2 won")},100):null}

            {turn}  
            <div className='ttt-board'>
                <div onClick={() => block1Fn()} className='ttt-box'>{a1}</div>
                <div onClick={() => block2Fn()} className='ttt-box'>{a2}</div>
                <div onClick={() => block3Fn()} className='ttt-box'>{a3}</div>
                <div onClick={() => block4Fn()} className='ttt-box'>{a4}</div>
                <div onClick={() => block5Fn()} className='ttt-box'>{a5}</div>
                <div onClick={() => block6Fn()} className='ttt-box'>{a6}</div>
                <div onClick={() => block7Fn()} className='ttt-box'>{a7}</div>
                <div onClick={() => block8Fn()} className='ttt-box'>{a8}</div>
                <div onClick={() => block9Fn()} className='ttt-box'>{a9}</div>
            </div>

        </div>
    )
}

export default TicTacToe