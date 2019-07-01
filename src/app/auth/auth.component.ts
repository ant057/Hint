import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'hint-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
  uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      auth.GoogleAuthProvider.PROVIDER_ID,
      auth.EmailAuthProvider.PROVIDER_ID
    ]
  };

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  private firebaseAuthChangeListener(response: any) {
    // if needed, do a redirect in here
    if (response) {
      console.log('Logged in :)');
      console.log(response);
    } else {
      console.log('Logged out :(');
    }
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    // console.log('success callback');
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    // console.log('fail callback');
  }

  ngOnDestroy() {

  }

}
