// angular
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as firebase from 'firebase/app';

import { environment } from '../../environments/environment';

// rxjs
import { Observable, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

// Models


export interface Item { name: string; }

@Injectable()
export class FirebaseService {

  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<Item>('/household/GLjSz6fk3DNaxDZeWBQL');
    this.item = this.itemDoc.valueChanges();
  }
  update(item: Item) {
    this.itemDoc.update(item);
  }

  getItemVal() {
    return this.item;
  }

}
