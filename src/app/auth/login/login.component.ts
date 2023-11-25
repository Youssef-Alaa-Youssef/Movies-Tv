import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { AuthService } from '../../auth.service';
AuthService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/),
    ]),
  });
constructor(private _router:Router,private _AuthService:AuthService){}

  loginSubmit() {
    if (this.loginForm.valid) {
      localStorage.setItem('userToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
      this._AuthService.getUserDate();
      this._router.navigate(['/show/movies'])
    } else {
      console.log(this.loginForm);

    }
  }
}
