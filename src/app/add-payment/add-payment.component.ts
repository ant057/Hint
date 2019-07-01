import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    paymentDate: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addPaymentForm.value);
  }

}
