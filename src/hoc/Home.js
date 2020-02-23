import React from 'react';
import SampleHOC from './SampleHOC';

const Home=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>This is Home Component</h1>
        </div>
    )
}

export default SampleHOC(Home);