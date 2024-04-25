import { Injectable, WritableSignal, signal } from '@angular/core';
import { GitHubUser } from '../models/github-user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private userSignal: WritableSignal<GitHubUser> = signal({} as GitHubUser);
  readonly user = this.userSignal.asReadonly();

  constructor() { }

  setUser(user: GitHubUser) {
    this.userSignal.set(user);
  }
}
