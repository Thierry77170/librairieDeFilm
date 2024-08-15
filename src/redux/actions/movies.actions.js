// DATA
import { movies$ } from '../../data/movies';

// REDUX
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await movies$;
    return response;
  });

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (id) => {
  return id;
});

export const toggleLike = createAsyncThunk('movies/toggleLike', async (id) => {
  return id;
});

export const toggleDislike = createAsyncThunk('movies/toggleDislike', async (id) => {
  return id;
});