import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubRepository } from '../models/github-repository.interface';
import { GITHUB_API_USERS } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getRepositoriesUser(username: string, sortType: string): Observable<GitHubRepository[]> {
    return this.http.get<GitHubRepository[]>(`${GITHUB_API_USERS}/${username}/repos?sort=${sortType}`);
  }
}
