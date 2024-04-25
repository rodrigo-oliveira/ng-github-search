import { Component, Input } from "@angular/core";
import { GitHubRepository } from "../../../core/models/github-repository.interface";
import { RepositoryComponent } from "../repository/repository.component";

@Component({
    selector: 'app-repositories',
    standalone: true,
    imports: [ RepositoryComponent ],
    templateUrl: './repositories.component.html',
    styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
    @Input() repositories: GitHubRepository[] = [];

    constructor() { }
}