import React from 'react'
import { useSelector } from 'react-redux';

const Newmodel = ({id, showPopup, setShowPopup}) => {
    const allusers = useSelector((state) => state.app.users);
    const singleUser = allusers.filter((ele) => ele.id === id);
    console.log(singleUser);
  return (
    <div>
        <div className='popup'>
        <div className='popup-card'>
            <h1>{singleUser[0].name}</h1>
            <p>{singleUser[0].email}</p>
            <p>{singleUser[0].gender}</p>
            <p>{singleUser[0].age}</p>
            <button className='btn btn-danger' onClick={() => setShowPopup(false)}>Close</button>
        </div>
        </div>
    </div>
  )
}

export default Newmodel