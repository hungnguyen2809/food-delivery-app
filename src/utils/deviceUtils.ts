// import DeviceInfo from 'react-native-device-info';
import {Dimensions, Platform} from 'react-native';
import * as UtilsScale from 'react-native-utils-scale';

const {height, width} = Dimensions.get('window');

export class DeviceUtils {
  public static width = width;
  public static height = height;
  public static isTablet = UtilsScale.isTablet;
  public static hasNotch = UtilsScale.hasNotch;
  public static isSmallDevice = UtilsScale.isSmallDevice;
  public static isIOS = Platform.OS === 'ios';
  public static isAndroid = Platform.OS === 'android';

  // public static appVersion = DeviceInfo.getVersion();
  // public static deviceId = DeviceInfo.getDeviceId();
  // public static uniqueId = DeviceInfo.getUniqueId();

  public static scale(size: number) {
    return UtilsScale.scale(size);
  }

  public static fontScale(size: number) {
    return UtilsScale.fontScale(size);
  }

  public static setHeight(h: number) {
    return (height / 100) * h;
  }

  public static setWidth(w: number) {
    return (width / 100) * w;
  }
}

export const scale = DeviceUtils.scale;
export const fontScale = DeviceUtils.fontScale;
export const setWidth = DeviceUtils.setWidth;
export const setHeight = DeviceUtils.setHeight;
