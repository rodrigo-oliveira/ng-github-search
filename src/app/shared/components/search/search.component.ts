import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TrimDirective } from '../../directives/trim.directive';
import { GithubUsernameDirective } from '../../directives/github-username.directive';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    TrimDirective,
    GithubUsernameDirective
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() submitSearch = new EventEmitter();
  searchForm = new FormGroup({
    user: new FormControl('', [
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
