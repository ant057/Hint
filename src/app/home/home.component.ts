import { Component, OnInit } from '@angular/core';

// services
import { FirebaseService, Item } from '../core/data.service';

// rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'hint-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myValue$: Observable<Item>;
  myValue: string = 'Annettes Home';

  homes: Array<any> = [
    { name: 'annettes home 1'},
    { name: 'annettes home 2'},
    { name: 'annettes hoem 3'},
    { name: 'annettes home 2'},
    { name: 'annettes hoem 3'}
  ];


  constructor(private fbs: FirebaseService) { }

  ngOnInit() {
    this.myValue$ = this.fbs.getItemVal();
  }

}
