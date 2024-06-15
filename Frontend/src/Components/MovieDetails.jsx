// MovieDetails.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie, toggleWatched } from '../Redux/actions';
import './MovieDetails.css'; // Import CSS for MovieDetails styling

const MovieDetails = ({ movies, deleteMovie, toggleWatched }) => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(movieId, 10)); // Ensure ID is parsed correctly

  if (!movie) {
    return <div className="movie-not-found">Movie not found</div>;
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      deleteMovie(movie.id);
      navigate('/');
    }
  };

  const handleToggleWatched = () => {
    toggleWatched(movie.id);
  };

  return (
    <div className="movie-details-container">
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-description">{movie.description}</p>
      <div className="movie-info">
        <p><strong>Release Year:</strong> {movie.releaseYear}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Status:</strong> {movie.watched ? 'Watched' : 'Unwatched'}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Review:</strong> {movie.review}</p>
      </div>
      <div className="button-group">
        <button className="toggle-watched-btn" onClick={handleToggleWatched}>
          Mark as {movie.watched ? 'Unwatched' : 'Watched'}
        </button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
        <Link to={`/movies/edit/${movie.id}`} className="edit-link">Edit</Link>
        <Link to="/" className="back-link">Back</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = { deleteMovie, toggleWatched };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
