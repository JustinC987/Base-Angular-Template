import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone) { }

  showSuccess(message: string): void {
    // Had an issue with the snackbar being ran outside of angular's zone.
    this.zone.run(() => {
      this.openSuccessSnackbar(message, 'X');
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button. 
      // In the third, we send in the css class for the snack bar.
      this.openErrorSnackbar(message, 'X');
    });
  }

  openErrorSnackbar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['error-message']
    });
  }

  openSuccessSnackbar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 50000,
      verticalPosition: 'top',
      panelClass: ['success-message']
    });
  }
}