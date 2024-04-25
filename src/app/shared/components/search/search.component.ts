import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { TrimDirective } from '../../directives/trim.directive';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    TrimDirective
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() submitSearch = new EventEmitter<string | null>();
  searchForm = new FormGroup({
    user: new FormControl(null, [
      Validators.required
    ])
  }); 

  constructor() { }

  onSubmit() {
    if(this.searchForm.valid) {
      this.submitSearch.emit(this.searchForm.value.user);
    }
  }

}
