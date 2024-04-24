import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubRepository } from '../models/github-repository.interface';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getRepositoriesUser(username: string): Observable<GitHubRepository[]> {
    return this.http.get<GitHubRepository[]>(`https://api.github.com/users/${username}/repos`);
  }
}
