import React from 'react'
import popcorn from '../../assets/popcorn.png'
const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-200 p-3'>
        <h1>
            <img className='text-[#6556CD]' src={popcorn} alt="" />
            SCSDB
        </h1>
    </div>
  )
}

export default Sidenav