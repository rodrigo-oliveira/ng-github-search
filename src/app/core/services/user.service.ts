import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubUser } from '../models/github-user.interface';
import { GITHUB_API_USERS } from '../constants/api.constant';
import { GitHubUserStar } from '../models/github-user-star.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${GITHUB_API_USERS}/${username}`);
  }

  getUserStars(username: string): Observable<GitHubUserStar[]> {
    return this.http.get<GitHubUserStar[]>(`${GITHUB_API_USERS}/${username}/starred`);
  }
}
