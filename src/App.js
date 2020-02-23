import React, { useState } from 'react';
import './App.css';

// Example of Context Api:
import { Coder }  from './components/ContextExample';

//Example of hook:
import Theme from './components/Theme';

//Example of Context API: 
import Header from './components/Header';
import Main from './components/Main';
import ThemeContext from './Context/ThemeContext';

// Sample Code for Ref Explanation
import RefDemo from './refs/RefDemo';
import RefInFunctional from './refs/RefInFunctional';

// Sample code for HOC higher order component
import Home from './hoc/Home';
import CollapseExpandExample from './hoc/CollapseExpandExample';
import ViewEditToggleExample from './hoc/ViewEditToggleExample';

const list = [
  {id: 1, name: "Aatif"},
  {id: 2, name: "Chand"}
];

function App() {
  const themeHook = useState('light');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="App">
        {/* <Header />
        <Main /> */}
        {/* <hr/>
        <br/>
        <RefDemo/>
        <RefInFunctional/>
        <br/>
        <br/> */}
        {/* <Home msg="Hello World"/> */}
        <CollapseExpandExample list={list} />
        <hr/>
        <br/>
        <ViewEditToggleExample title="I Love My India!!!" />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
