import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const {users}=useContext(UserContext)
  return (
    <div>
        <h1 className='text-2xl font-bold text-red-200'>{users[id].username}</h1>
        <h3>{users[id].city}</h3>
        {/* navigate(-1) to take you back the previous page */}
        <button onClick={()=> navigate(-1)} className="bg-green-300 p-3 mt-5 rounded-md">Go Back</button>
    </div>
  )
}

export default UserDetails