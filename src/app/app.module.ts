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
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MoviesreactsComponent } from './moviesreacts/moviesreacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopTvComponent } from './top-tv/top-tv.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    MoviesreactsComponent,
    SearchComponent,
    HeaderComponent,
    TopMoviesComponent,
    TopTvComponent,
  ],
  imports: [CommonModule, AppRoutingModule, BrowserModule,NgToastModule,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule,CarouselModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
