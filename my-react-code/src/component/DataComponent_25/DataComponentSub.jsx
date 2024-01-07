import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';

const DataComponentSub = () => {
  return (
    <div className='container'>

        <Menu />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/blogs' element={<Blogs />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/About' element={<About />} />
          <Route path='/*' element={<Error />} />
        </Routes>
    </div>
  );
};

export default DataComponentSub;
