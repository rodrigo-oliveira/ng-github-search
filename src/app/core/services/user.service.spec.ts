import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { GitHubUser } from '../models/github-user.interface';
import { userMockData } from '../mocks/user.mock.data';
import { GITHUB_API_USERS } from '../constants/api.constant';
import { starredMockData } from '../mocks/starred.mock.data';
import { GitHubUserStar } from '../models/github-user-star.interface';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user', () => {
    const username = 'testuser';
    const userData: GitHubUser = userMockData;

    service.getUser(username).subscribe(user => {
      expect(user).toEqual(userData);
    });

    const req = httpTestingController.expectOne(`${GITHUB_API_USERS}/${username}`);
    expect(req.request.method).toEqual('GET');
    req.flush(userData);
  });

  it('should get user stars', () => {
    const username = 'testuser';
    const userStarsData: GitHubUserStar[] = starredMockData;

    service.getUserStars(username).subscribe(userStars => {
      expect(userStars).toEqual(userStarsData);
    });

    const req = httpTestingController.expectOne(`${GITHUB_API_USERS}/${username}/starred`);
    expect(req.request.method).toEqual('GET');
    req.flush(userStarsData);
  });
});