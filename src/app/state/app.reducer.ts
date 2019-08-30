import { AppActions, AppActionTypes } from './app.actions';
import { Lists } from '../models/app/list';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRIMARY_OUTLET } from '@angular/router';

export interface AppState {
    lists: Lists[];
}

const initialState: AppState = {
    lists: undefined
};

const getAppFeatureState = createFeatureSelector<AppState>('app');
// export const getLists = state => state.lists;

export const getLists = createSelector(
     getAppFeatureState,
     state => state.lists
 );

export function reducer(state = initialState, action: AppActions): AppState {
    switch (action.type) {

        case AppActionTypes.LoadLists:
            return {
                ...state
            };

        case AppActionTypes.LoadListsSuccess:
            return {
                ...state,
                lists: action.payload
            };

        case AppActionTypes.LoadListsError:
            return {
                ...state
            };

        default:
            return state;

    }
}
