import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { UserService } from '../../core/services/user.service';
import { UserStoreService } from '../../core/store/user-store.service';
import { Router } from '@angular/router';
import { GitHubUser } from '../../core/models/github-user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserStarsStoreService } from '../../core/store/user-stars-store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private userStoreService: UserStoreService,
    private userStarsStore: UserStarsStoreService
  ) { }

  onSearch(searchValue: any) {
    this.getUser(searchValue);
  }

  getUser(searchValue: string) {
    this.userService.getUser(searchValue).subscribe((user: GitHubUser) => {
      this.userStoreService.setUser(user);
      this.getStars(searchValue);
    }, error => this.openUserError());
  }

  getStars(searchValue: string) {
    this.userService.getUserStars(searchValue).subscribe(stars => {
      this.userStarsStore.setStars(stars);
      this.router.navigate(['repositories']);
    });
  }

  openUserError() {
    this.snackBar.open('User does not exist', 'Ok', {
      verticalPosition: 'top',
      duration: 5000
    });
  }
}
