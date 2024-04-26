import React, { useContext } from 'react'
import UserDetails from './UserDetails'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'
const User = () => {
    const {users}=useContext(UserContext)
    console.log(users)
    return (
        <div>
            {/* <UserDetails></UserDetails> */}
            <h1 className='text-3xl'>User List</h1>
            <div className="flex flex-col w-1/2 gap-3  mt-10">
                {users.map(u=>(
                    <Link key={u.id} to={`/user/${u.id}`} className='bg-red-200 p-3'>{u.username}</Link>
                ))}
                
            </div>
        </div>
    )
}

export default User