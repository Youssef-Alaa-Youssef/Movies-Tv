import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.compone;
i;
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component'mport { DetailsComponent } from './details/details.component'nt';

@NgMo,
    FooterComponentdule,
    LoginComponent({
  declarations: [
    AppComponent,
    RegisterCompo,
    DetailsComponentnent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
