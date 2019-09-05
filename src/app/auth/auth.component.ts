import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/auth/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Store, select } from '@ngrx/store';
import * as fromAuth from './state/auth.reducer';
import * as authActions from './state/auth.actions';

import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { pipe } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { FirebaseService } from '../core/firebase.service';

@Component({
  selector: 'hint-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy, OnInit {

  uid: string;
  user: User;

  constructor(public afAuth: AngularFireAuth,
              private store: Store<fromAuth.State>,
              private firestore: FirebaseService) {
  }

  ngOnInit() {
    // sub to auth observable TODO: unsub
    this.afAuth.authState.pipe(
      map(response => { if (response) {this.store.dispatch(new authActions.LoginSuccess(response.uid)); }}
    )).subscribe(); // how to pass store to dispatch

    // sub to store
    this.store.pipe(select(fromAuth.getuid)).subscribe(
      uid => { if (uid) { this.uid = uid; this.user = this.firestore.getMyUser(uid); }} // TODO: user db load from effect. dispatch action
    );
  }

  logout() {
    this.afAuth.auth.signOut();
    this.store.dispatch(new authActions.LogoutSuccess());
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log('success callback');
    this.store.dispatch(new authActions.LoginSuccess(signInSuccessData.authResult.user.uid));
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    // console.log('fail callback');
  }

  ngOnDestroy() {

  }

}
