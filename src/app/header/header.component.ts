import { Component, Input } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() headerMoviesOWL: any[] = [];
  baseImage: string = '';
  constructor(private _CoursesService: CoursesService) {
    this.baseImage = this._CoursesService.baseImage;
  }
}
