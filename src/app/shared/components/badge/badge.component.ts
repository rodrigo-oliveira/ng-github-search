import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styleUrl: './badge.component.scss'
})
export class BadgeComponent { }
