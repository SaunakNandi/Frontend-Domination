import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
        <h1 className='text-2xl text-white font-bold'>
            <i class="text-[#6556CD] ri-tv-fill mr-2"></i>
            <span className='text-2xl text-white'>SCSDB</span>
        </h1>
        <nav className='flex flex-col gap=3 text-zinc-400 text-xl'>
          <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
          <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 hover:pl-8">
            <i class="ri-fire-line"></i>Trending
          </Link>
          <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:pl-8 p-5">
          <i class="mr-2 ri-bard-line"></i>Popular</Link>
          <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 hover:pl-8">
          <i class="mr-2 ri-movie-2-line"></i>Movies</Link>
          <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 hover:pl-8">
          <i class="mr-2 ri-tv-2-line"></i>TV Shows
          </Link>
          <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 hover:pl-8">
          <i class="mr-2 ri-team-fill"></i>People</Link>
        </nav>

        <hr className='border-none h-[1px] bg-zinc-400 text-xl gap-3'/>

        <nav className='flex flex-col gap=3 text-zinc-400 text-xl'>
          <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
          <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 hover:pl-8">
            <i class="mr-2 ri-information-fill"></i>About
          </Link>
          <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:pl-8 p-5">
            <i class="mr-2 ri-phone-fill"></i>Contact
          </Link>
          
        </nav>
    </div>
  )
}

export default Sidenav