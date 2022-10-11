import {get} from 'lodash';

export const getMessageError = <T>(error: T, path: string = 'message') => {
  return get(error, path);
};
