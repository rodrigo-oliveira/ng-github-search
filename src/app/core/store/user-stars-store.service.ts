import { Injectable, WritableSignal, signal } from '@angular/core';
import { GitHubUserStar } from '../models/github-user-star.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStarsStoreService {
  private starsSignal: WritableSignal<GitHubUserStar[]> = signal([]);
  private userStarsCounterSignals: WritableSignal<number> = signal(0);
  readonly stars = this.starsSignal.asReadonly();
  readonly userStarsCounter = this.userStarsCounterSignals.asReadonly();

  constructor() { }

  setStars(stars: GitHubUserStar[]) {
    this.starsSignal.set(stars);
  }

  updateUserStarsCounter() {
    this.userStarsCounterSignals.set(this.stars().length);
  }
}
