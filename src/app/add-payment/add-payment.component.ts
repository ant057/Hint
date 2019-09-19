// core angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { FirebaseService } from '../core/firebase.service';

// ngrx store
import * as fromApp from '../state/app.reducer';
import * as appActions from '../state/app.actions';
import { Store, select } from '@ngrx/store';

// models
import { Lists } from '../models/app/list';

@Component({
  selector: 'hint-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  lists: Lists[];
  addPaymentForm: FormGroup = new FormGroup({
    account: new FormControl(''),
    amount: new FormControl(''),
    description: new FormControl(''),
    paymentDate: new FormControl(''),
    recurringYN: new FormControl(),
    recurringFrequency: new FormControl(),
    occurrences: new FormControl('')
  });

  constructor(private firestore: FirebaseService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.pipe(select(fromApp.getLists)).subscribe((lists: Lists[]) => {
      this.lists = lists;
      this.addPaymentForm.controls.recurringFrequency.patchValue(this.lists[0].values[0]); // default
    });
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
