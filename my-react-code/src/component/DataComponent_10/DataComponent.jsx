// Create Todo List Using UseState and revome the item from the list using Filter Method 

import React,{ useState } from 'react'
import "./DataComponent.scss"
import { render } from 'react-dom';

const DataComponent = () => {

    const listData = [
        {
            id:1,
            name:"Vrushank",
            age:27,
            company:"Amura"
        },
        {
            id:2,
            name:"Neel",
            age:25,
            company:"Amura"
        },
        {
            id:3,
            name:"Pavan",
            age:27,
            company:"Amura"
        },
        {
            id:4,
            name:"Anand",
            age:25,
            company:"Amura"
        },
    ]

    const [newList, setNewList] = useState(listData);

    const clickToClose = (id) => {
        console.log("Hello World" + " " + id);

        const myFinalDta = newList.filter((creValue) => {
            return creValue.id !== id;
        })
        setNewList(myFinalDta);
    }

    return (
        <div className='containers'>
            <h2>Todo List Using UseState</h2>
            {
                newList.map((item, index) => (
                    <div key={item.id}>
                        <p>{index + 1} : I My Name is <u>{item.name}</u>. My Age is <u>{item.age}</u> and My Company Name is <u>{item.company}</u></p>
                        <button className='btn btn-primary' onClick={() => clickToClose(item.id) }>Click Here to Close</button>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default DataComponent