import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext'

const themeTogglerStyles = {
    cursor: "pointer"
}

const ThemeToggler = ()=>{
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div 
            style={themeTogglerStyles}
            onClick={()=>{setThemeMode(themeMode === 'light' ? 'dark' : 'light')}}
        >
            <span title="switch theme">
                {themeMode === 'light' ? "🌙" : "☀️"}
            </span>
        </div>
    )
}

export default ThemeToggler;
