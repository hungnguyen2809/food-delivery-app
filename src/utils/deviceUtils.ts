// import DeviceInfo from 'react-native-device-info';
import {Dimensions, Platform} from 'react-native';
import {fontScale, hasNotch, isSmallDevice, isTablet, scale} from 'react-native-utils-scale';

const {height, width} = Dimensions.get('window');

export class DeviceUtils {
  public static width = width;
  public static height = height;
  public static isTablet = isTablet;
  public static hasNotch = hasNotch;
  public static isSmallDevice = isSmallDevice;
  public static isIOS = Platform.OS === 'ios';
  public static isAndroid = Platform.OS === 'android';

  // public static appVersion = DeviceInfo.getVersion();
  // public static deviceId = DeviceInfo.getDeviceId();
  // public static uniqueId = DeviceInfo.getUniqueId();

  public static scale(size: number) {
    return scale(size);
  }

  public static fontScale(size: number) {
    return fontScale(size);
  }
}
