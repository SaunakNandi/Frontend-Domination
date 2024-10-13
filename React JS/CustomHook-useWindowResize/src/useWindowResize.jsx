import React, { useEffect, useState } from 'react'

function useWindowResize() {
    const [windowSize,setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight,
   })
   console.log(windowSize)
  useEffect(()=>{
    function handleResize(){
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    window.addEventListener('resize',handleResize)

    return()=>{
        window.removeEventListener('resize',handleResize)
    }

  },[])
  return [windowSize.width,windowSize.height] 
}

export default useWindowResize