import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconResolver, MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, MatIconModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() alignCenter = true;
  @Input() showBackButton = false;

  constructor(private router: Router) {}

  back() {
    this.router.navigate(['..']);
  }
}
