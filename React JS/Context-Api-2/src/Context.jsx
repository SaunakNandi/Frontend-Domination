import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const UserContextData=createContext()

const UserContext=(props)=>{
    const [user,setUser]=useState(null)
    const getUsers=async()=>{
        try{
            const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(data)
            setUser(data)
          }catch(err){
            console.log(err)
          }
    }
    useEffect(()=>{
        console.log("called")
        getUsers()
      },[])
    return(
        <UserContextData.Provider value={{user,setUser}}>
            {props.children}
        </UserContextData.Provider>
    )
}
export default UserContext