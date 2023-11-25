import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesDislikesService {
  private movieLikes: Map<number, { likes: number, dislikes: number }> = new Map<number, { likes: number, dislikes: number }>(); 

  constructor() {
    // Assume you have a movieId (replace 1 with the actual movieId)
    const movieId = 1;
    this.movieLikes.set(movieId, { likes: 10, dislikes: 10 });
  }

  getLikes(movieId: number): number {
    return this.movieLikes.get(movieId)?.likes || 0;
  }

  getDislikes(movieId: number): number {
    return this.movieLikes.get(movieId)?.dislikes || 0;
  }

  addlike(movieId: number): number {
    const currentLikes = this.getLikes(movieId);
    this.movieLikes.set(movieId, { likes: currentLikes + 1, dislikes: this.getDislikes(movieId) });
    return this.getLikes(movieId);
  }

  dislike(movieId: number): number {
    const currentLikes = this.getLikes(movieId);
    this.movieLikes.set(movieId, { likes: Math.max(0, currentLikes - 1), dislikes: this.getDislikes(movieId) });
    return this.getLikes(movieId);
  }
}
