'use strict'

import reducer, {
    initialState
} from '../../../reducers/file';
import * as actions from './actions';

describe('adds frame to uploaded image', () => {
    it('handles REQUEST', () => {
        const expectedState = {...initialState,processing: true};
        expect(reducer(initialState, actions.request())).toEqual(expectedState)
    })

    it('handles SUCCESS', () => {
        const state = {...initialState,processing: true};
        const response = {
            data: "path",
            message: "successfully framed image"
        }
        const expectedState = {...initialState,file:response};
        expect(reducer(state, actions.success(response))).toEqual(expectedState)
    })

    it('handles FAILURE', () => {
        const state = {...initialState, processing: true};
        const error: Error = new Error('error');
        const expectedState = {...initialState, error};
        expect(reducer(state, actions.failure(error))).toEqual(expectedState)
    })
})