// core
import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// ngrx store
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../auth/state/auth.reducer';

@Component({
  selector: 'hint-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uid: string;
  households = Array<any>();

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
      uid => { this.uid = uid; }
    );

    // to store household in state.. or not to
    // thinking yes: create effect and dispatch action

  }

}
