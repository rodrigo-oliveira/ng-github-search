
import { TestBed } from '@angular/core/testing';
import { HomeFacade } from './home.facade';
import { UserStoreService } from '../../core/store/user-store.service';
import { UserStarsStoreService } from '../../core/store/user-stars-store.service';
import { UserService } from '../../core/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { userMockData } from '../../core/mocks/user.mock.data';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { starredMockData } from '../../core/mocks/starred.mock.data';

describe('HomeFacade', () => {
  let facade: HomeFacade;
  let userStoreService: UserStoreService;
  let userStarsStoreService: UserStarsStoreService;
  let userService: UserService;
  let matSnackBar: MatSnackBar;
  const searchValue = 'john';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [HomeFacade]
    });
    facade = TestBed.inject(HomeFacade);
    matSnackBar = TestBed.inject(MatSnackBar);
    userStoreService = TestBed.inject(UserStoreService);
    userStarsStoreService = TestBed.inject(UserStarsStoreService);
    userService = TestBed.inject(UserService);
    userStoreService.setUser(userMockData);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should execute onSearch method and call getUser method', () => {
    spyOn(facade, 'getUser');
    facade.onSearch('john');
    expect(facade.getUser).toHaveBeenCalledWith(searchValue);
  });

  it('should execute getUser method and set user to the userStoreService', () => {
    spyOn(userService, 'getUser').and.returnValue(of(userMockData));
    facade.getUser(searchValue);
    expect(userStoreService.user()).toEqual(userMockData);
  });

  it('should execute getUser method and call openUserError method', () => {
    spyOn(facade, 'openUserError');
    spyOn(userService, 'getUser').and.returnValue(throwError(userMockData));
    facade.getUser(searchValue);
    expect(facade.openUserError).toHaveBeenCalled();
  });

  it('should execute getUserStars method and set userStars to the userStarsStoreService', () => {
    const searchValue = 'john';

    spyOn(userService, 'getUserStars').and.returnValue(of(starredMockData));
    facade.getStars(searchValue);
    expect(userStarsStoreService.stars()).toEqual(starredMockData);
  });

  it('should execute openUserError and call open method of MatSnackBar', () => {
    spyOn(matSnackBar, 'open');
    facade.openUserError();
    expect(matSnackBar.open).toHaveBeenCalledWith('User does not exist', 'Ok', {
        verticalPosition: 'top',
        duration: 5000
    });
  });

});
