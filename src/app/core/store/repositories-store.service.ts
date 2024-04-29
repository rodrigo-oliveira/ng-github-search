import { Injectable, WritableSignal, signal } from '@angular/core';
import { GitHubRepository } from '../models/github-repository.interface';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesStoreService {
  private repositoriesSignal: WritableSignal<GitHubRepository[]> = signal([]);
  readonly repositories = this.repositoriesSignal.asReadonly();

  constructor() { }

  setRepositories(repositories: GitHubRepository[]) {
    this.repositoriesSignal.set(repositories);
  }

  sortRepositoriesByStars() {
    this.repositoriesSignal.update(repositories => {
      return repositories.sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1));
    });
  }
}
