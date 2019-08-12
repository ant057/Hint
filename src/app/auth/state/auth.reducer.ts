import { User } from '../../models/auth/user';

export interface UserState {
    SignedInUser: User;
    userName: string;
}

const initialState: UserState = {
    SignedInUser: undefined,
    userName: ''
};

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
