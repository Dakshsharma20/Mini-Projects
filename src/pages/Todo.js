import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Todo() {
    useEffect(()=>{
        getData()
    }, [])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const postData = ()=>{
        const obj = {
            title: title,
            description: description
        }
        axios.post("http://localhost:5001/api/todo", obj).then(
            (res)=>{ alert("Data Posted Successfully"); setTitle(""); setDescription(""); getData()},
            (err)=>{alert(err)}
        )
    }
    const [todoList, setTodoList] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:5001/api/todo").then((res)=> setTodoList(res.data.data))
    }
  return (
    <div>
        {JSON.stringify(todoList)}
        <div className='flex gap-5'>
            <input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='title'></input>
            <input value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='description'></input>
            <button onClick={()=> postData()}>Submit</button>
        </div>
        <table>
            <thead>
                <th className='border'>S No.</th>
                <th className='border'>Title</th>
                <th className='border'>Description</th>
            </thead>
            <tbody>
                {todoList.map((i, index)=>
                <tr>
                    <td className='border px-4'>{index+1}.</td>
                    <td className='border px-4'>{i.title}</td>
                    <td className='border px-4'>{i.description}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Todo