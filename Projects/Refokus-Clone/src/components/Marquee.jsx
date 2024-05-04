import React from 'react'

const Marquee = ({imagesurls}) => {
  return (
    // can you add whitespace-nowrap
    <div className='flex w-full py-5 gap-20 overflow-hidden'>
        {imagesurls.map(url=><img src={url} className='w-28 flex-shrink-0'/>)}
        {imagesurls.map(url=><img src={url} className='flex-shrink-0'/>)}
    </div>
  )
}

export default Marquee