import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GitHubRepository } from '../../../core/models/github-repository.interface';
import { BadgeComponent } from '../badge/badge.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [
    CommonModule,
    BadgeComponent,
    MatIconModule
  ],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss'
})
export class RepositoryComponent {
  @Input() repository: GitHubRepository | any = null;
}
