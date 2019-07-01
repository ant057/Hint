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

  constructor(private fbs: FirebaseService) { }

  ngOnInit() {
    this.myValue$ = this.fbs.getItemVal();
  }

}
