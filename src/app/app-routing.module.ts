import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TwostepverificationComponent } from './twostepverification/twostepverification.component';
import { MoviesComponent } from './movies/movies.component';
import { ChangepassworsComponent } from './changepasswors/changepasswors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RatingComponent } from './rating/rating.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth.guard';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopTvComponent } from './top-tv/top-tv.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profile',canActivate:[AuthGuard], component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'top-movies', component: TopMoviesComponent },
  { path: 'top-tv', component: TopTvComponent },
  { path: 'notify', canActivate:[AuthGuard], component: NotificationsComponent },
  { path: 'profile',canActivate:[AuthGuard], component: ProfileComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'details/:id/:type',canActivate:[AuthGuard], component: DetailsComponent },
  { path: 'rate',canActivate:[AuthGuard], component: RatingComponent },
  { path: 'search/:search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'change-password', canActivate:[AuthGuard],component: ChangepassworsComponent },
  { path: 'two-step-verification', canActivate:[AuthGuard],component: TwostepverificationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
