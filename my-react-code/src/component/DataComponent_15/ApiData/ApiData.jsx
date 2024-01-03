// ApiData.js
import React from 'react';

const ApiData = ({ data }) => {
  return (
    <div>
      <h1>API Data:</h1>
        <div className='row'>
            {data.length > 0 ? (
                data.map((item) => (
                <div className='col' key={item.id}>
                    <img src={item.url} alt={item.title} />
                    <p>{item.title}</p>
                </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    </div>
  );
};

export default ApiData;
