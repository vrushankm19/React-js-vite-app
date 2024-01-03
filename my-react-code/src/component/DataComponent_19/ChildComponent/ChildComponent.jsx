import React from 'react';
import { FistData,SecondData } from '../DataComponent';

const ChildComponent = () => {
  return (
    <div>
        <p>ChildComponent 3</p>
        <FistData.Consumer>
            {(fData) => {
                return (
                    <SecondData.Consumer>
                        {(sData) => {
                            return (
                                <h1>
                                 My Data is Value Pass MainComponent <u>{fData}</u> and <u>{sData}</u>
                                </h1>
                            )
                        }}
                    </SecondData.Consumer>
                )
            }}
        </FistData.Consumer>
    </div>
  )
}

export default ChildComponent