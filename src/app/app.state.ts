import { UserState } from './auth/state/auth.reducer';

export interface State {
    auth: UserState;
    home: any;
}
