import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  const { isLight, dark, light } = themeContext;
  const { isAuthenticated, toggleAuth } = authContext;
  const theme = isLight ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>becca's booklist</h1>
      <div onClick={toggleAuth} className="log-part">
        { isAuthenticated ? 'Logged in' : 'Logged out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
