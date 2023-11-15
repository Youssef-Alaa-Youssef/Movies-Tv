import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  spinner: boolean = false;
  baseImage: string = '';
  specificMovie: any = {};

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { 
    this.baseImage = this.coursesService.baseImage;
  }

  ngOnInit(): void {
    this.getIdParameter();
  }

  getIdParameter(): void {
    this.spinner = true;
    this.route.paramMap.subscribe(params => {
      let idString = params.get('id')?.split(":")[1];

      if (idString) {
        console.log(idString)
        const id = +idString;
        this.coursesService.getMovie(id).subscribe(movie => {
          this.specificMovie = movie;
          this.spinner = false;  
        });
      }  
    });
  }
}

