
import React from 'react';
import fakeReviews from '../data/fakeReviews';

const ReviewPage = () => {
  return (
    <div className="HomePage">
        <header className="App-header"></header>
        <h1 className="header-text">Reviews</h1>
      {fakeReviews.map((review) => (
        <div key={review.id} className="review-card">
          <h3>{review.username}</h3>
          <p>Rating: {'⭐️'.repeat(review.rating)}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage; 
