import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
import Error from './Error';

const DataComponentSub = () => {
  return (
    <div className='container'>
        <Routes>
          <Route exact path='/blogs' element={<Blogs />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/' element={<About />} />
          <Route path='/*' element={<Error />} />
        </Routes>
    </div>
  );
};

export default DataComponentSub;
