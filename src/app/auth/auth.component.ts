import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Store, select } from '@ngrx/store';
import * as fromApp from '../app.state';
import * as fromAuth from './state/auth.reducer';

import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'hint-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy, OnInit {

  username: string;

  constructor(public afAuth: AngularFireAuth,
              private store: Store<fromAuth.State>) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener); // how to pass store to dispatch
    this.store.pipe(select(fromAuth.getSignedInUser)).subscribe(
      signedInUser => { if (signedInUser) { this.username = signedInUser; } }
    );
    // console.log('current user');
    // console.log(this.afAuth.auth.currentUser);

    // if (this.afAuth.user) {
    //      this.store.dispatch({
    //       type: 'LOGIN_SUCCESS',
    //       payload: this.afAuth.auth.currentUser.displayName
    //      });
    //    }
  }

  dispatchLogin() {
    this.store.dispatch({
      type: 'LOGIN_SUCCESS',
      payload: 'anthony cunningham'
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.store.dispatch({
      type: 'LOGOUT_SUCCESS',
      payload: 'logged out'
    });
  }

  public firebaseAuthChangeListener(response: any) {
    // if needed, do a redirect in here
    if (response) {
      console.log('Logged in :)');
      console.log(response);
      // this.dispatchLogin();
      this.store.dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.displayName
       });
    } else {
      console.log('Logged out :(');
      console.log(response);
    }
  }

  checkCurrentUser() {
    console.log(this.afAuth.auth.currentUser);
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log('success callback');
    this.store.dispatch({
      type: 'LOGIN_SUCCESS',
      payload: signInSuccessData.authResult.user.displayName
    });
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    // console.log('fail callback');
  }

  ngOnDestroy() {

  }

}
