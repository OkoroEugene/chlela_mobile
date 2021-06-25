'use strict'

import * as types from '../types';
import * as actions from './actions';

describe('updates user info', () => {
    it('creates request action', () => {
        const expectedAction = { type: types.UPDATE_USER_REQUEST };
        expect(actions.request()).toEqual(expectedAction);
    })

    it('creates success action', () => {
        const expectedAction = { type: types.UPDATE_USER_SUCCESS };
        expect(actions.success()).toEqual(expectedAction);
    })

    it('creates failure action', () => {
        const expectedAction = { type: types.UPDATE_USER_FAILURE };
        expect(actions.failure()).toEqual(expectedAction);
    })
})