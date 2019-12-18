import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const initBooks = [
  { id: 1, title: '夏天，烟火和我的尸体' },
  { id: 2, title: 'me before you' },
  { id: 3, title: 'one day' },
  { id: 4, title: 'bullet proof' }
];

const BookContextProvider = (props) => {
  const [books, setBooks] = useState(initBooks);

  return (
    <BookContext.Provider value={{books}}>
      { props.children }
    <div onClick={() => setBooks(initBooks)}></div>
    </BookContext.Provider>
  );
}

export default BookContextProvider;
