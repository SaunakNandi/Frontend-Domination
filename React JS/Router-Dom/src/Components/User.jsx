import React from 'react'
import {Link} from 'react-router-dom'
const User = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
        <h1 className="text-4xl text-red-300 mb-2">User</h1>
        <div className='flex w-1/2 flex-col mt-5 '>
          <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/user/john">John</Link>
          <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/user/derek">Derek</Link>
          <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/user/miko">Miko</Link>
        </div>
    </div>
  )
}

export default User