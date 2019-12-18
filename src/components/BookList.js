import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLight, dark, light } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLight? light : dark;

  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        { books.map( book => (
          <li key={book.id} style={{ background: theme.ui }}>{ book.title }</li>
        )) }
      </ul>
    </div>
  );
}

export default BookList;
