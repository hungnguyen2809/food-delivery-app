import {COUNTRY_FLAG} from './constants';

export const getFlagIcon = (code = 'VN', type = COUNTRY_FLAG.TYPE.PNG) => {
  return `${COUNTRY_FLAG.BASE_URL}/${type}/${code}`;
};
