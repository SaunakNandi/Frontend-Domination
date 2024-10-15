import { useState } from 'react'
import './App.css'
// import UsersList from './UsersList'
import SearchTodos from './TodoUsers'
import SearchUsers from './UsersList'


// Requirement -> I want to create 2 search functionality where one searchbar will search based on 'title' and another searchbar will search based on 'name'

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
