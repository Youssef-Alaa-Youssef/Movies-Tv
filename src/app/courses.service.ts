import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseImage: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _HttpClient: HttpClient) {}

  displayMovies(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=fe7540e520117a8f4574cb44fe9259de',
      {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + environment.apiToken,
        },
      }
    );
  }
  getMovie(id: number): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fe7540e520117a8f4574cb44fe9259de`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + environment.apiToken,
        },
      }
    );
  }

  moviesPagination(page: number): Observable<any> {
    page = Math.max(page, 1);
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=fe7540e520117a8f4574cb44fe9259de`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + environment.apiToken,
        },
      }
    );
  }
}
