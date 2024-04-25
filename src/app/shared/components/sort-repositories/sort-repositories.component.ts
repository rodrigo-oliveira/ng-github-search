import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { SortOption } from '../../../core/models/sort-option.interface';
import { SORT_OPTION_UPDATED, SORT_OPTIONS } from '../../../core/constants/sort-options.constant';

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
  options: SortOption[] = SORT_OPTIONS;
  selected = SORT_OPTION_UPDATED;
  @Output() selectionChange = new EventEmitter<string>();

  onSelectionChange(event: MatSelectChange) {
    this.selectionChange.emit(event.value);
  }

}
