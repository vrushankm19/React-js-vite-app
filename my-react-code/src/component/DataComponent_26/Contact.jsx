import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const goBack = () => {
      navigate(-1);
  };

  return (
    <div>
        <h1>{location.pathname.replace(/\//g, ' ')}</h1>
        <p>This Page Name is <b>{location.pathname.replace(/\//g, ' ')}</b></p>
        <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default Contact