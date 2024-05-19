import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCards = ({trend}) => {
    // console.log(trend)
    return (
        
            <div className="w-[100%] flex overflow-y-hidden mb-5 p-3">
                {trend.length>0 ? trend.map((t,i)=> (
                    <Link to={`/${t.media_type}/details/${t.id}`} className="min-w-[20%] h-[50vh] mr-5 mb-5 bg-zinc-900 overflow-y-auto" key={t.id}>
                        <img src={`https://image.tmdb.org/t/p/original${t.backdrop_path || t.poster_path}`} 
                        className='w-full h-[55%] object-cover'
                        alt={t.original_title || t.title || t.original_name || t.name}  />
                        <div className="text-white p-3 h-[5%]">

                            <h1 className='font-semibold'>
                                {t.original_title || t.title || t.original_name || t.name} 
                            </h1>
                            <p className='mt-2 mb-1 text-sm'>{t.overview.slice(0,50)}...
                            <span className='text-blue-400'> more</span></p>
                        </div>
                    
                    </Link>
                )): <h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to Show</h1>}
            </div>
  )
}

export default HorizontalCards