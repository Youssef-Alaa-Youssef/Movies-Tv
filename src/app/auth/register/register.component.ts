import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/),
    ]),
  });

  constructor(private _router: Router) {}

  onSubmit() {
    if (this.registerForm.valid) {
      this._router.navigate(['/login']);
    }
  }
}
