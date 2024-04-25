import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<ng-content></ng-content>`,
  styleUrl: './badge.component.scss'
})
export class BadgeComponent { }
