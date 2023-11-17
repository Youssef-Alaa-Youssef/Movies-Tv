import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  Movies: any[] = [];
  baseImage: string = '';
  spinner: boolean = false;
  isLogin:boolean = false;
  page:number = 1;
  constructor(private coursesService: CoursesService,private _aAuthService:AuthService) {
    this.baseImage = this.coursesService.baseImage;
  }

  ngOnInit(): void {
    this.pagination(this.page);
    this._aAuthService.userData.subscribe(() => {
      if (this._aAuthService.userData.value != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

pagination(page: number): void {
  this.spinner = true;

  this.coursesService.moviesPagination(page).subscribe(date=>{
    this.Movies = date.results;
    this.spinner = false;
  },error=>{
    console.error('Error fetching courses:', error);
    this.spinner = true;
  })
}

  truncateTitle(title: string, maxLength: number): string {
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
  }
}
