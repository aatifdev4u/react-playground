import React, { useState } from 'react';
 import TextTheme from './TextTheme';

function Theme(){
    const [theme, setTheme] =  useState('red');
    
    const onClickHandler = ()=>{
        setTheme(theme === 'red' ? 'blue' : 'red');
    }

    return(
        <div>
        <TextTheme theme={theme} />
        <button onClick={onClickHandler}>Change Color</button>
    </div>
    )
}

export default Theme;