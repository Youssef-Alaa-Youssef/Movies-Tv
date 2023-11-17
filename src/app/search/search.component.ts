import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  baseImage: string = '';
  spinner: boolean = false;
  searchMoviesArr: any[] = [];

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _CoursesService: CoursesService
  ) {
    this.baseImage = this._CoursesService.baseImage;
    this.searchMovies();
  }
  searchMovies() {
    this.spinner = true;
    this._ActivatedRoute.snapshot.params['search'];
    this._CoursesService
      .seachMovie(this._ActivatedRoute.snapshot.params['search'])
      .subscribe(
        (movies) => {
          this.searchMoviesArr = movies.results;
          this.spinner = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
