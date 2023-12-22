// POST metherd useing fetch API call in React JS 

import React, { useState, useEffect } from 'react';

import './DataComponent.scss';

const DataComponent = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [company, setcompany] = useState('');

    const nameHandler = (e) => {
        setname(e.target.value);
    }

    const emailHandler = (e) => {
        setemail(e.target.value);
    }

    const companyHandler = (e) => {
        setcompany(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., API call
        fetch('https://657b2952394ca9e4af13e166.mockapi.io/GET', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "requestId": name,
                "items": email, 
                "count": company
            })
        })
        .then(res => res.json())
        .then(data => console.log("data", data))
        .catch(error => console.error("Error:", error));
    }

    useEffect(() => {
        // console.log(name, email, company);
    }, [name, email, company]);

    return (
        <div>
            <div className='containers'>
                <h1>POST Method</h1>
                <form onSubmit={submitHandler}>
                    <input onChange={nameHandler} name="requestId" value={name} className='form-control' type="text" placeholder='Enter your name' />
                    <input onChange={emailHandler} name="items" value={email} className='form-control' type="text" placeholder='Enter your email' />
                    <input onChange={companyHandler} name="count" value={company} className='form-control' type="text" placeholder='Enter your Company Name' />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default DataComponent;
