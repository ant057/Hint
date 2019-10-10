import { Component, OnDestroy, OnInit } from '@angular/core';

// ngrx
import * as fromApp from './state/app.reducer';
import * as appActions from './state/app.actions';
import { Store, select } from '@ngrx/store';

// nebular
import { NbThemeService, NbThemeModule } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  theme: string;

  constructor(
    private store: Store<fromApp.AppState>,
    private themeService: NbThemeService) {
  }

  ngOnInit() {
    this.store.dispatch(new appActions.LoadLists());
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
}
