import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RepositoriesService } from './repositories.service';
import { GITHUB_API_USERS } from '../constants/api.constant';
import { SORT_OPTION_UPDATED } from '../constants/sort-options.constant';
import { reposMockData } from '../mocks/repos.mock.data';
import { GitHubRepository } from '../models/github-repository.interface';

describe('RepositoriesService', () => {
  let service: RepositoriesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepositoriesService]
    });
    service = TestBed.inject(RepositoriesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get repositories user', () => {
    const username = 'testuser';
    const repositories: GitHubRepository[] = reposMockData;

    service.getRepositoriesUser(username, SORT_OPTION_UPDATED).subscribe(data => {
      expect(data).toEqual(repositories);
    });

    const req = httpTestingController.expectOne(`${GITHUB_API_USERS}/${username}/repos?sort=${SORT_OPTION_UPDATED}`);
    expect(req.request.method).toEqual('GET');
    req.flush(repositories);
  });
});