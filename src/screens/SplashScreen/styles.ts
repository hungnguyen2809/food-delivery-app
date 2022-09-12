import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'src/constants';
import {DeviceUtils} from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    width: DeviceUtils.setWidth(30),
    height: DeviceUtils.setHeight(30),
  },
  lineText: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: DeviceUtils.fontScale(32),
  },
});
