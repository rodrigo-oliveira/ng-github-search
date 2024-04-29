import { Injectable } from "@angular/core";
import { RepositoriesService } from "../../core/services/repositories.service";
import { UserStoreService } from "../../core/store/user-store.service";
import { SORT_OPTION_STARS, SORT_OPTION_UPDATED } from "../../core/constants/sort-options.constant";
import { RepositoriesStoreService } from "../../core/store/repositories-store.service";
import { GitHubRepository } from "../../core/models/github-repository.interface";
import { UserStarsStoreService } from "../../core/store/user-stars-store.service";

@Injectable({
    providedIn: 'root'
  })
export class ResultSearchFacade {
    userStarsCounter = this.userStarsStoreService.userStarsCounter;
    user = this.userStoreService.user;
    repositories = this.repositoriesStoreService.repositories;

    constructor(
        private repositoriesService: RepositoriesService,
        private repositoriesStoreService: RepositoriesStoreService,
        private userStoreService: UserStoreService,
        private userStarsStoreService: UserStarsStoreService
    ) { }

    load() {
        if (Object.keys(this.user()).length > 0) {
            this.userStarsStoreService.updateUserStarsCounter();
            this.updateRepositories(SORT_OPTION_UPDATED);
        }
    }

    updateRepositories(sortType: string) {    
        if (sortType !== SORT_OPTION_STARS) {
          this.repositoriesService
            .getRepositoriesUser(this.user().login, sortType)
            .subscribe((repositories: GitHubRepository[]) => {
              this.repositoriesStoreService.setRepositories(repositories);
            });
        } else {
          this.repositoriesStoreService.sortRepositoriesByStars();
        }
    }
    
    onChangeSort(sortType: string) {
        this.updateRepositories(sortType);
    }
}