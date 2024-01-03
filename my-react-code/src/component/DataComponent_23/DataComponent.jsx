// 23 Using Router(Swich) and Route make Website URLs


import React from 'react';
import DataComponentSub from './DataComponentSub';  // Update the import statement
import { BrowserRouter} from 'react-router-dom';

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
