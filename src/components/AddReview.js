import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import config from '../config';

const AddReview = (props) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(1);
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: uuidv4(),
      title,
      rating,
      author,
      body
    }
    props.handleAddReview(review)
    history.push('/')

    // setIsLoading(true)
    // fetch(`${config.API_ENDPOINT}/reviews`, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(review)
    // })
    // .then(() => {
    //   setIsLoading(false)
    //   history.push('/')
    // })
  }

  return ( 
    <div className="add-review">
      <h2>Add a New Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='movieTitle'>Movie Title</label>
        <input 
          type="text" 
          name='movieTitle' 
          aria-label='Movie title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor='rating'>Rating (1-5)</label>
        <select 
          name='rating'
          aria-label='rating'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
        <label htmlFor='author'>Author</label>
        <input 
          type='text'
          name='author'
          aria-label='author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label htmlFor='body'>Review</label>
        <textarea 
          cols="30" 
          rows="10"
          name='body'
          aria-label='review body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        >
        </textarea>
        {!isLoading && <button>Add Review</button>}
        {isLoading && <button>Adding Review</button>}
      </form>
    </div>
  );
}

export default AddReview;