import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultSearchComponent } from './result-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserStoreService } from '../../core/store/user-store.service';
import { UserStarsStoreService } from '../../core/store/user-stars-store.service';
import { RepositoriesStoreService } from '../../core/store/repositories-store.service';
import { SORT_OPTION_UPDATED } from '../../core/constants/sort-options.constant';
import { RepositoriesService } from '../../core/services/repositories.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { userMockData } from '../../core/mocks/user.mock.data';
import { reposMockData } from '../../core/mocks/repos.mock.data';

describe('ResultSearchComponent', () => {
  let component: ResultSearchComponent;
  let fixture: ComponentFixture<ResultSearchComponent>;
  let userStoreService: UserStoreService;
  let userStarsStoreService: UserStarsStoreService;
  let repositoriesStoreService: RepositoriesStoreService;
  let repositoriesService: RepositoriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        ResultSearchComponent
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultSearchComponent);
    repositoriesService = TestBed.inject(RepositoriesService);
    userStoreService = TestBed.inject(UserStoreService);
    userStarsStoreService = TestBed.inject(UserStarsStoreService);
    repositoriesStoreService = TestBed.inject(RepositoriesStoreService);
    component = fixture.componentInstance;
    userStoreService.setUser(userMockData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnit method and call getRepositoriesUser method', () => {
    spyOn(component, 'getRepositoriesUser');
    component.ngOnInit();
    expect(component.getRepositoriesUser).toHaveBeenCalledWith(SORT_OPTION_UPDATED);
  });

  it('should execute getRepositoriesUser method and set repositories to the repositoriesStoreService', () => {
    spyOn(repositoriesService, 'getRepositoriesUser').and.returnValue(of(reposMockData));
    component.getRepositoriesUser(SORT_OPTION_UPDATED);
    expect(repositoriesStoreService.repositories()).toEqual(reposMockData);
  });

  it('should execute onChangeSort and call getRepositoriesUser method', () => {
    spyOn(component, 'getRepositoriesUser');
    component.onChangeSort(SORT_OPTION_UPDATED);
    expect(component.getRepositoriesUser).toHaveBeenCalledWith(SORT_OPTION_UPDATED);
  });
});
