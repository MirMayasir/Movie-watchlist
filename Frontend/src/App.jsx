// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import EditMovie from './Components/EditMovie';
import MovieDetails from './Components/MovieDetails';
import './App.css'; // Import your CSS file here

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Movie Watchlist</h1>
          </header>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<MovieList />} />
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/movies/edit/:movieId" element={<EditMovie />} />
              <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
