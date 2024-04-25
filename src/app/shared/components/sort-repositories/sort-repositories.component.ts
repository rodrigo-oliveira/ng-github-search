import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { SortOption } from '../../../core/models/sort-option.interface';

@Component({
  selector: 'app-sort-repositories',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './sort-repositories.component.html',
  styleUrl: './sort-repositories.component.scss'
})
export class SortRepositoriesComponent {
  options: SortOption[] = [
    {
      name: 'Last updated',
      value: 'updated'
    },
    {
      name: 'Name',
      value: 'full_name'
    },
    {
      name: 'Stars',
      value: 'pushed'
    }
  ];
  selected = 'updated';
  @Output() selectionChange = new EventEmitter<string>();

  onSelectionChange(event: MatSelectChange) {
    this.selectionChange.emit(event.value);
  }

}
