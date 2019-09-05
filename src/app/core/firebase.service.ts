// angular
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

// rxjs
import { Observable, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

// Models
import { Payment } from '../models/payment/payment';

@Injectable()
export class FirebaseService {

  constructor(private afs: AngularFirestore) {
  }

  getEvents() {
    return this.afs.collection('/events').snapshotChanges();
  }

  getHouseholds() {
    return this.afs.collection('/household').snapshotChanges();
  }

  getMyHouseholds(uid: string) {
    return this.afs.collection('/household', ref => ref.where('UserID' , '==', uid)).snapshotChanges();
  }

  getPayments() {
    return this.afs.collection('/payments').snapshotChanges();
  }

  getUsers() {
    return this.afs.collection('/users').snapshotChanges();
  }

  getMyUser(uid: string) {
    return this.afs.collection('/users', ref => ref.where('UserID', '==', uid)).snapshotChanges();
  }

  getLists() {
    return this.afs.collection(`/lists`).valueChanges();
  }

  createPayment(value) {
    return this.afs.collection('/payments').add({
      Account: value.account,
      Amount: value.amount,
      Description: value.description,
      PaymentDate: value.paymentDate,
      Occurrences: value.occurrences,
      RecurringFrequency: value.recurringFrequency,
      RecurringYN: value.recurringYN,
      UserId: 'G3LkTagze1by9jFarqjiksEAfel1'
    });
  }
}
