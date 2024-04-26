import React from 'react';
import { useEffect,useState } from 'react';
import axios from "../utils/axios"

const Service = () => {
    const [first,setFirst]=useState("this is normal data")
    const [second,setSecond]=useState("this is very large data")

    const getUsers = () =>{
      axios.get("/users").then(users => {
        console.log(users)
      }).catch(err=> console.log(err))
    }
    useEffect(()=>{
      console.log("Service component is created")

      return ()=>{
        console.log("Service component is destroyed")
      }
    },[second])
    return(
      <div>
        <h1>{first}</h1>
        <button onClick={()=>{setFirst("Normal data has been changed")}} 
        className="rounded mb-10 bg-red-200 p-2">Change Normal Data</button>
        <h1>{second}</h1>
        <button onClick={()=>{setSecond("Large data has been changed")}} 
        className="rounded mb-10 bg-red-200 p-2">Change large Data</button>
      </div>
    )
}
export default Service;
