import React, { Component, useContext } from 'react';
import ThemeContext from '../Context/ThemeContext'
import AppTheme from './color';

/** Example of Consuming context with class based componnets**/
// class Main extends Component{
//     constructor(){
//         super();
//     }

//     static contextType = ThemeContext;
//     render(){
//         const cuurentTheme = AppTheme[this.context]
//         return(
//             <main style={{
//                 padding: '1rem',
//                 backgroundColor: `${cuurentTheme.backgroundColor}`,
//                 color: `${cuurentTheme.textColor}`
//             }}>
//                 <h1>This is Headeing</h1>
//                 <p>This is paragraph</p>
//                 <button>This is a button</button>
//             </main>
//         )
//     }
// }

// or this way

// class Main extends Component{
//     constructor(){
//         super();
//     }
//     render(){
//         <ThemeContext.Consumer>
//             {
//                 (theme)=>{
//                     const currentTheme = AppTheme[theme];
//                     return(
//                         <main style={{
//                             padding: '1rem',
//                             backgroundColor: `${currentTheme.backgroundColor}`,
//                             color: `${currentTheme.textColor}`
//                         }}>
//                             <h1>This is Headeing</h1>
//                             <p>This is paragraph</p>
//                             <button>This is a button</button>
//                         </main>
//                     )
//                 }
//             }
//         </ThemeContext.Consumer>
//     }
// }

/** Consuming Context with functional Component**/
const Main = ()=>{
    const theme = useContext(ThemeContext);
    console.log(theme);
    const currentTheme = AppTheme[theme[0]];
    console.log(currentTheme);
    return(
        <main style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.color}`
        }}>
            <h1>This is Headeing</h1>
            <p>This is paragraph</p>
            <button>This is a button</button>
        </main>
    )
}

export default Main;