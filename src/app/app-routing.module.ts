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

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notify', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'rate', component: RatingComponent },

  { path: 'settings', component: SettingsComponent },
  { path: 'change-password', component: ChangepassworsComponent },
  { path: 'two-step-verification', component: TwostepverificationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
