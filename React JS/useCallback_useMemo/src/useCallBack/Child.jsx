import React, {memo} from 'react'

const Child = ({counterTwo,func}) => {
    console.log("ChildComponent")
  return (
    <div>Child Componet Called</div>
  )
}

export default memo(Child) // will not allow to repeated calling 