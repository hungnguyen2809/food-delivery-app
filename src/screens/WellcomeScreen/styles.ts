import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'src/constants';
import {DeviceUtils} from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: DeviceUtils.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  pageItem: {
    height: DeviceUtils.scale(8),
    width: DeviceUtils.scale(15),
    borderRadius: DeviceUtils.scale(32),
    marginHorizontal: DeviceUtils.scale(5),
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: DeviceUtils.setWidth(90),
  },
  button: {
    backgroundColor: Colors.LIGHT_GREEN,
    borderRadius: DeviceUtils.scale(32),
    paddingVertical: DeviceUtils.scale(20),
    paddingHorizontal: DeviceUtils.scale(11),
  },
  buttonText: {
    fontSize: DeviceUtils.scale(16),
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: DeviceUtils.scale(16) * 1.4,
  },
  gettingStartedBtn: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: DeviceUtils.scale(10),
    paddingHorizontal: DeviceUtils.scale(40),
    borderRadius: DeviceUtils.scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  gettingStartedText: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.scale(20),
    lineHeight: DeviceUtils.scale(20) * 1.4,
  },
});
