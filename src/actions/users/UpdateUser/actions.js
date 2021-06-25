import * as types from '../types';

export const request = () => {
    return { type: types.UPDATE_USER_REQUEST };
}

export const success = () => {
    return {
        type: types.UPDATE_USER_SUCCESS
    };
}

export const failure = (error: any) => {
    return {
        type: types.UPDATE_USER_FAILURE,
        error
    };
}