import React, { useState, createContext } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const initBooks = [
  { id: 1, title: '夏天，烟火和我的尸体', author: '乙一' },
  { id: 2, title: '挪威的森林', author: '村上春树' },
  { id: 3, title: '我们仨', author: '杨绛' }
];

const BookContextProvider = (props) => {
  const [books, setBooks] = useState(initBooks);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      { props.children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;
