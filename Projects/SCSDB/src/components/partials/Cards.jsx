import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  return (
    <div className='flex flex-wrap w-full h-full bg-[#28283c] px-[2%] mt-5'>
        {data.map((c,i)=> (
            <Link key={i} className='w-[25vh] mx-[1%] mb-[5%]'>
                <img className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" 
                src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path}`} alt="" />
                <h1 className='text-2xl text-zinc-300 font-semibold mt-3'>
                    {c.original_title || c.title || c.original_name || c.name}
                </h1>
            </Link>
        ))}
    </div>
  )
}

export default Cards