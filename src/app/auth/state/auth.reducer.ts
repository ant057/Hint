import { User } from '../../models/auth/user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
    SignedInUser: User;
    userName: string;
}

const initialState: UserState = {
    SignedInUser: undefined,
    userName: ''
};

const getAuthFeatureState = createFeatureSelector<UserState>('auth');

export const getSignedInUser = createSelector(
    getAuthFeatureState,
    state => state.SignedInUser
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
                userName: undefined
            };

        default:
            return state;

    }
}
