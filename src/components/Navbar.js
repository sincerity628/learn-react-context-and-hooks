import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>becca's booklist</h1>
      <p>currently we have { books.length } books.</p>
    </div>
  );
}

export default Navbar;
