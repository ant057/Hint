import { AppActions, AppActionTypes } from './app.actions';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    paymentFrequncies: Array<string>;
}

const initialState: AppState = {
    paymentFrequncies: undefined
};

const getAppFeatureState = createFeatureSelector<AppState>('app');

export const getPaymentFrequenciesList = createSelector(
    getAppFeatureState,
    state => state.paymentFrequncies
);

export function reducer(state = initialState, action: AppActions): AppState {
    switch (action.type) {

        case AppActionTypes.LoadLists:
            return {
                ...state,
                paymentFrequncies: action.payload
            };

        case AppActionTypes.LoadListsSuccess:
            return {
                ...state,
                userName: undefined
            };

        case AppActionTypes.LoadListsError:
            return {
                ...state,
                userName: undefined
            };

        default:
            return state;

    }
}
