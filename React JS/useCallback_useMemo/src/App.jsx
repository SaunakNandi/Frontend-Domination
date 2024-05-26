import { useMemo, useState } from 'react'
import './App.css'
import Parent from './useCallBack/Parent'

function App() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const IncrementOne=()=>{
    setCounterOne(counterOne+1)
  }
  const IncrementTwo=()=>{
    setCounterTwo(counterTwo+1)
  }


  // `useMemo` is used to memoize the result of expensive computations so that they are only recalculated when their dependencies change. It's useful for optimizing performance by avoiding unnecessary re-calculations.
  const isEven=useMemo(()=>{
    console.warn('......')
    let i=0
    while(i<2000000000)i++;
    return counterOne%2===0?true:false
  },[counterOne])
  return (
    <div className="">
      <button onClick={IncrementOne}>count1: {counterOne}</button>
      <span>{isEven? 'even':'odd'}</span>
      <button onClick={IncrementTwo}>count2: {counterTwo}</button>
      {/* <Parent/> */}  {/* useCallBack */}
    </div>
  )
}

export default App
