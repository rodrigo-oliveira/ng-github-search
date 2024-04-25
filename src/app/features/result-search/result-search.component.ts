import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RepositoriesComponent } from '../../shared/components/repositories/repositories.component';
import { UserDetailsComponent } from '../../shared/components/user-details/user-details.component';
import { GitHubRepository } from '../../core/models/github-repository.interface';
import { RepositoriesService } from '../../core/services/repositories.service';
import { UserStoreService } from '../../core/store/user-store.service';
import { RepositoriesStoreService } from '../../core/store/repositories-store.service';
import { UserStarsStoreService } from '../../core/store/user-stars-store.service';
import { SortRepositoriesComponent } from '../../shared/components/sort-repositories/sort-repositories.component';
import { SORT_OPTION_UPDATED } from '../../core/constants/sort-options.constant';

@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RepositoriesComponent,
    UserDetailsComponent,
    SortRepositoriesComponent
  ],
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.scss'
})
export class ResultsSearchComponent implements OnInit {
  userStarsCounter: number = 0;

  constructor(
    private repositoriesService: RepositoriesService,
    public userStoreService: UserStoreService,
    private userStarsStoreService: UserStarsStoreService,
    public repositoriesStoreService: RepositoriesStoreService
  ) {}

  ngOnInit() {
    if (this.userStoreService.user()) {
      this.userStarsCounter = this.userStarsStoreService.stars().length;
      this.getRepositoriesUser(SORT_OPTION_UPDATED);
    }
  }

  getRepositoriesUser(sortType: string) {
    this.repositoriesService.getRepositoriesUser(this.userStoreService.user().login, sortType).subscribe((repositories: GitHubRepository[]) => {
      this.repositoriesStoreService.setRepositories(repositories);
    });
  }

  onChangeSort(sortType: string) {
    this.getRepositoriesUser(sortType);
  }
}
