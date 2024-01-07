import React from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h1>{location.pathname.replace(/\//g, ' ')}</h1>
        <p>This Page Name is <b>{location.pathname.replace(/\//g, ' ')}</b></p>
    </div>
  )
}

export default About