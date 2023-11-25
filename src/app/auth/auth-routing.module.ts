import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';
import { TwostepverificationComponent } from './twostepverification/twostepverification.component';
import { ChangepassworsComponent } from './changepasswors/changepasswors.component';
import { AuthLoggedInGuard } from '../auth-logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'login', canActivate: [AuthLoggedInGuard], component: LoginComponent },
  { path: 'register', canActivate: [AuthLoggedInGuard], component: RegisterComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'two-step-verification', canActivate: [AuthGuard], component: TwostepverificationComponent },
  { path: 'change-password', canActivate: [AuthGuard], component: ChangepassworsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
