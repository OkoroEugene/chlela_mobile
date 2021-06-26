import * as types from '../types';

export const request = () => {
    return { type: types.REQUEST };
}

export const success = () => {
    return {
        type: types.SUCCESS
    };
}

export const failure = (error: any) => {
    return {
        type: types.FAILURE,
        error
    };
}