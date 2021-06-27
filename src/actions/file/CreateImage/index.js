import * as actions from './actions';
import api from '../../../api/apiClient';
import NavigationService from '../../../navigation/NavigationService';
import { ToastAndroid } from 'react-native';
import axios from 'axios';

export function createImage(payload) {
    return async (dispatch, getState) => {
        dispatch(actions.request());
        console.log('here', payload)
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
            console.log(res.data)

            ToastAndroid.show(
                res.data?.message,
                ToastAndroid.LONG
            )

            dispatch(actions.success(res.data));

        } catch (err) {
            console.log(err)
            ToastAndroid.show(
                error?.response?.data?.message,
                ToastAndroid.LONG
            )
            dispatch(actions.failure(err));
        }
    }
}