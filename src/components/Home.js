import React from 'react';
import ReviewList from './ReviewList';


const Home = (props) => {
  // const { data: reviews, isLoading, error } = useFetch(`${config.API_ENDPOINT}/reviews`)
  
  
  const { reviews, isLoading, error } = props;
  const handleAddReview = (review) => {
    props.handleAddReview(review)
  }


  return ( 
    <div className="home">
      {error && <><h2>Could not get reviews. Please try again.</h2></>}
      {isLoading && <><h2>Loading...</h2></>}
      {reviews && <ReviewList reviews={reviews} title='All Reviews' handleAddReview={handleAddReview}/>}
    </div>
  );
}

export default Home;