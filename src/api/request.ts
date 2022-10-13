import axios, {AxiosRequestConfig} from 'axios';
import {merge} from 'lodash';
import {store} from 'src/app/store';
import {BASE_URL_APP} from './constants';

axios.defaults.timeout = 60000;
axios.defaults.timeoutErrorMessage = 'Mất kết nối đến máy chủ. Vui lòng thử lại';

const configure = (config: AxiosRequestConfig) => {
  const accessToken = store.getState().auth.token;

  const targetConfig: AxiosRequestConfig = {
    headers: {AuthenticationVTNH: `Bearer ${accessToken}`},
  };

  return merge(config, targetConfig);
};

export const appRequest = axios.create({
  baseURL: BASE_URL_APP,
});

appRequest.interceptors.request.use(
  (config) => Promise.resolve(configure(config)),
  (error) => Promise.reject(error),
);
