import React, { useState } from "react";
import work1 from "../assets/Work/work1.png";
import work2 from "../assets/Work/work2.png";
import work3 from "../assets/Work/work3.png";
import work4 from "../assets/Work/work4.png";
import work5 from "../assets/Work/work5.png";
import work6 from "../assets/Work/work6.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export const Work = () => {

  const [images,setImages]=useState([
    { url: work1, top: "50%", left: "50%", isActive: false },
    { url: work2, top: "56%", left: "44%", isActive: false },
    { url: work3, top: "45%", left: "56%", isActive: false },
    { url: work4, top: "60%", left: "53%", isActive: false },
    { url: work5, top: "43%", left: "40%", isActive: false },
    { url: work6, top: "66%", left: "55%", isActive: false },
  ]);
  const {scrollYProgress}=useScroll()  // scrollYProgress- takes value from 0 to 1
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", latest)
    Show_Hide_Images(Math.floor(latest*100))  // this will convert to percentage 
  })

  function imageShow(arr)
  {
    console.log(images)
    setImages(prev=>(
      prev && prev.map((item,index)=>(
        (arr.indexOf(index)===-1)?(
          {...item,isActive:false}
        ):(
          {...item,isActive:true}
        )
      ))
    ))
  }
  function Show_Hide_Images(scrollval){
    // console.log(scrollval)

    switch(scrollval)
    {
      case 0: 
      imageShow([])
          break;
      case 2: 
      imageShow([0])
          break;
      case 4: imageShow([0,1])
          break;
      case 6: imageShow([0,1,2])
          break;
      case 8: imageShow([0,1,2,3])
          break;
      case 10: imageShow([0,1,2,3,4])
          break;
      case 12: imageShow([0,1,2,3,4,5])
          break;
    }
  }
  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center mt-[15vh]">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images && images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                  key={index}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
