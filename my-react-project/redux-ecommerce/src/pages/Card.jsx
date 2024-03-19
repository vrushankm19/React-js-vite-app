import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/Cartslice';

const Card = () => {
    const dispatch = useDispatch();
  const carttitems = useSelector((state)=>state.cart);
  
  const handleremove = (id) => {
    dispatch(remove(id));
  }
  return (
    <div className='container'>
        <div className='mt-4'>
            <h1>Add To Card Page</h1>
        </div>
        {
            carttitems.map((item) => (
                <div className='col-md-12 mt-4 border p-4' key={item.id}>
                  <div className='row align-items-center'>
                    <img className='col-md-1' src={item.image} alt="img" />
                    <div className='card-body col-9'>
                      <h4>{item.title}</h4>
                      <h5>{item.price}</h5>
                    </div>
                    <div className='col-2'>
                      <button className='btn btn-danger w-100' onClick={()=>handleremove(item.id)}>remove</button>
                    </div>
                  </div>
                </div>
            ))
        }
    </div>
  )
}

export default Card