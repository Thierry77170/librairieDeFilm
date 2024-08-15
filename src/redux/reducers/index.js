// On définit le réducteur racine qui combine les réducteurs individuels
import { combineReducers } from 'redux';
import moviesReducer from './movies.reducer.js';

// On combine les réducteurs individuels dans le réducteur racine
const rootReducer = combineReducers({
    movies: moviesReducer,
});

export default rootReducer;