// 12. Create Login Form with React in Hindi | Handling Basic Form with React Hook

import React, { useState, useEffect } from 'react';

const DataComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [allEntry, setAllEntry] = useState([]);

    useEffect(() => {
        console.log(allEntry);
    }, [allEntry]);

    const collectAllData = (event) => {
        event.preventDefault();
        console.log(name, email);

        // Just Need to send the user data to the Backend
        const newEntry = { name: name, email: email };
        setAllEntry([...allEntry, newEntry]);
    };

    return (
        <div className='container'>
            <form action='' onSubmit={collectAllData}>
                <h1>useState</h1>
                <input
                    className='form-control'
                    value={name}
                    type='text'
                    placeholder='Enter Your Name'
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    className='form-control'
                    value={email}
                    type='text'
                    placeholder='Enter Your Email'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button className='btn btn-primary mt-2' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DataComponent;
