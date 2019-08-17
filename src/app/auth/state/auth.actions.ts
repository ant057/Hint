import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LoginSuccess = '[Login] Successful Login',
    LogoutSuccess = '[Login] Successful Logout'
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;

    constructor(public payload: string) { }
}

export class LogoutSuccess implements Action {
    readonly type = AuthActionTypes.LogoutSuccess;

    constructor() { } // no payload necessary, reducer will set as undefined
}


export type AuthActions = LoginSuccess
    | LogoutSuccess;
