import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  gettoken: string | null = null;
  constructor(private _Router: Router) {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('userToken') != null) {
      this.getUserDate();
    }
  }
  
  getUserDate() {
    this.gettoken = localStorage.getItem('userToken');
    try {
      if (this.gettoken) {
        const decodedToken = jwtDecode(this.gettoken);
        this.userData.next(decodedToken);
      } else {
        console.error('User token is null or undefined');
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
