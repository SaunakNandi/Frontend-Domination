import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className='min-w-40 px-4 py-2 text-black bg-zinc-100 rounded-full flex items-center justify-between'>
        <span className="text-sm font-medium">Start a Project</span>
        <IoMdReturnRight className="w-3 h-3" />
    </div>
  )
}

export default Button