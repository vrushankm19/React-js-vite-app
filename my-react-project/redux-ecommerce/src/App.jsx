import React from 'react'
import { Route,Routes } from 'react-router-dom'
import "./App.css";
import Home from './pages/Home'
import Card from './pages/Card'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </>
  )
}

export default App