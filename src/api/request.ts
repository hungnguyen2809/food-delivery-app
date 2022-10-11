import axios from 'axios';
import {BASE_URL_APP} from './constants';

axios.defaults.timeout = 60000;
axios.defaults.timeoutErrorMessage = 'Mất kết nối đến máy chủ. Vui lòng thử lại';

export const appRequest = axios.create({
  baseURL: BASE_URL_APP,
});
