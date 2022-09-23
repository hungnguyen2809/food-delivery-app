import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'src/constants';
import {DeviceUtils} from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: DeviceUtils.scale(10),
    paddingHorizontal: DeviceUtils.scale(20),
  },
  headerTitle: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.fontScale(20),
    lineHeight: DeviceUtils.fontScale(20) * 1.4,
    width: DeviceUtils.setWidth(80),
  },
  title: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.fontScale(20),
    lineHeight: DeviceUtils.fontScale(20) * 1.4,
    marginTop: DeviceUtils.scale(50),
    marginBottom: DeviceUtils.scale(10),
    marginHorizontal: DeviceUtils.scale(20),
  },
  content: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.fontScale(20),
    lineHeight: DeviceUtils.fontScale(20) * 1.4,
    marginTop: DeviceUtils.scale(10),
    marginBottom: DeviceUtils.scale(20),
    marginHorizontal: DeviceUtils.scale(20),
  },
  phoneNumberText: {
    color: Colors.DEFAULT_YELLOW,
    fontSize: DeviceUtils.scale(18),
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: DeviceUtils.scale(18) * 1.4,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: DeviceUtils.scale(20),
    marginHorizontal: DeviceUtils.scale(20),
  },
  otpBox: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.DEFAULT_GREEN,
  },
  otpTextInput: {
    textAlign: 'center',
    fontSize: DeviceUtils.scale(25),
    width: DeviceUtils.scale(55),
    height: DeviceUtils.scale(55),
    // paddingHorizontal: DeviceUtils.scale(25),
    // paddingVertical: DeviceUtils.scale(15),
  },
});
