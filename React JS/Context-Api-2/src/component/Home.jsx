import React, { useContext } from 'react'
import { UserContextData } from '../Context'
import { Link } from 'react-router-dom'

const Home = () => {
    let {user,setUser}=useContext(UserContextData)
  return (
    user ? 
    (
        <div>
            {user.map((user,index)=>{
                return (
                    <div key={user.id} className='mb-3'>
                        <Link to={`/users/${user.id}`}>
                            <span className='text-blue-300 text-xl'>{user.name}</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    ) : <h1 className="text-3xl text-red-300 text-center mr-5">Loading...</h1>
  )
}

export default Home