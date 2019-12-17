import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {

    return (
      <ThemeContext.Consumer>
        { (context) => {
          const { isLight, light, dark } = context;
          const theme = isLight ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>becca's booklist</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        } }
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
