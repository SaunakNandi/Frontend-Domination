import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import Arqitel from '../assets/videos/Arqitel.webm'
import Cula_promo from '../assets/videos/Cula_promo.mp4'
import webflow from '../assets/videos/webflow.mp4'
import yahoo from '../assets/videos/yahoo.webm'

const Products = () => {
    var products=[
        {
            title:"Arqitel", 
            description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true,
            case_study:false,
        },
        {
            title:"Cula", 
            description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live:true,
            case_study:false,
        },
        {
            title:"Layout Hand",
            description:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live:true,
            case_study:false,
        },
        {
            title:"Yahoo!",
            description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live:true,
            case_study:true,
        }
    ]

    const [pos,setPos]=useState(0)
    const mover=(val)=>{
        setPos(val*23)
    }
  return (
    <div className='mt-32 relative'>
        {products.map((item,idx)=>(
            <Product values={item} index={idx} key={idx} mover={mover}/>
        ))}
        <div className="w-full h-full pointer-events-none absolute top-0">
            {/* when you use initial the translate stop working. Hence we set both y and x inside initial*/}
            <motion.div initial={{y:pos, x:"-50%"}} 
            animate={{y:pos+`rem`}}
            transition={{ease:[0.76,0,0.24,1], duration:0.4}}
            className="window w-[32rem] h-[23rem] absolute left-[44%] bg-white overflow-hidden">
                <motion.div animate={{y: -pos+`rem`}} className="w-full h-full bg-sky-100"
                transition={{ease:[0.76,0,0.24,1], duration:0.4}}>
                    <video autoPlay loop src={Arqitel}></video>
                </motion.div>
                <motion.div animate={{y: -pos+`rem`}} className="w-full h-full bg-sky-300"
                transition={{ease:[0.76,0,0.24,1], duration:0.4}}>
                    <video autoPlay loop src={Cula_promo}></video>
                </motion.div>
                <motion.div animate={{y: -pos+`rem`}} className="w-full h-full bg-sky-600"
                transition={{ease:[0.76,0,0.24,1], duration:0.4}}>
                    <video autoPlay loop src={webflow}></video>
                </motion.div>
                <motion.div animate={{y: -pos+`rem`}} className="w-full h-full bg-sky-800"
                transition={{ease:[0.76,0,0.24,1], duration:0.4}}>
                    <video autoPlay loop src={yahoo}></video>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products