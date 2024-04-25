import { Component, Input } from '@angular/core';
import { GitHubRepository } from '../../../core/models/github-repository.interface';
import { BadgeComponent } from '../badge/badge.component';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [
    DatePipe,
    BadgeComponent,
    MatIconModule
  ],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss'
})
export class RepositoryComponent {
  @Input() repository: GitHubRepository = {} as GitHubRepository;
}
