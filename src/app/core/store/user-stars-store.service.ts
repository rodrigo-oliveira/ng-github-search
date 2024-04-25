import { Injectable, WritableSignal, signal } from '@angular/core';
import { GitHubUser } from '../models/github-user.interface';
import { GitHubUserStar } from '../models/github-user-star.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStarsStoreService {
  private starsSignal: WritableSignal<GitHubUserStar[]> = signal([]);
  readonly stars = this.starsSignal.asReadonly();

  constructor() { }

  setStars(stars: GitHubUserStar[]) {
    this.starsSignal.set(stars);
  }
}
