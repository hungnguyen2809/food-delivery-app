import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {merge} from 'lodash';
import QueryString from 'qs';
import {store} from 'src/app/store';
import {actionAuthLogout} from 'src/redux/auth/actions';
import {BASE_URL_APP} from './constants';

axios.defaults.timeout = 60000;
axios.defaults.timeoutErrorMessage = 'Mất kết nối đến máy chủ. Vui lòng thử lại';
axios.defaults.paramsSerializer = (params) => QueryString.stringify(params, {indices: false});

const STATUS_ERROR = [401, 403];

const configure = (config: AxiosRequestConfig) => {
  const accessToken = store.getState().auth.token;
  const targetConfig: AxiosRequestConfig = {
    headers: {AuthenticationVTNH: `Bearer ${accessToken}`},
  };

  return merge(config, targetConfig);
};

const configureErr = (error: AxiosError<BaseResponse>) => {
  const status = error.response?.status;
  const data = error.response?.data;
  if (data && STATUS_ERROR.includes(status as number)) {
    store.dispatch(actionAuthLogout());
    return data;
  }

  return error;
};

export const appRequest = axios.create({
  baseURL: BASE_URL_APP,
});

appRequest.interceptors.request.use(
  (config) => Promise.resolve(configure(config)),
  (error) => Promise.reject(error),
);
appRequest.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => Promise.reject(configureErr(error)),
);
