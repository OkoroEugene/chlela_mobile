'use strict'

import reducer, {
    initialState
} from '../../../reducers/user';
import * as actions from './actions';

describe('update user info', () => {
    it('handles UPDATE_USER_REQUEST', () => {
        const expectedState = { ...initialState, updating: true, };
        expect(reducer(initialState, actions.request())).toEqual(expectedState)
    })

    it('handles UPDATE_USER_SUCCESS', () => {
        const state = { ...initialState, updating: true };
        const expectedState = { ...initialState, user_details: undefined };
        expect(reducer(state, actions.success())).toEqual(expectedState)
    })

    it('handles UPDATE_USER_FAILURE', () => {
        const state = { ...initialState, updating: true };
        const error: Error = new Error('error');
        const expectedState = { ...initialState, error };
        expect(reducer(state, actions.failure(error))).toEqual(expectedState)
    })
})