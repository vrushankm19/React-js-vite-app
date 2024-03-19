import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showUser } from '../Redux/userDetailSlice';
import Newmodel from './Newmodel';
import { useState } from 'react';

const Read = () => {
    const dispatch = useDispatch();

    const [id,setId] = useState();

    const [showPopup, setShowPopup] = useState(false);

    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(showUser());
    }, []);

    // console.log(id);

    if (loading) {
        return <h2>Loading</h2>;
    }

    return (
        <div className='container'>
            <div className='mt-2 row'>
                {showPopup && <Newmodel id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=".exampleModal">
                Launch demo modal
                </button> */}
                {users && users.map((ele) => (
                    <div className="col-4 mt-4" key={ele.id}>
                        <div className="card ms-auto me-auto">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                <p className="card-text">{ele.gender}</p>
                                <button to="#" className="card-link btn border btn-primary" onClick={() => [setId(ele.id), setShowPopup(true)]}>View</button>
                                <button to="#" className="card-link btn border btn-success">Edit</button>
                                <button to="#" className="card-link btn border btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Read;
