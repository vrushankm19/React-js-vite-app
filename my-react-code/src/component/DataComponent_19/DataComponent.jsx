// DataComponent is Main Component
// ParentComponent is Child Component
// ChildComponent is Child Component

// Using the createContext hook to pass data from a parent component(DataComponent) to a child component(ChildComponent) in React

import React,{createContext} from 'react'
import ParentComponent from './ParentComponent/ParentComponent'

const FistData = createContext();
const SecondData = createContext();


const DataComponent = () => {
  return (
    <div>
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