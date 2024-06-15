// EditMovie.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { editMovie } from '../Redux/actions';

const EditMovie = ({ movies, editMovie }) => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(movieId, 10)); // Ensure ID is parsed correctly

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editMovie({ id: movie.id, title, description, releaseYear, genre });
    navigate('/');
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>Edit Movie</h2>
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
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = { editMovie };

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
