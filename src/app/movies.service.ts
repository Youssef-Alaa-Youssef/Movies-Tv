import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../app/environment';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseImage: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _HttpClient: HttpClient) {}

  displayMovies(): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/movie/popular?api_key=${environment.key}'`,
    );
  }
  displayTV(): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/tv/popular?api_key=${environment.key}`,
    );
  }
  getMovie(id: string,type:string): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/${type}/${id}?api_key=${environment.key}`,
    );
  }

  moviesPagination(page: number): Observable<any> {
    page = Math.max(page, 1);
    return this._HttpClient.get(
      `${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.key}`,
    );
  }

  seachMovie(search: string): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/search/movie?api_key=${environment.key}&language=en-US&query=${search}`,
    );
  }
}
