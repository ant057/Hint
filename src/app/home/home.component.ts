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

  uid: string;
  households = [];

  homes: Array<any> = [
    { name: 'annettes home 1'},
    { name: 'annettes home 2'},
    { name: 'annettes hoem 3'},
    { name: 'annettes home 2'},
    { name: 'annettes hoem 3'}
  ];

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {

    this.store.pipe(select(fromAuth.getuid)).subscribe(
      uid => {
        this.uid = uid;
        if (uid) { this.store.dispatch(new appActions.LoadHouseholds(uid)); }
      }
    );

    this.store.pipe(select(fromApp.getHouseholds)).subscribe((households: Household[]) => this.households = households);
  }

}
