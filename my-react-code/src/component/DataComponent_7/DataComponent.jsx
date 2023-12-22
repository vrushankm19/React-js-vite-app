// 7. Fetching data from an API endpoint using the useEffect hook GET method and Displaying Data inside Card

import React, { useState, useEffect } from 'react';
import './DataComponent.scss';

const DataComponent = () => {
    // State to store the fetched data
    const [data, setData] = useState([]);

    // useEffect hook is used to perform side effects in functional components
    useEffect(() => {
        // Fetch data from the specified API endpoint
        fetch("https://657b2952394ca9e4af13e166.mockapi.io/GET")
            .then(response => response.json()) // Parse the response as JSON
            .then(apiData => {
                // Set the fetched data to the state
                setData(apiData);
                console.log(apiData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 
    // The empty dependency array ensures that this effect runs once after the initial render

    return (
        <div>
            <h1>UseState Program</h1>
            {/* Conditional rendering based on the existence of data */}
            <div className='containers'>
                <div className='row'>
                    {/* <div > */}
                        {data !== null && data !== undefined ? (
                            // If data exists, map over it and render individual items
                            data.map(itm => (
                                <div key={itm.name} className='col'>
                                    <img src={itm.avatar} alt="" />
                                    <h2>{itm.id}</h2>
                                    <p>{itm.name}</p>
                                </div>
                            ))
                        ) : (
                            // If no data is found, display a message
                            "no data found"
                        )}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default DataComponent;
