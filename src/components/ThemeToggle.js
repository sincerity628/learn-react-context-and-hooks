import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <button onClick={changeTheme} >change the theme</button>
  );
}

export default ThemeToggle;
