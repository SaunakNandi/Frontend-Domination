import axios from '../../utils/axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    
    const [wallpaper, setWallpaper]=useState(null)
    const [activeindex,setActiveIndex]=useState(1)
    const GetWallpaper=async()=>{
        const {data}=await axios.get(`/trending/movie/day?page=2`)
        console.log(data.results)
        setWallpaper(data.results)
    }
    const Slide_Left=()=>{
        setActiveIndex(!activeindex? wallpaper.length-1:activeindex-1)
    }
    const Slide_Right=()=>{
        setActiveIndex((activeindex+1) % wallpaper.length)
    }
    
    GetWallpaper();
    useEffect(()=>{
        const intervalId=setInterval(() => {
            Slide_Right()
        }, 4000);
        return ()=>{
            clearInterval(intervalId)
        }
    },[])

  return wallpaper && (
    wallpaper.map((w,i)=>(
        <div className={(activeindex===i? 'initial':'hidden')}>
            <div style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${w.backdrop_path})`,
                    backgroundPosition: `top`,backgroundSize: `cover`}}
                    className="w-full h-[60vh] flex flex-col justify-end pb-[2%] pl-[5%] text-white items-start">
                    <h1 className='text-4xl font-black'>
                        {w.original_title || w.title || w.original_name || w.name}
                    </h1>
                    <p className='w-[50%] mt-3'>{w.overview.slice(0,150)}...
                        <Link className='text-blue-400' to={`/${w.media_type}/details/${w.id}`}> more</Link>
                    </p>
                    <p className='mt-5'>
                        {
                            w.release_date? 
                            <span>
                                <i className="mr-2 ri-megaphone-fill"></i>{w.release_date}
                            </span>
                            :<span></span>
                        }
                        <i className="text-yellow-500 ml-4 mr-2 ri-album-fill"></i>{w.media_type.toUpperCase()}
                    </p>
                    <div className="flex items-center mt-10 gap-10 justify-between w-full">
                        <div>
                        <Link className="p-3 bg-[#6556CD] rounded-lg font-semibold"
                        to={`/${w.media_type}/details/${w.id}/trailer`}>Watch Trailer</Link>
                        </div>
                        <div className='mr-[33vw]'>
                            <i className="text-4xl mr-3 ri-arrow-left-circle-line"
                            onClick={Slide_Left}></i>
                            <i className="text-4xl ri-arrow-right-circle-line" onClick={Slide_Right}></i>
                        </div>
                    </div>
                </div>
        </div>
    ))
    )
}

export default Header