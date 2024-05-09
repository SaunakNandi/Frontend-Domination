import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
    const [query,setQuery]=useState("")
    console.log(query)
  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>
        <i class="texl-3xl text-zinc-400 ri-search-2-line"></i>
        <input type="text" className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-white' placeholder='search anything'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}/>
            {query.length>0 && <i onClick={(e)=> setQuery("")} class="text-zinc-400 text-3xl ri-close-fill"></i>}
        
        <div className="absolute bg-zinc-200 w-[50%] max-h-[50vh] top-[90%] overflow-auto rounded">
            {/* <Link className='text-zinc-700 font-semibold w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300'>
                <img src="" alt="" />
                <span>Hello </span>
            </Link> */}
            
        </div>
        
    </div>
  )
}

export default Topnav