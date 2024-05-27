import React, { useEffect, useState } from 'react'
import withFetchAndSearch from './withFetchAndSearch';


const TodoUsers= ({data}) => {

    // const [todos,setTodos]=useState([])
    // const [term,setTerm]=useState('')
    // useEffect(()=>{
    //     const fetchedTodos=async()=>{
    //         const res=await fetch("https://jsonplaceholder.typicode.com/todos")
    //         const json=await res.json()
    //         setTodos(json)
    //         console.log(json)
    //     }
    //     fetchedTodos()
    // },[])

    // let filteredTodos=todos.filter((todo)=>{
    //     return todo.title.toLowerCase().includes(term.toLowerCase())
    //     // return todo.title.indexOf(term)>=0   // 2nd way to search
    // }).slice(0,10).map((todo)=>(
    //     <div key={todo.userId}>
    //         <h4>{todo.title}</h4>
    //     </div>
    // ))
  return (
    <>
      {/* <h2>Users</h2>
        <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/>
        <div>
            {filteredTodos}
        </div> */}
      <div>
        <h2>Todos</h2>
        {data.slice(0, 10).map((todo) => (
          <div key={todo.id}>
            <h4>{todo.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

const SearchTodos=withFetchAndSearch(TodoUsers, 'https://jsonplaceholder.typicode.com/todos', 'title');

export default SearchTodos 