import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { UserService } from '../../core/services/user.service';
import { UserStoreService } from '../../core/store/user-store.service';
import { Router } from '@angular/router';
import { GitHubUser } from '../../core/models/github-user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private userStoreService: UserStoreService
  ) { }

  onSearch(searchValue: any) {
    this.userService.getUser(searchValue).subscribe((githubUser: GitHubUser) => {
      this.userStoreService.setUser(githubUser);
      this.router.navigate(['results']);
    }, error => {
      this.snackBar.open('User does not exist', 'Ok', {
        verticalPosition: 'top',
        duration: 5000
      });
    });
  }
}
