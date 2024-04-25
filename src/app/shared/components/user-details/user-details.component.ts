import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GitHubUser } from '../../../core/models/github-user.interface';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf,
    MatIconModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input() user: GitHubUser = {} as GitHubUser;
  @Input() userStarsCounter: number = 0;
}
