// Example setup of Redux store (store.js or store.jsx)
import { createStore } from 'redux';
import rootReducer from './reducer'; // Import your root reducer

const initialState = {
  movies: [], // Initial state for movies
  // other initial states if applicable
};

const store = createStore(rootReducer, initialState);

export default store;
