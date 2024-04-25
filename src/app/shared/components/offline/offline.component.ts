import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-offline',
  standalone: true,
  template: '',
  styles: ''
})
export class OfflineComponent {  
  constructor(private snackBar: MatSnackBar) { }

  @HostListener('window:offline')
  setOffline(): void {
    this.snackBar.open('You are offline', 'Ok', { verticalPosition: 'top' });
  }

  @HostListener('window:online')
  setOnline(): void {
    this.snackBar.open('Your connection is back', 'Ok', { verticalPosition: 'top' });
  }
}
