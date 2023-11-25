import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../src/app/environment';

@Injectable()
export class MoviesInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + environment.apiToken,
      }
    });

    return next.handle(modifiedRequest);
  }
}
