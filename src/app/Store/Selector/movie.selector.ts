import { Movie } from './../../Model/movie';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMovie from '../Reducers/movie.reducers';

export interface MovieState {
  movies: fromMovie.MovieState;
}

export const getMovieState = createFeatureSelector<MovieState>('movies');

export const selectMovieList = createSelector(
  getMovieState,
  (state: MovieState) => state.movies
);
