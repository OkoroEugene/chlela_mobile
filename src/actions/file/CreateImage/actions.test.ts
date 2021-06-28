'use strict'

import * as types from '../types';
import * as actions from './actions';

describe('upload image and generate new image file', () => {
    it('creates request action', () => {
        const expectedAction = { type: types.REQUEST };
        expect(actions.request()).toEqual(expectedAction);
    })

    it('creates success action', () => {
        const expectedAction = { type: types.SUCCESS };
        expect(actions.success()).toEqual(expectedAction);
    })

    it('creates failure action', () => {
        const expectedAction = { type: types.FAILURE };
        expect(actions.failure()).toEqual(expectedAction);
    })
})