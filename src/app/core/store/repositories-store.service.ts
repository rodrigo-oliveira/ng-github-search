import { Injectable, WritableSignal, signal } from '@angular/core';
import { GitHubRepository } from '../models/github-repository.interface';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesStoreService {
  private repositoriesSignal: WritableSignal<GitHubRepository[] | any> = signal(null);
  readonly repositories = this.repositoriesSignal.asReadonly();

  constructor() { }

  setRepositories(repositories: GitHubRepository[]) {
    this.repositoriesSignal.set(repositories);
  }
}
