import React from 'react'
import refokus_logo from '../assets/refokus_logo.svg'


const Navbar = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-6 flex items-center'>
            <img src={refokus_logo} alt="" />
            <div className="links flex gap-14 ml-20">
                {["Home","Work","Culture","","News"].map((elem,index)=>(
                    
                    elem.length===0? (<span className='w-1 h-10 bg-zinc-800'></span>):
                    (
                        <a href="#" className="font-regular text-sm flex items-center gap-1">
                        {index===0 && (<span style={{boxShadow:"0 0 0.25em #00FF19"}}
                         className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>)}
                        {elem}
                        </a>
                    )
                ))}
            </div>
        </div>
    );
}

export default Navbar;
