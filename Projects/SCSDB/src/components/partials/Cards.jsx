import React from 'react'
import { Link } from 'react-router-dom'
import no_image from '../../assets/no_image.png'
const Cards = ({data,title}) => {

  const filteredData=data.filter(obj => obj.profile_path !== null);  // for people profile. Hopes its working
  // remove the duplicate data
  const uniqueObjectsSet = new Set(filteredData.map(obj => JSON.stringify(obj)));

// Convert back to an array of objects
  const uniqueObjectsArray = Array.from(uniqueObjectsSet).map(jsonString => JSON.parse(jsonString));

  console.log(uniqueObjectsArray.length," ",data.length);

  return (
    <div className='flex flex-wrap w-full h-full bg-[#28283c] px-[2%] mt-5 relative'>
        {uniqueObjectsArray.map((c,i)=> (
          <Link to={`/${c.media_type || title}/details/${c.id}`} key={i} className='relative w-[25vh] mx-[1%] mb-[5%]'>
                  <img className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" 
                  src={(c.poster_path || c.backdrop_path || c.profile_path)?
                    `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`
                    : no_image} alt="" />
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