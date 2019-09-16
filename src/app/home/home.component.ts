// core
import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// ngrx store
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../auth/state/auth.reducer';
import * as fromApp from '../state/app.reducer';
import * as appActions from '../state/app.actions';

// models
import { Household } from '../models/household/household';

@Component({
  selector: 'hint-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  households = [];
  items = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: [],
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
      link: [],
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      link: [],
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: [],
    },
  ];
  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {

    this.store.pipe(select(fromAuth.getuid)).subscribe(
      uid => {
        if (uid) { this.store.dispatch(new appActions.LoadHouseholds(uid)); }
      }
    );

    this.store.pipe(select(fromApp.getHouseholds)).subscribe((households: Household[]) => this.households = households);
  }

}
