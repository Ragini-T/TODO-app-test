// rafc
import axios from 'axios'
import React, { useState } from 'react'

const AxiosPost = () => {
    const data ={
        fname:"",
        lname:""
    }
    const[inputData, setInputData] = useState(data)




    const handleInput=(event)=>{
        
        console.log(event.target.value);
        setInputData({...inputData, [event.target.name]:event.target.value})

    }
    const handleSubmit=(evnt)=>{
        evnt.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/todos",inputData)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    }
    console.log(inputData)
    const handleForm =(evnt)=>{
        evnt.preventDefault()

        axios.post("https://jsonplaceholder.typicode.com/todos",inputData)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.put("https://jsonplaceholder.typicode.com/todos/1",inputData)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleDelete=(ev)=>{
        ev.preventDefault()
         axios.put("https://jsonplaceholder.typicode.com/todos/1",inputData)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <form onSubmit={handleForm}>
            <input type='text' placeholder='enter name' name='fname' onChange={handleInput}/>
            <input type='text' placeholder='enter last name' name='lname'  onChange={handleInput}/>
            <button onClick={handleSubmit}>submit</button><br></br>
            <button onClick={handleUpdate}>update</button> <br />
            <button onClick={handleDelete}>delete </button>

        </form>
      
    </div>
  )
}

export default AxiosPost
