import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;

    return (
      <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
          <li style={{ background: theme.ui }}>夏天，烟火和我的尸体</li>
          <li style={{ background: theme.ui }}>me before you</li>
          <li style={{ background: theme.ui }}>one day</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
