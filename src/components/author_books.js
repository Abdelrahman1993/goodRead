import React from 'react';
import BookAuthor from './book_author';
export default function AllReview(props) {
    return (
      <div>
        <h3>Author Books</h3>
        <ul>
          <li>
            <BookAuthor />
          </li>
          <li>
            <BookAuthor />
          </li>
        </ul>
      </div>
    );
  }