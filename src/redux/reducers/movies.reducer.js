// REDUX
import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies, deleteMovie, toggleLike, toggleDislike } from '../actions/movies.actions.js';

// Initial state
const initialState = {
    movies: [],
    status: 'idle',
    error: null,
  };

  const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMovies.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchMovies.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.movies = action.payload;
        })
        .addCase(fetchMovies.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(deleteMovie.fulfilled, (state, action) => {
          state.movies = state.movies.filter(movie => movie.id !== action.payload);
        })
        .addCase(toggleLike.fulfilled, (state, action) => {
          const movieId = action.payload;
          const movie = state.movies.find(movie => movie.id === movieId);
          if (movie) {
            movie.likes = movie.liked ? movie.likes - 1 : movie.likes + 1;
            movie.liked = !movie.liked;
            if (movie.disliked) {
              movie.dislikes -= 1;
              movie.disliked = false;
            }
          }
        })
        .addCase(toggleDislike.fulfilled, (state, action) => {
          const movieId = action.payload;
          const movie = state.movies.find(movie => movie.id === movieId);
          if (movie) {
            movie.dislikes = movie.disliked ? movie.dislikes - 1 : movie.dislikes + 1;
            movie.disliked = !movie.disliked;
            if (movie.liked) {
              movie.likes -= 1;
              movie.liked = false;
            }
          }
        });
    },
  });
  
  export default moviesSlice.reducer;

