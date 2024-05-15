import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({wallpaper}) => {
    console.log(wallpaper)
  return (
    <div
        style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path})`,
        backgroundPosition: `top`,backgroundSize: `cover`}}
        className="w-full h-[60vh] flex flex-col justify-end pb-[2%] pl-[5%] text-white items-start">
        <h1 className='text-4xl font-black'>
            {wallpaper.original_title || wallpaper.title || wallpaper.original_name || wallpaper.name}
        </h1>
        <p className='w-[50%] mt-3'>{wallpaper.overview.slice(0,150)}...
            <Link className='text-blue-400' to={`/${wallpaper.media_type}/details/${wallpaper.id}`}> more</Link>
        </p>
        <p className='mt-5'>
            {
                wallpaper.release_date? 
                <span>
                    <i className="mr-2 ri-megaphone-fill"></i>{wallpaper.release_date}
                </span>
                :<span></span>
            }
            <i className="text-yellow-500 ml-4 mr-2 ri-album-fill"></i>{wallpaper.media_type.toUpperCase()}
        </p>
        <Link className="p-3 mt-2 bg-[#6556CD] rounded-lg font-semibold">Watch Trailer</Link>
    </div>
  )
}

export default Header