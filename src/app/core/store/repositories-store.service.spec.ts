import { TestBed } from '@angular/core/testing';
import { RepositoriesStoreService } from './repositories-store.service';
import { GitHubRepository } from '../models/github-repository.interface';
import { reposMockData } from '../mocks/repos.mock.data';

describe('RepositoriesStoreService', () => {
  let service: RepositoriesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoriesStoreService]
    });
    service = TestBed.inject(RepositoriesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize repositories as an empty array', () => {
    expect(service.repositories()).toEqual([]);
  });

  it('should set repositories correctly', () => {
    const repositories: GitHubRepository[] = reposMockData;

    service.setRepositories(repositories);
    expect(service.repositories()).toEqual(repositories);
  });

  it('should execute sortRepositoriesByStars method and set repositories', () => {
    let repositoriesSortedByStars = [];

    service.setRepositories(reposMockData);
    repositoriesSortedByStars = service
        .repositories()
        .sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1));
    spyOn(service, 'setRepositories');
    service.sortRepositoriesByStars();
    expect(service.repositories()).toEqual(repositoriesSortedByStars);
  });

});
