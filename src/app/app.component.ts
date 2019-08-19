import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { NbWindowService, NbThemeService } from '@nebular/theme';
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

  constructor(private windowService: NbWindowService, private themeService: NbThemeService) {
    // this.themeService.changeTheme('cosmic');
  }

  ngOnDestroy() {

  }

  private openAddPayment() {
    this.windowService.open(AddPaymentComponent, { title: `Add Payment` });
  }

  private openAddEvent() {
    this.windowService.open(AddEventComponent, { title: `Add Event` });
  }

}
