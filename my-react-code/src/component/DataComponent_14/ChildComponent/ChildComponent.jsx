import React,{useEffect} from 'react'

const ChildComponent = () => {
    useEffect(() => {
        console.log("ChildComponent mounted");
        return () => {
            console.log("ChildComponent unmounted");
        }
    
    })
  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent