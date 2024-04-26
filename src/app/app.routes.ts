import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ResultSearchComponent } from './features/result-search/result-search.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'repositories', component: ResultSearchComponent },
];
