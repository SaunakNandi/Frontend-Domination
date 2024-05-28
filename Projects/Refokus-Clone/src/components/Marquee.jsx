import { motion } from 'framer-motion'

const Marquee = ({imagesurls,direction}) => {
  return (
    // can you add whitespace-nowrap
    <div className='flex w-full overflow-hidden'>
      <motion.div  className="flex flex-shrink-0 gap-40 py-10 pr-40"
        initial={{x: (direction==='left')? "0": "-100%"}} 
        animate={{x: (direction==='left')? "-100%": "0"}} 
        transition={{ease:"linear", duration:15, repeat:Infinity}}>
          {imagesurls.map((url,index)=>(<img key={index} src={url} className=''/>))}
      </motion.div>
      <motion.div className="flex flex-shrink-0 gap-40 py-10 pr-40"
        initial={{x: (direction==='left')? "0": "-100%"}} 
        animate={{x: (direction==='left')? "-100%": "0"}} 
        transition={{ease:"linear", duration:15, repeat:Infinity}}>
          {imagesurls.map((url,index)=>(<img key={index} src={url} className=''/>))}
      </motion.div>
    </div>
  )
}

export default Marquee