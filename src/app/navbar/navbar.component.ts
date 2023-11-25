import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });
  constructor(private _aAuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {
    this._aAuthService.userData.subscribe(() => {
      if (this._aAuthService.userData.value != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }
  logout() {
    this._aAuthService.logout();
  }

  searchDone() {
    if (this.searchForm.valid) {
      this._Router.navigate([
        '/show/search',
        this.searchForm.controls['search'].value,
      ]);
    }
  }
}
