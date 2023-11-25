import { Component,Input } from '@angular/core';
import { LikesDislikesService } from '../../likes-dislikes.service';

@Component({
  selector: 'app-moviesreacts',
  templateUrl: './moviesreacts.component.html',
  styleUrl: './moviesreacts.component.css'
})
export class MoviesreactsComponent {
  @Input() likeCount: number = 0;
  @Input() disLikeCount: number = 0;
  @Input() id: number = 0;

constructor(private _LikesDislikesService:LikesDislikesService){}
getLike(id:number){
  this._LikesDislikesService.getLikes(id);
}

addLike(id:number){
  this._LikesDislikesService.addlike(id);
}
disLike(id:number){
  this._LikesDislikesService.dislike(id);
}
}
