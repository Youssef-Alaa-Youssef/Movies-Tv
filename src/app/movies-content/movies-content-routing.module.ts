import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopTvComponent } from './top-tv/top-tv.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from '../auth.guard';
import { RatingComponent } from './rating/rating.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:'',redirectTo:'movies',pathMatch:'full'},
  { path: 'movies', component: MoviesComponent },
  { path: 'top-movies', component: TopMoviesComponent },
  { path: 'top-tv', component: TopTvComponent },
  { path: 'details/:id/:type',canActivate:[AuthGuard], component: DetailsComponent },
  { path: 'rate',canActivate:[AuthGuard], component: RatingComponent },
  { path: 'search/:search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesContentRoutingModule { }
