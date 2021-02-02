import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import config from '../config';

const ReviewDetails = (props) => {
  const { id } = useParams();
  // const { data: review, isLoading, error } = useFetch(`${config.API_ENDPOINT}/reviews/${id}`);
  const { reviews } = props;
  console.log(reviews)

  return ( 
    <div className="review-details">
      {/* {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>} */}
      {reviews && reviews.map((review) => (
        <article>
          <h2>{review.title}</h2>
          <p>Rating: {review.rating}</p>
          <p>Written by {review.author}</p>
          <div>{review.body}</div>
        </article>
      ))}
    </div>
  );
}

export default ReviewDetails;