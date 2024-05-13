import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  
  return (
    <div className='flex flex-wrap w-full h-full bg-[#28283c] px-[2%] mt-5 relative'>
        {data.map((c,i)=> (
          <Link to={`/${c.media_type || title}/details/${c.id}`} key={i} className='relative w-[25vh] mx-[1%] mb-[5%]'>
                  <img className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" 
                  src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} alt="" />
                  <h1 className='text-2xl text-zinc-300 font-semibold mt-3'>
                      {c.original_title || c.title || c.original_name || c.name}
                  </h1>
                  {
                    c.vote_average ?
                   (
                      <div className="absolute right-[-10%] bottom-[25%] text-white w-[5vh] h-[5vh] flex justify-center items-center rounded-full text-xl font-semibold bg-yellow-400">{(c.vote_average*10).toFixed()}<sup>%</sup></div> )
                      :
                      (
                        <div ></div>
                      )
                  }
        </Link>
      ))}
    </div>
  )
}

export default Cards