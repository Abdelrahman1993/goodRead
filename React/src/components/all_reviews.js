import React from 'react';
import Review from './book_review';
export default function AllReview(props) {
    return (
      <div>
        <h3>Reviews</h3>
        <button>add Review</button>
        <ul>
          <li>
            <Review />
          </li>
          <li>
            <Review />
          </li>
        </ul>
      </div>
    );
  }