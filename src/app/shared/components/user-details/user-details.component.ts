import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GitHubUser } from '../../../core/models/github-user.interface';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input() user: GitHubUser | any = {};
}
