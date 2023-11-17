import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top-tv',
  templateUrl: './top-tv.component.html',
  styleUrl: './top-tv.component.css',
})
export class TopTvComponent {
  topTVArr: any[] = [];
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
    this.topTV();
    this._aAuthService.userData.subscribe(() => {
      if (this._aAuthService.userData.value != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  topTV(): void {
    this.spinner = true;

    this.coursesService.displayTV().subscribe(
      (date) => {
        this.topTVArr = date.results.slice(0,11);
        this.spinner = false;
      },
      (error) => {
        console.error('Error fetching courses:', error);
        this.spinner = true;
      }
    );
  }
}
