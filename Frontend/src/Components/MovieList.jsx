import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'; // Import the CSS file

const MovieList = ({ movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <div className="movie-list-container">
        <h1>Movie Watchlist</h1>
        <p>No movies found</p>
        <Link to="/movies/add" className="add-movie-link">Add Movie</Link>
      </div>
    );
  }

  return (
    <div className="movie-list-container">
      <h1>Movie Watchlist</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <Link to={`/movies/${movie.id}`} className="movie-title">{movie.title}</Link>
            <Link to={`/movies/edit/${movie.id}`} className="edit-link">Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/movies/add" className="add-movie-link">Add Movie</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(MovieList);
