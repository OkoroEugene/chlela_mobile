import * as actions from './actions';
import constants from '../../../constants/constants';
import api from '../../../api/apiClient';
import NavigationService from '../../../navigation/NavigationService';
import { ToastAndroid } from 'react-native';

export function updateUser() {
    return async (dispatch, getState) => {
        dispatch(actions.request());

        try {
            const res = await api.put(`/user/address`, payload);

            ToastAndroid.show(
                res.data?.message,
                ToastAndroid.LONG
            )

            dispatch(actions.success(res.data));

        } catch (err) {
            ToastAndroid.show(
                error?.response?.data?.message,
                ToastAndroid.LONG
            )
            dispatch(actions.failure(err));
        }
    }
}