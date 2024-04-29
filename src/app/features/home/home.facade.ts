import { Injectable } from '@angular/core';
import { UserStarsStoreService } from '../../core/store/user-stars-store.service';
import { UserService } from '../../core/services/user.service';
import { UserStoreService } from '../../core/store/user-store.service';
import { GitHubUser } from '../../core/models/github-user.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HomeFacade {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private userStoreService: UserStoreService,
    private userStarsStore: UserStarsStoreService
) {}

  onSearch(searchValue: string) {
    this.getUser(searchValue);
  }

  getUser(searchValue: string) {
    this.userService.getUser(searchValue).subscribe(
      (user: GitHubUser) => {
        this.userStoreService.setUser(user);
        this.getStars(searchValue);
      },
      error => this.openUserError()
    );
  }

  getStars(searchValue: string) {
    this.userService.getUserStars(searchValue).subscribe((stars) => {
      this.userStarsStore.setStars(stars);
      this.router.navigate(['repositories']);
    });
  }

  openUserError() {
    this.snackBar.open('User does not exist', 'Ok', {
      verticalPosition: 'top',
      duration: 5000,
    });
  }
}
