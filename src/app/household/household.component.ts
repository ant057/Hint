import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Household } from '../models/household/household';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../auth/state/auth.reducer';
import * as fromApp from '../state/app.reducer';
import * as appActions from '../state/app.actions';

@Component({
  selector: 'hint-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})
export class HouseholdComponent implements OnInit, OnDestroy {
  selectedHousehold$: Observable<Household>;
  componentActive = true;
  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
    this.selectedHousehold$ = this.store.pipe(select(fromApp.getSelectedHousehold));

    // TODO: load payments etc.
    // this.store.pipe(
    //   select(fromAuth.getuid),
    //   takeWhile(() => this.componentActive))
    //   .subscribe(
    //     uid => {
    //       if (uid) {
    //         this.store.dispatch(new appActions.LoadHouseholds(uid));
    //       }
    //     }
    //   );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

}
