import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length? (
    <div className="book-list">
      <ul>
        { books.map(book => (
          <BookDetails key={book.id} book={book} />
        )) }
      </ul>
    </div>
  ) : (
    <div className="empty">
      现在书单里面没有书了噢！再去发现一些好书吧！:)
    </div>
  );
}

export default BookList;
