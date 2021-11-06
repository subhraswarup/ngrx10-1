import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './Model/movie';
import { addMovies, getMovies } from './Store/Actions/movie.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  title = 'movieApp';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
    // this.dataService.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
  }

  addNewMovies(): void {
    this.store.dispatch(addMovies(this.newMovie));
    this.newMovie = new Movie();
    // this.dataService.addMovies(this.newMovie).subscribe((res) => {
    //   this.getAllMovies();
    //   this.newMovie = new Movie();
    // });
  }
}
