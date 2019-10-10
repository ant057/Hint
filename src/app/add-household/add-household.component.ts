import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'hint-add-household',
  templateUrl: './add-household.component.html',
  styleUrls: ['./add-household.component.css']
})
export class AddHouseholdComponent implements OnInit {

  addHouseholdForm = new FormGroup({
    name: new FormControl(''),
    add1: new FormControl(''),
    add2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addHouseholdForm.value);
  }

}
