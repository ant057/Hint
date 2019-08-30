import { Action } from '@ngrx/store';
import { Lists } from '../models/app/list';

export enum AppActionTypes {
    LoadLists = '[Load Lists] Try',
    LoadListsSuccess = '[Load Lists] Successful',
    LoadListsError = '[Load Lists] Error'
}

export class LoadLists implements Action {
    readonly type = AppActionTypes.LoadLists;

    constructor() { }
}

export class LoadListsSuccess implements Action {
    readonly type = AppActionTypes.LoadListsSuccess;

    constructor(public payload: Lists[]) { }
}

export class LoadListsError implements Action {
    readonly type = AppActionTypes.LoadListsError;

    constructor(public payload: string) { }
}

export type AppActions = LoadLists
    | LoadListsSuccess
    | LoadListsError;
