import React,{Children, useCallback, useState} from 'react'
import Child from './Child'
const Parent = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState([])

    // useCallback is primarily used to memoize functions so that they are not recreated on every render unless their dependencies change. This is useful when passing callbacks to child components to prevent unnecessary re-renders
    const func=useCallback(()=>{
        console.log("You should run")
    },counterTwo) // now child component will be called only when counterTwo gets updated
  const IncrementOne=()=>{
    setCounterOne(counterOne+1)
  }
  return (
    <div>
        {/* Using props will kill the use of memo() hence using callback*/}
        <Child counterTwo={counterTwo} func={func}/>
      <button onClick={IncrementOne}>count1: {counterOne}</button>

    </div>
  )
}

export default Parent