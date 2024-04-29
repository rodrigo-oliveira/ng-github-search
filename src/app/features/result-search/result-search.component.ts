import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RepositoriesComponent } from '../../shared/components/repositories/repositories.component';
import { UserDetailsComponent } from '../../shared/components/user-details/user-details.component';
import { SortRepositoriesComponent } from '../../shared/components/sort-repositories/sort-repositories.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NgIf } from '@angular/common';
import { ResultSearchFacade } from './result-search.facade';

@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    RepositoriesComponent,
    UserDetailsComponent,
    SortRepositoriesComponent,
    FooterComponent,
  ],
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.scss',
})
export class ResultSearchComponent implements OnInit {

  constructor(
    public resultSearchFacade: ResultSearchFacade
  ) {}

  ngOnInit() {
    this.resultSearchFacade.load();
  }
}
