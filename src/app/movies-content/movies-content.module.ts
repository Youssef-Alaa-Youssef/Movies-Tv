import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesContentRoutingModule } from './movies-content-routing.module';
import { DetailsComponent } from './details/details.component';
import { RatingComponent } from './rating/rating.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopTvComponent } from './top-tv/top-tv.component';
import { MoviesreactsComponent } from './moviesreacts/moviesreacts.component';
import { SearchComponent } from './search/search.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MoviesComponent } from './movies/movies.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    DetailsComponent,
    RatingComponent,
    TopMoviesComponent,
    TopTvComponent,
    MoviesreactsComponent,
    SearchComponent,
    SpinnerComponent,
    HeaderComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesContentRoutingModule,
    CarouselModule,

  ]
})
export class MoviesContentModule { }
