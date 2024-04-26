import { TestBed } from '@angular/core/testing';
import { UserStarsStoreService } from './user-stars-store.service';
import { GitHubUserStar } from '../models/github-user-star.interface';
import { starredMockData } from '../mocks/starred.mock.data';

describe('UserStarsStoreService', () => {
  let service: UserStarsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStarsStoreService]
    });
    service = TestBed.inject(UserStarsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize stars as an empty array', () => {
    expect(service.stars()).toEqual([]);
  });

  it('should set stars correctly', () => {
    const stars: GitHubUserStar[] = starredMockData;

    service.setStars(stars);
    expect(service.stars()).toEqual(stars);
  });
});
