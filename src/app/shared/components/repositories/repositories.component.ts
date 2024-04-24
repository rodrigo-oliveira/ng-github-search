import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { SortRepositoriesComponent } from "../sort-repositories/sort-repositories.component";
import { CommonModule } from "@angular/common";
import { GitHubRepository } from "../../../core/models/github-repository.interface";

@Component({
    selector: 'app-repositories',
    standalone: true,
    imports: [ CommonModule, MatIconModule, SortRepositoriesComponent ],
    templateUrl: './repositories.component.html',
    styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
    @Input() repositories: GitHubRepository[] = [];

    constructor() { }
}