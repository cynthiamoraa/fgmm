import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import Nav from './Nav'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <MainPage />
  </React.StrictMode>,
)
