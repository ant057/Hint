import { Action } from '@ngrx/store';
import { User } from 'src/app/models/auth/user';

export enum AuthActionTypes {
    Login = '[Login] Try',
    LoginSuccess = '[Login] Successful Login',
    LoginError = '[Login] Error Login',
    Logout = '[Logout] Try',
    LogoutSuccess = '[Logout] Successful Logout',
    LogoutError = '[Logout] Error Login',
    LoadUser = '[Load User] Try',
    LoadUserSuccess = '[Load User] Success',
    LoadUserError = '[Load User] Error'
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor() { }
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;

    constructor(public payload: string) { }
}

export class LoginError implements Action {
    readonly type = AuthActionTypes.LoginError;

    constructor(public payload: string) { }
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;

    constructor() { }
}

export class LogoutSuccess implements Action {
    readonly type = AuthActionTypes.LogoutSuccess;

    constructor() { } // no payload necessary, reducer will set as null
}

export class LogoutError implements Action {
    readonly type = AuthActionTypes.LogoutError;

    constructor(public payload: string) { }
}

export class LoadUser implements Action {
    readonly type = AuthActionTypes.LoadUser;

    constructor() { }
}

export class LoadUserSuccess implements Action {
    readonly type = AuthActionTypes.LoadUserSuccess;

    constructor(public payload: User) { }
}

export class LoadUserError implements Action {
    readonly type = AuthActionTypes.LoadUserError;

    constructor(public payload: string) { }
}

export type AuthActions = LoginSuccess
    | Login
    | LoginError
    | Logout
    | LogoutSuccess
    | LogoutError
    | LoadUser
    | LoadUserSuccess
    | LoadUserError;
