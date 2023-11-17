import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrl: './top-movies.component.css',
})
export class TopMoviesComponent {
  topMoviesArr: any[] = [];
  baseImage: string = '';
  spinner: boolean = false;
  isLogin: boolean = false;
  page: number = 1;
  constructor(
    private coursesService: CoursesService,
    private _aAuthService: AuthService
  ) {
    this.baseImage = this.coursesService.baseImage;
  }

  ngOnInit(): void {
    this.topMovies(this.page);
    this._aAuthService.userData.subscribe(() => {
      if (this._aAuthService.userData.value != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  topMovies(page: number): void {
    this.spinner = true;

    this.coursesService.moviesPagination(page).subscribe(
      (date) => {
        this.topMoviesArr = date.results.slice(0,11);
        this.spinner = false;
      },
      (error) => {
        console.error('Error fetching courses:', error);
        this.spinner = true;
      }
    );
  }
}
