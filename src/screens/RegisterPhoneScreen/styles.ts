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
  inputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: DeviceUtils.scale(20),
    marginVertical: DeviceUtils.scale(50),
  },
  countryListContainer: {
    borderRadius: 8,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: Colors.LIGHT_GREY2,
    width: DeviceUtils.setWidth(22),
    height: DeviceUtils.setHeight(6),
    marginRight: DeviceUtils.scale(10),
    backgroundColor: Colors.LIGHT_GREY,
  },
  phoneInputContainer: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderColor: Colors.LIGHT_GREY2,
    backgroundColor: Colors.LIGHT_GREY,
  },
  flagIcon: {
    width: DeviceUtils.scale(20),
    height: DeviceUtils.scale(15),
  },
  countryCodeText: {
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  countryDropdown: {
    zIndex: 3,
    borderRadius: 10,
    borderWidth: 0.5,
    position: 'absolute',
    width: DeviceUtils.setWidth(80),
    height: DeviceUtils.setWidth(50),
    marginLeft: DeviceUtils.scale(20),
    borderColor: Colors.LIGHT_GREY2,
    backgroundColor: Colors.LIGHT_GREY,
  },
  signinButton: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: DeviceUtils.scale(50),
    marginTop: DeviceUtils.scale(20),
    backgroundColor: Colors.DEFAULT_GREEN,
    marginHorizontal: DeviceUtils.scale(20),
  },
  signinButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.fontScale(18),
    lineHeight: DeviceUtils.fontScale(18) * 1.4,
  },
});
