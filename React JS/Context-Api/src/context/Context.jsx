import React, { createContext } from 'react'
import { useState } from 'react'


export const UserContext=createContext()

const Context = (props) => {
    const [users,setUsers]=useState([
        {id:0,username:"John",city:"New York"},
        {id:1,username:"Mark",city:"Washington"},
        {id:2,username:"Josh",city:"New Jersey"}
    ])
  return (
    <>
        <UserContext.Provider value={{users,setUsers}}>
            {props.children}
        </UserContext.Provider>
    </>
  )
}

export default Context