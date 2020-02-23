import React from 'react';
//  const [themeMode, setThemeMode] = useContext(ThemeContext)  .Try to understand this thememode =====> light setThemeMode ====> function
const ThemeContext = React.createContext(['light', ()=> {}]);

export default ThemeContext;
