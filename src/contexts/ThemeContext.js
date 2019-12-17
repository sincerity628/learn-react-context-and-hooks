import React, { Component, createContext } from 'react';

// the default value should be put inside the parenthesis
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLight: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui:'#333', bg: '#555'  }
  }

  changeTheme = () => {
    this.setState({ isLight: !this.state.isLight });
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, changeTheme:this.changeTheme }}>
        { this.props.children }
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

// light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
// dark: { syntax: '#ddd', ui:'#333', bg: '#555'  }
