// Using NavLink to make Website Menu Bar and NavLink is a special type of Link


import React from 'react';
import DataComponentSub from './DataComponentSub';  // Update the import statement
import { BrowserRouter} from 'react-router-dom';
import './DataComponent.scss';

const DataComponent = () => {
  return (
    <div className='container'>
    <BrowserRouter>
        <DataComponentSub />
    </BrowserRouter>
    </div>
  )
}

export default DataComponent;
