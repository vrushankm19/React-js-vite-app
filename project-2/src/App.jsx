import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Formfooter from './components/Formfooter/Formfooter';
import Newlist from './components/Newlist/Newlist';

function App() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false); // State variable to control data visibility

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  // Function to toggle data visibility
  const toggleDataVisibility = () => {
    setShowData(!showData);
    // console.log("my data is" + setShowData);
  };
  console.log("my data is" + showData);
  return (
    <>
      <Navigation />
      <ContactHeader />
      <Formfooter />
      <div className='container'>
        {/* Button to toggle data visibility */}
        <button onClick={toggleDataVisibility}>
          {showData ? 'Hide Data' : 'Show Data'}
        </button>
        {/* Render data based on showData state */}
        {showData && (
          <div>
            {data.map((item, ind) => (
              <Newlist key={ind} name={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
