import { Component, Input } from '@angular/core';
import { LikesDislikesService } from '../../likes-dislikes.service';

@Component({
  selector: 'app-moviesreacts',
  templateUrl: './moviesreacts.component.html',
  styleUrls: ['./moviesreacts.component.css'] // Use 'styleUrls' instead of 'styleUrl'
})
export class MoviesreactsComponent {
  @Input() likeCount: number = 0;
  @Input() disLikeCount: number = 0;
  @Input() id: number = 0;

  constructor(private _LikesDislikesService: LikesDislikesService) {}


  getLike(): number {
    return this._LikesDislikesService.getLikes(this.id);
  }

  getDisLike(): number {
    return this._LikesDislikesService.getDislikes(this.id);
  }

  addLike(): void {
    this.likeCount = this._LikesDislikesService.addLike(this.id);
  }

  disLike(): void {
    this.disLikeCount = this._LikesDislikesService.dislike(this.id);
  }
}
