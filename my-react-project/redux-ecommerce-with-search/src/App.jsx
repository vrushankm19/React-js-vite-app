import React from 'react';
import Navbar from './component/Navbar';
import Create from './component/Create';
import Read from './component/Read';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App