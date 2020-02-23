import React, { useRef, useEffect } from 'react';

function RefInFunctional(){
    const myInput = useRef();

    useEffect(()=>{
        myInput.current && myInput.current.focus();
    },[]);

    return(
        <div>
            <h2>Sample demonstartion on Ref in functional component</h2>
            Name: <input type="text"  ref={myInput} />
        </div>
    )
}

export default RefInFunctional;