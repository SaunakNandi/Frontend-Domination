import React from 'react'
import refokus_logo from '../assets/refokus_logo.svg'
import Button from './Button';


const Navbar = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
            <div className="nleft">
                <img src={refokus_logo} alt="" />
                <div className="links flex gap-14 ml-20">
                    {["Home","Work","Culture","","News"].map((elem,index)=>(
                        
                        elem.length===0? (<span className='w-[2px] h-10 bg-zinc-700'></span>):
                        (
                            <a href="#" className="font-regular text-sm flex items-center gap-1">
                            {index===1 && (<span style={{boxShadow:"0 0 0.25em #00FF19"}}
                            className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>)}
                            {elem}
                            </a>
                        )
                    ))}
                </div>
            </div>
            <Button/>
        </div>
    );
}

export default Navbar;
