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
    this.openSnackBar('You are offline');
  }

  @HostListener('window:online')
  setOnline(): void {
    this.openSnackBar('Your connection is back');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', { verticalPosition: 'top' });
  }
}
