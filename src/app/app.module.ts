import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule ,HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MoviesInterceptor } from '../movies.interceptor';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: MoviesInterceptor, multi: true }
  ],
  imports: [CommonModule, AppRoutingModule, BrowserModule,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
