
// RatingReview.js
import React from 'react';
import { connect } from 'react-redux';
import { rateMovie, reviewMovie } from '../Redux/actions';

const RatingReview = ({ movie, rateMovie, reviewMovie }) => {
  const [rating, setRating] = React.useState(movie.rating);
  const [review, setReview] = React.useState(movie.review);

  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value, 10);
    setRating(newRating);
    rateMovie(movie.id, newRating);
  };

  const handleReviewChange = (e) => {
    const newReview = e.target.value;
    setReview(newReview);
    reviewMovie(movie.id, newReview);
  };

  return (
    <div>
      <label>
        Rating:
        <select value={rating} onChange={handleRatingChange}>
          <option value={0}>Select...</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={handleReviewChange}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find((movie) => movie.id === ownProps.movieId);
  return { movie };
};

const mapDispatchToProps = {
  rateMovie,
  reviewMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingReview);
