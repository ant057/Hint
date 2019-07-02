import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'hint-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  addEventForm = new FormGroup({
    add1: new FormControl(''),
    add2: new FormControl(''),
    city: new FormControl(''),
    description: new FormControl(''),
    eventDate: new FormControl(''),
    eventType: new FormControl(''),
    name: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    recurringYN: new FormControl(''),
    recurringFrequency: new FormControl(''),
    occurrences: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addEventForm.value);
  }

}
