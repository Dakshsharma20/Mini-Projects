// import React from 'react'

// function Practice() {
//   const str = "coding";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// };
//   return (
//     <div>Practice</div>
//   )
// }

// export default Practice
// import React from 'react'

// function Practice() {
//   function getStringLength(str) {
//     let length = 0;

//     for (let i = 0; ; i++) {
//         if (str[i] === undefined) {
//             break;
//         }
//         length++;
//     }


//     return length;
//     console.log(getStringLength);
// }
//   return (
//     <div>Practice

//     </div>
//   )
// }

// export default Practice

// import React from 'react'

// function Practice() {
//   function strLength(s) {
//     let length = 0;
//     while (s[length] !== undefined)
//       length++;
//     return length;
//   }

//   console.log(strLength("coding")); 

//   return (
//     <div>Practice</div>
//   )
// }

// export default Practice

// import React from 'react'

// function Practice() {
//     let str = 'coding'
//     let len = 0;
//     for(let i=0; str[i]; i++){
//         len++
        
//     }
//     console.log(len)
//     return (
//         <div>Practice</div>
//     )
// }

// export default Practice

// import React from 'react'

// function Practice() {
// let name = 'codingshaala'    
// let letter = 'a'
// let repeat = 0

// for(let i of name){
//     if (i==letter ){
//     repeat = repeat+1
//     }
// }
// console.log(repeat)


//   return (
//     <div>Practice</div>
//   )
// }

// export default Practice


// import React from 'react'

// function Practice() {
//   let arr = "codingshaala"
//   let ch = "a"
//   for(let i=0; i<arr.length; i++){
//     if(ch==arr[i])
//       console.log(ch)
    
//   }
//   return (
//     <div>Practice</div>
//   )
// }

// export default Practice

// import React from 'react'



import axios from 'axios'
import React, {useEffect, useState} from 'react'




function Practice() {
  useEffect(()=>{
    getData()
  },[])

  const[title,setTitle]=useState("")
  const[discription,setDescription]=useState("")
  const [todoList, setTodoList] = useState([])
  const getData = ()=>{
    axios.get("http://localhost:5001/api/todo").then((res)=> setTodoList(res.data.data))
}
  const postData =()=>{
    const obj ={
      title: title,
      description: discription
    }
    axios.post("http://localhost:5001/api/todo",obj).then(
      (res)=>{ alert("Data Posted Successfully"); setTitle(""); setDescription(""); getData()},
      (err)=>{alert(err)}
    )}
   
    

  return (
    <div>
       {JSON.stringify(todoList)}
      <div className='gap-5'>
        <input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='title' ></input>
        <input value={discription} onChange={(e)=> setDescription(e.target.value)} placeholder='discription' ></input>
        <button onClick={()=> postData()}>Submit</button>
      </div>
      <table className='border'>
        <thead>
          <th className='border'>S.NO</th>
          <th className='border'>Title</th>
          <th className='border'>discription</th>
        </thead>
        <tbody>
          {todoList.map((i, index)=>
          <tr>
            <td>{index+1}</td>
            <td>{i.title}</td>
            <td>{i.description}</td>
          </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}


export default Practice

