import { User } from '../../models/auth/user';
import { AuthActions, AuthActionTypes } from './auth.actions';
import * as fromRoot from '../../state/app.state';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    auth: UserState;
}

export interface UserState {
    SignedInUser: User;
    userName: string;
}

const initialState: UserState = {
    SignedInUser: undefined,
    userName: undefined
};

const getAuthFeatureState = createFeatureSelector<UserState>('auth');

export const getSignedInUser = createSelector(
    getAuthFeatureState,
    state => state.userName
);

export function reducer(state = initialState, action: AuthActions): UserState {
    switch (action.type) {

        case AuthActionTypes.LoginSuccess:
            return {
                ...state,
                userName: action.payload
            };

        case AuthActionTypes.LogoutSuccess:
            return {
                ...state,
                userName: undefined
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
