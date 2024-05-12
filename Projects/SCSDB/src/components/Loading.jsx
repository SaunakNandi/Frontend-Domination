import React from 'react'
import loader from '../assets/loader.gif'
const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black overflow-hidden'>
        <img className='w-[50%] object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading