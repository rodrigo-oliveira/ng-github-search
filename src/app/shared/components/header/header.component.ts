import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgIf, MatIconModule ],
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
