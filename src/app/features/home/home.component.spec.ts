import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserStoreService } from '../../core/store/user-store.service';
import { UserStarsStoreService } from '../../core/store/user-stars-store.service';
import { SORT_OPTION_UPDATED } from '../../core/constants/sort-options.constant';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { userMockData } from '../../core/mocks/user.mock.data';
import { UserService } from '../../core/services/user.service';
import { starredMockData } from '../../core/mocks/starred.mock.data';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userStoreService: UserStoreService;
  let userStarsStoreService: UserStarsStoreService;
  let userService: UserService;
  let matSnackBar: MatSnackBar;
  const searchValue = 'john';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        HomeComponent
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    matSnackBar = TestBed.inject(MatSnackBar);
    userStoreService = TestBed.inject(UserStoreService);
    userStarsStoreService = TestBed.inject(UserStarsStoreService);
    userService = TestBed.inject(UserService);
    component = fixture.componentInstance;
    userStoreService.setUser(userMockData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onSearch method and call getUser method', () => {
    spyOn(component, 'getUser');
    component.onSearch('john');
    expect(component.getUser).toHaveBeenCalledWith(searchValue);
  });

  it('should execute getUser method and set user to the userStoreService', () => {
    spyOn(userService, 'getUser').and.returnValue(of(userMockData));
    component.getUser(searchValue);
    expect(userStoreService.user()).toEqual(userMockData);
  });

  it('should execute getUser method and call openUserError method', () => {
    spyOn(component, 'openUserError');
    spyOn(userService, 'getUser').and.returnValue(throwError(userMockData));
    component.getUser(searchValue);
    expect(component.openUserError).toHaveBeenCalled();
  });

  it('should execute getUserStars method and set userStars to the userStarsStoreService', () => {
    const searchValue = 'john';

    spyOn(userService, 'getUserStars').and.returnValue(of(starredMockData));
    component.getStars(searchValue);
    expect(userStarsStoreService.stars()).toEqual(starredMockData);
  });

  it('should execute openUserError and call open method of MatSnackBar', () => {
    spyOn(matSnackBar, 'open');
    component.openUserError();
    expect(matSnackBar.open).toHaveBeenCalledWith('User does not exist', 'Ok', {
        verticalPosition: 'top',
        duration: 5000
    });
  });
});
