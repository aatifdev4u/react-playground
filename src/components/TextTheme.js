import React from 'react';

function TextTheme({ theme}){
    return(
      <div>
        <h1 style = {{ color: `${theme}`}}>{theme}</h1>
      </div>   
    )
  }

  export default TextTheme;