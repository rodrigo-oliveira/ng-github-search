import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-sort-repositories',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './sort-repositories.component.html',
  styleUrl: './sort-repositories.component.scss'
})
export class SortRepositoriesComponent {
  selected: any;
  options: string[] = ['Last updated', 'Name', 'Stars'];
}
