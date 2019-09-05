import { User } from '../../models/auth/user';
import { AuthActions, AuthActionTypes } from './auth.actions';
import * as fromRoot from '../../state/app.state';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    auth: UserState;
}

export interface UserState {
    User: User;
    uid: string;
}

const initialState: UserState = {
    User: undefined,
    uid: undefined
};

const getAuthFeatureState = createFeatureSelector<UserState>('auth');

export const getuid = createSelector(
    getAuthFeatureState,
    state => state.uid
);
export const getSignedInUser = createSelector(
    getAuthFeatureState,
    state => state.User
);

export function reducer(state = initialState, action: AuthActions): UserState {
    switch (action.type) {

        case AuthActionTypes.LoginSuccess:
            return {
                ...state,
                uid: action.payload
            };

        case AuthActionTypes.LogoutSuccess:
            return {
                ...state,
                uid: undefined
            };

        // case AuthActionTypes.SetInitialDefaultValues:
        //     return {
        //         ...state,
        //         SignedInUser: {
        //             // default values
        //             // id: 0
        //             // name: 'Anthony'
        //         }
        //     };

        // case AuthActionTypes.SetAnObject:
        //     return {
        //         ...state,
        //         SignedInUser: { ...action.payload }
        //     };

        default:
            return state;

    }
}
