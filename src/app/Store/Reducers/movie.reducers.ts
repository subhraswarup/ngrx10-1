import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/Model/movie';
import * as Actions from '../Actions/movie.actions';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(Actions.getMoviesSuccess, (state, { movies }) => [...movies]),
  on(Actions.addMoviesSuccess, (state, { movie }) => [...state, movie])
);
