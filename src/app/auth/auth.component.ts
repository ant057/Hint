// angular core
import { Component, OnInit, OnDestroy } from '@angular/core';

// models
import { User } from '../models/auth/user';
import { auth } from 'firebase/app';

// ngrx store
import { Store, select } from '@ngrx/store';
import * as fromAuth from './state/auth.reducer';
import * as authActions from './state/auth.actions';

// angular ui
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';

// rxjs
import { pipe } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'hint-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy, OnInit {

  uid: string;
  user: User;

  constructor(public afAuth: AngularFireAuth,
              private store: Store<fromAuth.State>) {
  }

  ngOnInit() {
    // sub to auth observable TODO: unsub
    this.afAuth.authState.pipe(
      map(response => {
        if (response) {
          this.store.dispatch(new authActions.LoginSuccess(response.uid)); }
        }
      )).subscribe();

    // sub to store
    this.store.pipe(select(fromAuth.getuid)).subscribe(
      uid => {
        this.uid = uid;
        if (uid) { this.store.dispatch(new authActions.LoadUser(uid)); }
      }
    );

    this.store.pipe(select(fromAuth.getSignedInUser)).subscribe(
      user => {
        if (user) { this.user = user; console.log(this.user); }
      }
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
