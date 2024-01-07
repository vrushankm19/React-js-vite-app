import React from 'react';
import { useLocation } from 'react-router-dom';
import './DataComponent.scss';


const Error = () => {
  const location = useLocation();
  const myUrl = location.pathname.replace(/\//g, ' ');
  return (
    <div>
          <h1>{myUrl}</h1>
          <p>Page is Not Found <b>{myUrl}</b></p>
          <h2>
          {
            location.pathname === '/modi' ? 'Welcome Back Modi' : 'New User' + myUrl
          }
          </h2>
    </div>
    
  )
}

export default Error