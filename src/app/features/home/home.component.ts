import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HomeFacade } from './home.facade';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public homeFacade: HomeFacade) { }
}
