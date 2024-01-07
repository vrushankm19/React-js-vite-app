import React from 'react'
import { useLocation } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <h1>{location.pathname.replace(/\//g, ' ')}</h1>
        <p>This Page Name is <b>{location.pathname.replace(/\//g, ' ')}</b></p>
        <p>Please Write <b>modi</b> in url to see the magic</p>
    </div>
  )
}

export default Home