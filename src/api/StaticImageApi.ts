import {ApiConstants} from '.';

const getFlagIcon = (code = 'VN', type = ApiConstants.COUNTRY_FLAG.TYPE.PNG) => {
  return `${ApiConstants.COUNTRY_FLAG.BASE_URL}/${type}/${code}`;
};

export {getFlagIcon};
