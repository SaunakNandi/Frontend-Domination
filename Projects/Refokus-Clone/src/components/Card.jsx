import React from 'react'
import { motion } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";
const Card = ({width,capsule,para,hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor:(hover=="true")? '#7443ff':'none', 
    padding: hover==="false" && "30px"}} className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[50vh] flex flex-col justify-between`}>
        <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <h3>Onew Head</h3>
                <GoArrowRight />
            </div>
            <h1 className='text-3xl font-medium mt-5'>Whatever</h1>
        </div>
        <div className="down w-full">
          {capsule && (
          <>
            <h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-100">Contact Us</button>
          </> )
          }
          {
            para && <p className='text-sm text-zinc-500 font-medium'>Explore what drives our team</p>
          }
        </div>
    </motion.div>
  )
}

export default Card