import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FirebaseService } from '../core/firebase.service';
import * as appActions from './app.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Lists } from '../models/app/list';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions,
                private firebase: FirebaseService) {
    }

    @Effect()
    loadLists$ = this.actions$.pipe(
        ofType(appActions.AppActionTypes.LoadLists),
        mergeMap((action: appActions.LoadLists) => this.firebase.getLists().pipe(
            map((lists: Lists[]) => (new appActions.LoadListsSuccess(lists)))
        ))
    );
}
