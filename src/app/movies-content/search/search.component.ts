import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  baseImage: string = '';
  spinner: boolean = false;
  searchMoviesArr: any[] = [];
  searchQuery: string = ''
  error:string='';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _CoursesService: CoursesService
  ) {
    this.baseImage = this._CoursesService.baseImage;
    this.searchMovies();
  }
  searchMovies() {
    this.spinner = true;
    this._ActivatedRoute.params.subscribe((params) => {
      this.searchQuery = params['search']
  
      if (this.searchQuery) {
        this._CoursesService.seachMovie(this.searchQuery).subscribe(
          (movies) => {
            this.searchMoviesArr = movies.results;
            this.spinner = false;
          },
          (err) => {
            this.error = err;
            this.spinner = false; 
          }
        );
      } else {
        this.searchMoviesArr = [];
        this.spinner = false;
      }
    });
  }
  
}
