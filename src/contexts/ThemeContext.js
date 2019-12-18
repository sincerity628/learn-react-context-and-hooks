import React, { createContext, useState } from 'react';

// the default value should be put inside the parenthesis
export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLight, setIsLight] = useState(true);
  const light = { syntax: '#555', ui: '#ddd', bg: '#eee' };
  const dark = { syntax: '#ddd', ui:'#333', bg: '#555' };

  const changeTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <ThemeContext.Provider value={{ isLight, light, dark, changeTheme }}>
      { props.children }
      <div onClick={changeTheme}></div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

// light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
// dark: { syntax: '#ddd', ui:'#333', bg: '#555'  }
