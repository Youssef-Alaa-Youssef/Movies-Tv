import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../movies.service';
import { AuthService } from '../../auth.service';

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
  error:string='';
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
  },err=>{
    this.error = err;
    this.spinner = false;
  })
}

}
