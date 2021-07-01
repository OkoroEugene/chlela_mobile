import * as types from '../types';

export const request = () => {
    return { type: types.REQUEST };
}

export const success = (response) => {
    return {
        type: types.SUCCESS,
        payload: response,
    };
}

export const failure = (error) => {
    return {
        type: types.FAILURE,
        error
    };
}