import { User } from '../../models/auth/user';
import * as fromRoot from '../../app.state';

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

export function reducer(state = initialState, action): UserState {
    switch (action.type) {

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                userName: action.payload
            };

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                userName: action.payload
            };

        default:
            return state;

    }
}
