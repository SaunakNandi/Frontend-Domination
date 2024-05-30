import { useState } from "react"

const useCount = () => {
    const [count,setCount]=useState(0)
    const increment=()=>{
        return setCount(count+1)
    }
    const decrement=()=>{
        return setCount(count-1)
    }
    const restart=()=>{
        return setCount(0)
    }
  return (
    {count,increment,decrement,restart}
  )
}

export default useCount