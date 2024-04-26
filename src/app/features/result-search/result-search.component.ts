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
import {
  SORT_OPTION_STARS,
  SORT_OPTION_UPDATED,
} from '../../core/constants/sort-options.constant';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    RepositoriesComponent,
    UserDetailsComponent,
    SortRepositoriesComponent,
    FooterComponent,
  ],
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.scss',
})
export class ResultSearchComponent implements OnInit {
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
    const login = this.userStoreService.user().login;

    if (sortType !== SORT_OPTION_STARS) {
      this.repositoriesService
        .getRepositoriesUser(login, sortType)
        .subscribe((repositories: GitHubRepository[]) => {
          this.repositoriesStoreService.setRepositories(repositories);
        });
    } else {
      this.sortRepositoriesByStars();
    }
  }

  sortRepositoriesByStars() {
    const repositoriesSortedByStars = this.repositoriesStoreService
      .repositories()
      .sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1));

    this.repositoriesStoreService.setRepositories(repositoriesSortedByStars);
  }

  onChangeSort(sortType: string) {
    this.getRepositoriesUser(sortType);
  }
}
