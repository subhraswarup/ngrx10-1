import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/Model/movie';

export const getMovies = createAction('[Movie] Get movie');
export const getMoviesSuccess = createAction(
  '[Movie] Get movie success',
  (movies: ReadonlyArray<Movie>) => ({ movies })
);
export const addMovies = createAction('[Movie] Add movie', (movie: Movie) => ({
  movie,
}));

export const addMoviesSuccess = createAction(
  '[Movie] Add movie success',
  (movie: Movie) => ({ movie })
);
