import React from 'react';

const SampleHOC= (WrappedComponent)=>{
    const NewComponent = (props)=>{
        return  (
            <div style={{backgroundColor: 'red'}}>
                <WrappedComponent
                    {...props}
                    name='taj mahal'
                />
            </div>
        )
    }
    return NewComponent;
}

export default SampleHOC;