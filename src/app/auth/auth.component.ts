import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Store, select } from '@ngrx/store';
import * as fromApp from '../app.state';

import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'hint-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy, OnInit {

  username: string;

  constructor(public afAuth: AngularFireAuth,
              private store: Store<fromApp.State>) {
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener); // how to pass store to dispatch
  }

  ngOnInit() {
    this.store.pipe(select(fromApp.ge)).subscribe(
      auth => { if (auth) { this.username = auth.userName; } }
    );

    if (this.afAuth.user) {
        this.store.dispatch({
          type: 'LOGIN_SUCCESS',
          payload: 'anthony cunningham'
        });
      }
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
      type: 'LOGOUT_SUCCESS'
    });
  }

  private firebaseAuthChangeListener(response: any) {
    // if needed, do a redirect in here
    if (response) {
      console.log('Logged in :)');
      console.log(response);
      this.dispatchLogin();
      // this.store.dispatch({
      //   type: 'LOGIN_SUCCESS'
      // });
    } else {
      console.log('Logged out :(');
    }
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log('success callback');
    // this.store.dispatch({
    //   type: 'LOGIN_SUCCESS',
    //   payload: signInSuccessData.authResult.user.displayName
    // });
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    // console.log('fail callback');
  }

  ngOnDestroy() {

  }

}
