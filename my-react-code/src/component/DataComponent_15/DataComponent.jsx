// Fetching data from an API. if is not loading then show the data otherwise show the loading component

import React, { useState, useEffect } from 'react';

import ApiData from './ApiData/ApiData';
import Loading from './ApiData/Loading/Loading';

const DataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const apiData = await response.json();
        // console.log(apiData);
        setData(apiData); // Set the fetched data in the state
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container'>
      <ApiData data={data} />
    </div>
  );
};

export default DataComponent;
