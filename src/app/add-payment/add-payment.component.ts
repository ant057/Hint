import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { FirebaseService } from '../core/firebase.service';

@Component({
  selector: 'hint-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  addPaymentForm = new FormGroup({
    account: new FormControl(''),
    amount: new FormControl(''),
    description: new FormControl(''),
    paymentDate: new FormControl(''),
    recurringYN: new FormControl(),
    recurringFrequency: new FormControl('Daily'),
    occurrences: new FormControl('')
  });
  selectedItem = 'Daily';

  constructor(private firestore: FirebaseService) {
  }


  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addPaymentForm.value);

    this.firestore.createPayment(this.addPaymentForm.value)
    .then(
      res => {
        this.addPaymentForm.reset();
      }
    );
  }

  cbClick() {
    console.log(this.addPaymentForm);
  }

}
