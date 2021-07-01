import axios, { AxiosInstance, AxiosRequestConfig, } from 'axios';
import qs from 'qs';
import Config from 'react-native-config';

const config: AxiosRequestConfig = {
    baseURL: `${Config.API_URL}`,
    headers: {},
    paramsSerializer: function (params) {
        return qs.stringify(params, { indices: false })
    },
};

const instance: AxiosInstance = axios.create(config);

export default instance;