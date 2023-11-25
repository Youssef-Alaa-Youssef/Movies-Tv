import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesDislikesService {
  private localStorageKey = 'likesDislikes';
  private sessionStorageKey = 'likedItems';

  private likesDislikes: Map<number, { likes: number, dislikes: number }> = new Map<number, { likes: number, dislikes: number }>();

  constructor() {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.likesDislikes = new Map(JSON.parse(storedData));
    } else {
      const movieId = 1;
      this.likesDislikes.set(movieId, { likes: 10, dislikes: 10 });
      this.saveToLocalStorage();
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(Array.from(this.likesDislikes.entries())));
  }
  getLikes(movieId: number): number {
    return this.likesDislikes.get(movieId)?.likes || 10;
  }

  getDislikes(movieId: number): number {
    return this.likesDislikes.get(movieId)?.dislikes || 5;
  }
  private getLikedItems(): Set<number> {
    const likedItemsStr = sessionStorage.getItem(this.sessionStorageKey);
    return likedItemsStr ? new Set(JSON.parse(likedItemsStr)) : new Set<number>();
  }

  private saveLikedItems(likedItems: Set<number>): void {
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(Array.from(likedItems)));
  }

  private userAlreadyLiked(movieId: number): boolean {
    const likedItems = this.getLikedItems();
    return likedItems.has(movieId);
  }

  addLike(movieId: number): number {
    if (!this.userAlreadyLiked(movieId)) {
      const currentLikes = this.getLikes(movieId);
      this.likesDislikes.set(movieId, { likes: currentLikes + 1, dislikes: this.getDislikes(movieId) });
      this.saveToLocalStorage();

      const likedItems = this.getLikedItems();
      likedItems.add(movieId);
      this.saveLikedItems(likedItems);

      return this.getLikes(movieId);
    } else {
      return this.getLikes(movieId);
    }
  }

  dislike(movieId: number): number {
    if (!this.userAlreadyLiked(movieId)) {
      const currentLikes = this.getLikes(movieId);
      this.likesDislikes.set(movieId, { likes: currentLikes, dislikes: Math.max(0, currentLikes - 1) });
      this.saveToLocalStorage();

      const likedItems = this.getLikedItems();
      likedItems.add(movieId);
      this.saveLikedItems(likedItems);

      return this.getLikes(movieId);
    } else {
      return this.getLikes(movieId);
    }
  }
}
