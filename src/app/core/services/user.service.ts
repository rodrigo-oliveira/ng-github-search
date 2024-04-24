import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitHubUser } from '../models/github-user.interface';
import { Observable } from 'rxjs';
import { GITHUB_API_USERS } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${GITHUB_API_USERS}/${username}`);
  }
}
