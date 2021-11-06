import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../Model/movie';

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      movies: this.mockMovies(),
    };
  }
  private mockMovies(): Movie[] {
    const movie = new Movie(
      'Avengers: Endgame',
      2798,
      new Date('26 Apr, 2019 05:30:00')
    );
    movie.id = 1;

    const movies = [movie];
    return movies;
  }
}
