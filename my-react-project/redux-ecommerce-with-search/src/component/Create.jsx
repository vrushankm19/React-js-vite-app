import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../Redux/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let getUserData = (e) => {
        setUsers({...users, [e.target.name]:e.target.value});
        console.log(users);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
       dispatch(createUser(users)); 
       navigate("/read");
    }
  return (
    <div className='container'>
        <h1 className='mt-2 h2 mb-2'>Fill The Data</h1>
        <form className='  card p-5 bg-light shadow border-dark' onSubmit={handleSubmit}>
            <div className='d-flex gap-3'>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" name='name' className="form-control border-dark" id="exampleInputEmail1" onChange={getUserData} />
                </div>
                <div className="mb-3 w-50">
                    <label className="form-label">Email</label>
                    <input type="text" name='email' className="form-control border-dark" id="exampleInputPassword1" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" name='age' className="form-control border-dark" id="exampleInputPassword2" onChange={getUserData} />
                </div>
            </div>

            <div className="form-check">
                <input className="form-check-input border-dark" name='gender' value='male' type="radio"  onChange={getUserData} />
                <label className="form-check-label">
                    Male
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input border-dark" name='gender' value='female' type="radio" onChange={getUserData} />
                <label className="form-check-label">
                    Female
                </label>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  )
}

export default Create