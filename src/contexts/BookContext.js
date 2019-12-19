import React, { useReducer, createContext } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const initBooks = [
  { id: 1, title: '夏天，烟火和我的尸体', author: '乙一' },
  { id: 2, title: '挪威的森林', author: '村上春树' },
  { id: 3, title: '我们仨', author: '杨绛' }
];

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, initBooks);

  return (
    <BookContext.Provider value={{ books, dispatch}}>
      { props.children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;
