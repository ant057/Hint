import { Component, OnDestroy } from '@angular/core';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { NbWindowService } from '@nebular/theme';
import { AddEventComponent } from './add-event/add-event.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  windowConfig = {
    hasBackdrop: true,
    closeOnBackdropClick: true
  };

  constructor(private windowService: NbWindowService) {

  }

  ngOnDestroy() {

  }

  private openAddPayment() {
    this.windowService.open(AddPaymentComponent);
  }

  private openAddEvent() {
    this.windowService.open(AddEventComponent);
  }

}
