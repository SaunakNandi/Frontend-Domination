import React from 'react'
import Dropdown from './Dropdown'

const HorizontalCards = ({trend}) => {


    return (
        
            <div className="w-[100%] flex h-[45vh] overflow-y-hidden mb-5 p-3">
                {trend.map((t,i)=> (
                    <div className="min-w-[15%] mr-5 mb-5 bg-zinc-900" key={i}>
                        <img src={`https://image.tmdb.org/t/p/original${t.backdrop_path || t.poster_path}`} 
                        className='w-full h-[55%] object-cover'
                        alt="" />
                        <div className="text-white p-3 h-[55%]">

                            <h1 className='font-semibold'>
                                {t.original_title || t.title || t.original_name || t.name} 
                            </h1>
                            <p className='mt-2 mb-3'>{t.overview.slice(0,50)}...
                            <span className='text-blue-400'> more</span></p>
                        </div>
                    
                    </div>
                ))}
            </div>
  )
}

export default HorizontalCards