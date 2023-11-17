import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  spinner: boolean = false;
  baseImage: string = '';
  specificMovie: any = {};
  id: string = '';
  type: string = '';

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
    this.baseImage = this.coursesService.baseImage;
  }

  ngOnInit(): void {
    this.getIdParameter();
  }

  getIdParameter(): void {
    this.spinner = true;
    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.params['type'];

    console.log(this.id);
    this.coursesService.getMovie(this.id, this.type).subscribe((movie) => {
      this.specificMovie = movie;
      this.spinner = false;
    });
  }
}
