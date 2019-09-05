import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { FirebaseService } from '../../core/firebase.service';
import * as authActions from './auth.actions';
import { mergeMap, map, tap } from 'rxjs/operators';
import { User } from '../../models/auth/user';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
                private firebase: FirebaseService) {
    }

    @Effect()
    loadUser$ = this.actions$.pipe(
        ofType(authActions.AuthActionTypes.LoadUser),
        mergeMap((action: authActions.LoadUser) => this.firebase.getMyUser(action.payload).pipe(
            map((user: User[]) => (new authActions.LoadUserSuccess(user)))
        ))
    );
}
