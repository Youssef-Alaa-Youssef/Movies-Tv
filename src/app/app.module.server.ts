import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    AppModule,
    AuthModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
