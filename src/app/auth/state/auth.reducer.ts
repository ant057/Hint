import { User } from '../../models/auth/user';

export interface UserState {
    SignedInUser: User;
    userName: string;
}


export function reducer(state, action) {

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
            return {
                state
            };
    }
}
