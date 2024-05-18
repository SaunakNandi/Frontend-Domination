import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from './Loading'
const MovieDetails = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const {info}=useSelector(state=>state.movie)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(asyncloadmovie(id))

    // unmounting the data for clean up
    return ()=>{
      dispatch(removemovie())
    }
  },[])
  console.log(info && info.detail)
  return info?(
    <div className='w-screen h-screen px-[10%]'
    style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path})`,
    backgroundPosition: `top`,backgroundSize: `cover`,backgroundRepeat:'no-repeat'}}>
        <nav className='h-[10vh] w-full text-zinc-400 flex gap-10 items-center'>
          {/* back icon */}
          <Link onClick={()=>navigate(-1)} 
          className="mr-2 ri-arrow-left-line hover:text-[#6556CD] font-2xl"></Link>  
          {/* using <a> tag because we need to redirect it to different page*/}
          <a href={`info.detail.homepage`} target='_blank'>
            <i className="ri-external-link-fill"></i>
          </a>
          <a href="">
            <i className="ri-earth-fill"></i>
          </a>
          <a href="">imdb</a>
        </nav>
    </div>
  ):<Loading/>
}

export default MovieDetails