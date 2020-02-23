import React from 'react';
import withToggle from './ToggleHOC';

const CollapseExpandExample = ({ toggleStatus, toggleHandler, list })=>{
    return (
        <div>
            <p>This is my shopping List</p>
            <button onClick={toggleHandler}>{ toggleStatus ? 'Collapse' : 'Hide'}</button>
            <div>
            {
                toggleStatus &&
                list.map((item)=>{
                return <p key={item.id}>{item.name}</p>
                })
            }
            </div>
           
        </div>
    )
}

export default withToggle(CollapseExpandExample);