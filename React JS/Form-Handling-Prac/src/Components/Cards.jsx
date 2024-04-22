import React from 'react'
import Card from './Card'
const Cards = ({users,handleRemove}) => {
  return ( 
    <div className='w-full max-h-96 overflow-auto bg-sky-100 p-4 flex justify-center flex-wrap gap-5'>
        {users.map((user,index)=>(
            <Card key={index} index={index} user={user} handleRemove={handleRemove} />
        ))}
    </div>
  )
}

export default Cards