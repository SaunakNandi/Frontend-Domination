import React, { useContext } from 'react'
import { UserContextData } from '../Context'
import { Link, useParams } from 'react-router-dom'

const User = () => {
  const {id}=useParams()
  let {user}=useContext(UserContextData)
  let x=user && user.find(item=>item.id==id)
  // console.log(x)
  return user?(
    <div>
      <h1>{x.name}</h1>
      <p>{x.username}</p>
      <p>{x.email}</p>
      <Link className='text-blue-500 mt-10' to='/'>Back</Link>
    </div>
  ):<h1>No Data</h1>
}

export default User