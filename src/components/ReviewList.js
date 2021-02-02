import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = (props) => {
  const { reviews, title } = props;

  return ( 
    <div className="review-list">
      <h2>{title}</h2>
      {reviews.map((review) => (
        <div className="review-preview" key={review.id}>
          <Link to={`/reviews/${review.id}`}>
            <h2>{review.title}</h2>
            <p>Score: {review.rating}</p>
            <p>Written by: {review.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;