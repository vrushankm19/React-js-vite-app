// DataComponent is Main Component
// ParentComponent is Child Component
// ChildComponent is Child Component

// Using the useContext hook to pass data parent component to child component in React

import React,{createContext} from 'react'
import ParentComponent from './ParentComponent/ParentComponent'

const FistData = createContext();
const SecondData = createContext();


const DataComponent = () => {
  return (
    <div className='container'>
          <h1>Main Pearent</h1>

          <FistData.Provider value={'Vrushank Here..'}>
            <SecondData.Provider value={'Modi Here..'}>
              <ParentComponent />
            </SecondData.Provider>
          </FistData.Provider>
    </div>
  )
}

export default DataComponent;
export {FistData,SecondData};

// Context API
// contest
// povidar
// consumer

// useContext hook
// contest
// povidar
// useContext