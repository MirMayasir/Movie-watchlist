// AddMovie.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../Redux/actions';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(),
      title,
      description,
      releaseYear: parseInt(releaseYear, 10),
      genre,
      watched: false,
      rating: parseFloat(rating), // Ensure the rating is a number
      review,
    };
    dispatch(addMovie(newMovie));
    navigate('/');
  };
  

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Release Year</label>
          <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
        </div>
        <div>
          <label>Genre</label>
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div>
          <label>Rating</label>
          <input type="number" step="0.1" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <div>
          <label>Review</label>
          <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
