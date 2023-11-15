import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  constructor(private _NgToastService: NgToastService) {}


  showSuccess() {
    this._NgToastService.success({ detail: 'SUCCESS', summary: 'Good' });
  }

  showError() {
    this._NgToastService.error({
      detail: 'ERROR',
      summary: 'Your Error Message',
      sticky: true,
    });
  }

  showInfo() {
    this._NgToastService.info({
      detail: 'INFO',
      summary: 'Your Info Message',
      sticky: true,
    });
  }
}
