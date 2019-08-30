import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { NbWindowService, NbThemeService } from '@nebular/theme';
import { AddEventComponent } from './add-event/add-event.component';

import * as fromApp from './state/app.reducer';
import * as appActions from './state/app.actions';

import { Store, select } from '@ngrx/store';
import { Lists } from './models/app/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {

  lists: Lists[];

  constructor(private windowService: NbWindowService,
              private themeService: NbThemeService,
              private store: Store<fromApp.AppState> ) {
    // this.themeService.changeTheme('cosmic');
  }

  ngOnInit() {
    this.store.dispatch(new appActions.LoadLists());
    this.store.pipe(select(fromApp.getLists)).subscribe((lists: Lists[]) => this.lists = lists);
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
