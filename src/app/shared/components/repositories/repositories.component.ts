import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GitHubRepository } from "../../../core/models/github-repository.interface";
import { RepositoryComponent } from "../repository/repository.component";

@Component({
    selector: 'app-repositories',
    standalone: true,
    imports: [
        CommonModule,
        RepositoryComponent
    ],
    templateUrl: './repositories.component.html',
    styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
    @Input() repositories: GitHubRepository[] = [];

    constructor() { }
}