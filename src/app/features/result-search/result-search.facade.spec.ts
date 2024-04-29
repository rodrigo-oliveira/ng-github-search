import { TestBed } from '@angular/core/testing';
import { ResultSearchFacade } from './result-search.facade';
import { UserStoreService } from '../../core/store/user-store.service';
import { UserStarsStoreService } from '../../core/store/user-stars-store.service';
import { userMockData } from '../../core/mocks/user.mock.data';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { RepositoriesService } from '../../core/services/repositories.service';
import { RepositoriesStoreService } from '../../core/store/repositories-store.service';
import { reposMockData } from '../../core/mocks/repos.mock.data';
import { SORT_OPTION_STARS, SORT_OPTION_UPDATED } from '../../core/constants/sort-options.constant';

describe('ResultSearchFacade', () => {
  let facade: ResultSearchFacade;
  let userStoreService: UserStoreService;
  let userStarsStoreService: UserStarsStoreService;
  let repositoriesStoreService: RepositoriesStoreService;
  let repositoriesService: RepositoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [ResultSearchFacade]
    });
    facade = TestBed.inject(ResultSearchFacade);
    repositoriesService = TestBed.inject(RepositoriesService);
    userStoreService = TestBed.inject(UserStoreService);
    userStarsStoreService = TestBed.inject(UserStarsStoreService);
    repositoriesStoreService = TestBed.inject(RepositoriesStoreService);
    userStoreService.setUser(userMockData);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should execute load method and call updateRepositories method', () => {
    spyOn(facade, 'updateRepositories');
    facade.load();
    expect(facade.updateRepositories).toHaveBeenCalledWith(SORT_OPTION_UPDATED);
  });

  it('should execute updateRepositories method and set repositories to the repositoriesStoreService', () => {
    spyOn(repositoriesService, 'getRepositoriesUser').and.returnValue(of(reposMockData));
    facade.updateRepositories(SORT_OPTION_UPDATED);
    expect(repositoriesStoreService.repositories()).toEqual(reposMockData);
  });

  it('should execute updateRepositories("stars") method and call sortRepositoriesByStars method', () => {
    spyOn(repositoriesStoreService, 'sortRepositoriesByStars');
    facade.onChangeSort(SORT_OPTION_STARS);
    expect(repositoriesStoreService.sortRepositoriesByStars).toHaveBeenCalled();
  });

  it('should execute onChangeSort and call updateRepositories method', () => {
    spyOn(facade, 'updateRepositories');
    facade.onChangeSort(SORT_OPTION_UPDATED);
    expect(facade.updateRepositories).toHaveBeenCalledWith(SORT_OPTION_UPDATED);
  });
});
