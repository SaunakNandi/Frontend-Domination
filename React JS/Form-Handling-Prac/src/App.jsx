import Cards from './Components/Cards'
import Form from './Components/Form'
import React, { useState } from 'react'

const App = () => {
  const [users,setUsers]=useState([])

  const handleFormSubmitData=(data)=>{
    setUsers([...users,data])
  }
  const handleRemove=(id)=>{
    setUsers((prev)=>prev.filter((item,index)=> index!==id))
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className="container mx-auto">
        <Cards handleRemove={handleRemove} users={users}></Cards>
        <Form handleFormSubmitData={handleFormSubmitData}></Form>
      </div> 
    </div>
  )
}

export default App