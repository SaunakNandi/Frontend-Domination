import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount, incrementAsync } from './reducers/counterSlice'

function App() {
  const {value}=useSelector((state)=>state.counter)
  const dispatch=useDispatch()
  return (
    <>
      <div className="m-auto container">
        <h1 className="text-center font-bold text-3xl text-red-900 mb-5">Counter: {value}</h1>
        <div className="text-center">
          <button onClick={()=>dispatch(increment())} className="rounded bg-transparent px-5 py-2 border-2 border-pink text-red-900">Increment</button>
          <button onClick={()=>dispatch(decrement())} className="rounded bg-transparent px-5 py-2 border-2 border-pink text-red-900">Decrement</button>
          <button onClick={()=>dispatch(incrementByAmount(5))} className="rounded bg-transparent px-5 py-2 border-2 border-pink text-red-900">Increment By You choice</button>
          <button onClick={()=>dispatch(incrementAsync(3))} className="rounded bg-transparent px-5 py-2 border-2 border-pink text-red-900">Increment with Delay</button>
        </div>
      </div>
    </>
  )
}

export default App
