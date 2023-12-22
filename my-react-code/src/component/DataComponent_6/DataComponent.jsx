// React Component Fetching and Displaying Data. useing API Using GET Method

import React, { useState, useEffect } from 'react';

const DataComponent = () => {
    // State to store the fetched data
    const [data, setData] = useState(null);

    // useEffect hook is used to perform side effects in functional components
    useEffect(() => {
        // Fetch data from the specified API endpoint
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => response.json()) // Parse the response as JSON
            .then(data => setData(data)); // Set the fetched data to the state
    }, []); 
    // The empty dependency array ensures that this effect runs once after the initial render

    return (
        <div>
            <h1>UseState Program</h1>
            {/* Conditional rendering based on the existence of data */}
            {data !== null && data !== undefined ? (
                // If data exists, map over it and render individual items
                data.map(itm => (
                    <div key={itm.id}>
                        <p>{itm.email}</p>
                    </div>
                ))
            ) : (
                // If no data is found, display a message
                "no data found"
            )}
        </div>
    );
};

export default DataComponent;

