import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModules } from './app.material.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieListComponent } from './movie-list/movie-list.component';
import { InMemoryService } from './Service/in-memory.service';
import { movieReducer } from './Store/Reducers/movie.reducers';
import { MovieEffects } from './Store/Effects/movie.effects';

@NgModule({
  declarations: [AppComponent, MovieListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
