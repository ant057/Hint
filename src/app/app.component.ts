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
  theme: string;

  constructor(private windowService: NbWindowService,
              private themeService: NbThemeService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new appActions.LoadLists());
    this.store.pipe(select(fromApp.getLists)).subscribe((lists: Lists[]) => this.lists = lists);

    this.theme = this.themeService.currentTheme;
  }

  cycleTheme() {
    switch (this.themeService.currentTheme) {
      case 'default': this.themeService.changeTheme('dark'); break;
      case 'dark': this.themeService.changeTheme('corporate'); break;
      case 'corporate': this.themeService.changeTheme('cosmic'); break;
      case 'cosmic': this.themeService.changeTheme('default'); break;
    }

    this.theme = this.themeService.currentTheme;
  }

  ngOnDestroy() {

  }

  openAddPayment() {
    this.windowService.open(AddPaymentComponent, { title: `Add Payment` });
  }

  openAddEvent() {
    this.windowService.open(AddEventComponent, { title: `Add Event` });
  }

}
