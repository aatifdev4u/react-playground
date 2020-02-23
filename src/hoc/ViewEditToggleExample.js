import React from 'react';
import withToggle from './ToggleHOC';

const ViewEditToggleExample = ({ toggleStatus, toggleHandler, title })=>{
    return(
        <div>
            {
                toggleStatus ? <input type="text" value={title} /> : <p>{title}</p>
            }
            <button onClick={toggleHandler}>
                { toggleStatus ? 'Edit' : 'Show'}
            </button>
        </div>
    )
}

export default withToggle(ViewEditToggleExample);
