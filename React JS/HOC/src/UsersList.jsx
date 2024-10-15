import React, { useEffect, useState } from 'react'
import withFetchAndSearch from './withFetchAndSearch'
const UsersList = ({data}) => {

    // const [users,setUsers]=useState([])
    // const [term,setTerm]=useState('')
    // useEffect(()=>{
    //     const fetchedUsers=async()=>{
    //         const res=await fetch("https://jsonplaceholder.typicode.com/users")
    //         const json=await res.json()
    //         setUsers(json)
    //         console.log(json)
    //     }
    //     fetchedUsers()
    // },[])
    let renderUsers=data.map((user,i)=>(
        <div key={user.id}>
            <h4>{user.name}</h4>
        </div>
    ))
    // let filteredUsers=users.filter((user)=>{
    //     // return user.name.toLowerCase().includes(term.toLowerCase())
    //     return user.name.indexOf(term)>=0   // 2nd way to search
    // }).map((user)=>(
    //     <div key={user.id}>
    //         <h4>{user.name}</h4>
    //     </div>
    // ))
  return data && (
    <>
        {/* <h2>Users</h2>
        <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/> */}
        <div>
            {/* {filteredUsers} */}
            {
                data.map((user,i)=>(
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                    </div>
                ))
            }
        </div>
    </>
  )
}

const SearchUsers=withFetchAndSearch(UsersList,'https://jsonplaceholder.typicode.com/users', 'name')

export default SearchUsers