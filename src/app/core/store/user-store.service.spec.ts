import { TestBed } from '@angular/core/testing';
import { UserStoreService } from './user-store.service';
import { GitHubUser } from '../models/github-user.interface';
import { userMockData } from '../mocks/user.mock.data';

describe('UserStoreService', () => {
  let service: UserStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStoreService]
    });
    service = TestBed.inject(UserStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize user as an empty object', () => {
    expect(service.user()).toEqual(jasmine.objectContaining({}));
  });

  it('should set user correctly', () => {
    const user: GitHubUser = userMockData;

    service.setUser(user);
    expect(service.user()).toEqual(user);
  });
});
