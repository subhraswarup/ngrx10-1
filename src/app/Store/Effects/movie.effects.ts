import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';
import {
  addMovies,
  addMoviesSuccess,
  getMovies,
  getMoviesSuccess,
} from '../Actions/movie.actions';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMovies),
      tap((movie) => console.log(movie)),
      concatMap(({ movie }) =>
        this.dataService.addMovies(movie).pipe(
          map((newMovie) => addMoviesSuccess(newMovie)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
