import { useState } from 'react'
import './App.css'
// import UsersList from './UsersList'
import SearchTodos from './TodoUsers'
import SearchUsers from './UsersList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>High Order Component</h2>
      <div className="section">
        <div>
          {/* <UsersList/> */}
          <SearchUsers/>
        </div>
        <div>
          <SearchTodos/>
        </div>
      </div>
    </>
  )
}

export default App
