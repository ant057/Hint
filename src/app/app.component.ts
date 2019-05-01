import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Hint2';
  uiConfig = {
    signInSuccessUrl: 'http://localhost:4200/',
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

  private firebaseAuthChangeListener(response) {
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
