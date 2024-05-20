import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from'react-router-dom'
import UserContext from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </UserContext>
)
