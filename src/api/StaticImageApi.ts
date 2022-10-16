import {COUNTRY_FLAG, STATIC_IMAGE} from './constants';

export const getFlagIcon = (code = 'VN', type = COUNTRY_FLAG.TYPE.PNG) => {
  return `${COUNTRY_FLAG.BASE_URL}/${type}/${code}`;
};

export const getLogo = (imageId: string) => {
  return `${STATIC_IMAGE.BASE_URL}/logo/${imageId}.png`;
};

export const getPoster = (imageId: string, quality = STATIC_IMAGE.QUALITY.SD) => {
  return `${STATIC_IMAGE.BASE_URL}/poster/${quality}/${imageId}.png`;
};

export const getGalleryImage = (
  imageId: string,
  size: string,
  quality = STATIC_IMAGE.QUALITY.SD,
) => {
  return `${STATIC_IMAGE.BASE_URL}/gallery/${size}/${quality}/${imageId}.png`;
};
