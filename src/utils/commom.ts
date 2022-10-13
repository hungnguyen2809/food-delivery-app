import {get} from 'lodash';

export const logger = {
  log: (...message: any) => {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.log(...message);
    }
  },
};

export const getMessageError = <T>(error: T, path: string = 'message') => {
  return get(error, path);
};
