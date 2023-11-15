import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { RatingComponent } from './rating/rating.component';
import { SettingsComponent } from './settings/settings.component';
import { TwostepverificationComponent } from './twostepverification/twostepverification.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MoviesreactsComponent } from './moviesreacts/moviesreacts.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotificationsComponent,
    FooterComponent,
    DetailsComponent,
    RatingComponent,
    SettingsComponent,
    TwostepverificationComponent,
    NavbarComponent,
    MoviesComponent,
    SpinnerComponent,
    MoviesreactsComponent
  ],
  imports: [CommonModule, AppRoutingModule, BrowserModule,NgToastModule,HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
