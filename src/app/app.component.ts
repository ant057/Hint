import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hint';

  constructor(public afAuth: AngularFireAuth) {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logintwo() {
    this.afAuth.auth.signInWithEmailAndPassword('oxa547@gmail.com', 'anewkindofpw');
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
