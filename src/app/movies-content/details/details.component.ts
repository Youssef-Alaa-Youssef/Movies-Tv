import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../movies.service';
import { LikesDislikesService } from '../../likes-dislikes.service';

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
  error:string = '';
  like:number=0;
  disLike:number=0;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
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

    this.coursesService.getMovie(this.id, this.type).subscribe((movie) => {
      this.specificMovie = movie;
      this.spinner = false;
    },  (err) => {
      this.error = err;
      this.spinner = false;
    }
  );
  }
}
