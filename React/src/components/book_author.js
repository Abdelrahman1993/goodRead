import React from 'react';
import StarRating from "./StarRating";

export default function BookAthor(props) {
    return (
      <div>
        <div className="author_book">
          <div className="review">
            {/*<img src="2.jpg" alt="error" width="100" height="100"/><br/>*/}
          </div>
          <div className="review">
            <h6>Book Name</h6>
              <StarRating/>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
        <div className="author_book">
          <select>
            <option value="1">Currently Read</option>
            <option value="2">Want To Read</option>
            <option value="3">Read</option>
          </select>
          <br/>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      </div>
    );
  }