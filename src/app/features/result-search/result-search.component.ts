import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RepositoriesComponent } from '../../shared/components/repositories/repositories.component';
import { UserDetailsComponent } from '../../shared/components/user-details/user-details.component';
import { GitHubRepository } from '../../core/models/github-repository.interface';
import { RepositoriesService } from '../../core/services/repositories.service';
import { UserStoreService } from '../../core/store/user-store.service';
import { RepositoriesStoreService } from '../../core/store/repositories-store.service';
import { GitHubUser } from '../../core/models/github-user.interface';

@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RepositoriesComponent,
    UserDetailsComponent
  ],
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.scss'
})
export class ResultsSearchComponent implements OnInit {
  user: GitHubUser | any = null;
  repositories: GitHubRepository[] = [];

  constructor(
    private repositoriesService: RepositoriesService,
    private userStoreService: UserStoreService,
    private repositoriesStoreService: RepositoriesStoreService
  ) { }

  ngOnInit() {
    this.user = this.userStoreService.user();

    if (this.user.login) {
      this.repositoriesService.getRepositoriesUser(this.user.login).subscribe((repositories: GitHubRepository[]) => {
          this.repositoriesStoreService.setRepositories(repositories);
          this.repositories = repositories;
      });
    }
  }
}
