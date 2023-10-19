import React, { useEffect, useState } from 'react';

const List = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                // Log the data to the console for demonstration purposes
                
                console.log('Fetched data:', data);
                setData(data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, []);


    // const myData = [
    //     { id: 1, name: 'John' },
    //     { id: 2, name: 'Peter' },
    //     { id: 3, name: 'Sally' },
    //     { id: 4, name: 'Jane' },
    // ];

    return (
        <>
            <section>
                <div className='container'>
                    <h1>My Data:</h1>
                    <ul>
                        {/* {myData.map((item) => (
                            <li key={item.id}>
                                Hi My Name is {item.name}, and My Id is {item.id}
                            </li>
                        ))} */}
                        {data !== undefined && data !== null && data.length > 0 ?
                            data.map((item) => (
                                <li key={item.id}>
                                    Hi My Name is {item.title}, and My Id is {item.id}
                                </li>
                            )) : 'No Data Found'}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default List;
