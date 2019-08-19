import { Component, OnInit } from '@angular/core';

// services
import { FirebaseService } from '../core/firebase.service';

// rxjs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'hint-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myValue: string = 'Annettes Home';
  households = Array<any>();

  homes: Array<any> = [
    { name: 'annettes home 1'},
    { name: 'annettes home 2'},
    { name: 'annettes hoem 3'},
    { name: 'annettes home 2'},
    { name: 'annettes hoem 3'}
  ];

  constructor(private firestore: FirebaseService) { }

  ngOnInit() {
    this.firestore.getHouseholds().pipe(
      tap(res => console.log(res)),
      map(res => this.households = res
    ))
    .subscribe();
  }

}
