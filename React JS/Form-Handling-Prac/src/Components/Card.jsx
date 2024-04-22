import React from 'react'

const Card = ({index,user,handleRemove}) => {
  return (
    <>
        <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
            <div className="image w-[3vw] h-[3vw] rounded-full bg-blue-200 overflow-hidden object-cover">
                <img src={user.image} className='w-full h-full' alt="" />
            </div>
            <h1 className='mt-1 text-xl font-semibold '>${user.name}</h1>
            <h4 className="opacity-40 text-sx font-semibold">${user.email}</h4>
            <p className='mt-1 text-center text-xs leading-none tracking-tight font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quasi.</p>
            <button onClick={()=>handleRemove(index)} className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibol text-white mt-4">Remove</button>
        </div>
    </>
  )
}

export default Card