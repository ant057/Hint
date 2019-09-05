import { User } from '../../models/auth/user';
import { AuthActions, AuthActionTypes, LoadUser, LoadUserSuccess, LoadUserError } from './auth.actions';
import * as fromRoot from '../../state/app.state';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    auth: UserState;
}

export interface UserState {
    users: User[];
    uid: string;
}

const initialState: UserState = {
    users: [],
    uid: undefined
};

const getAuthFeatureState = createFeatureSelector<UserState>('auth');

export const getuid = createSelector(
    getAuthFeatureState,
    state => state.uid
);
export const getSignedInUser = createSelector(
    getAuthFeatureState,
    state => state.users[0]
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
                uid: undefined,
                users: undefined
            };

        case AuthActionTypes.LoadUser:
            return {
                ...state
            };

        case AuthActionTypes.LoadUserSuccess:
            return {
                ...state,
                users: action.payload
            };

        case AuthActionTypes.LoadUserError:
            return {
                ...state
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
