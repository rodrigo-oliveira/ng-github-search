import { Component, Signal } from '@angular/core';
import { LoaderStoreService } from '../../../core/store/loader-store.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [ CommonModule, MatProgressSpinnerModule ],
  styleUrl: './loader.component.scss',
  template: '<div class="loader" *ngIf="isLoading()"><mat-spinner></mat-spinner><div>'
})
export class LoaderComponent {
  isLoading: Signal<boolean> = this.loaderStoreService.isLoading;

  constructor(private loaderStoreService: LoaderStoreService) {}
  
}