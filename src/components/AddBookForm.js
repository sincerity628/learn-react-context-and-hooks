import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const initBook = {
  title: '',
  author: ''
};

const AddBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [book, setBook] = useState(initBook);

  const handleChange = e => {
    setBook({
      ...book,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBook(book.title, book.author);
    setBook(initBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={book.title} id="title" required
        placeholder="title" onChange={handleChange} autocomplete="off" />
      <input type="text" value={book.author} id="author" required
        placeholder="author" onChange={handleChange} autocomplete="off" />
      <div className="button-box">
        <button>add book</button>
      </div>
    </form>
  );
}

export default AddBookForm;
