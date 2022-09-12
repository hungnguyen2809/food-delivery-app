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
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingVertical: DeviceUtils.scale(10),
    paddingHorizontal: DeviceUtils.scale(20),
    marginHorizontal: DeviceUtils.scale(20),
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    margin: 0,
    padding: 0,
    textAlignVertical: 'center',
    fontSize: DeviceUtils.fontScale(18),
    height: DeviceUtils.scale(25),
    color: Colors.DEFAULT_BLACK,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: DeviceUtils.scale(20),
    marginTop: DeviceUtils.scale(10),
  },
  rememberMeText: {
    color: Colors.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: DeviceUtils.scale(10),
    fontSize: DeviceUtils.fontScale(13),
    lineHeight: DeviceUtils.fontScale(13) * 1.4,
  },
  forgotPasswordText: {
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: DeviceUtils.fontScale(13),
    lineHeight: DeviceUtils.fontScale(13) * 1.4,
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
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: DeviceUtils.scale(20),
    paddingVertical: DeviceUtils.scale(20),
  },
  accountText: {
    fontSize: DeviceUtils.fontScale(13),
    lineHeight: DeviceUtils.fontScale(13) * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupText: {
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.fontScale(13),
    lineHeight: DeviceUtils.fontScale(13) * 1.4,
    marginLeft: DeviceUtils.scale(5),
  },
  orText: {
    alignSelf: 'center',
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: DeviceUtils.scale(5),
    fontSize: DeviceUtils.fontScale(15),
    lineHeight: DeviceUtils.fontScale(15) * 1.4,
  },
  facebookButton: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: DeviceUtils.scale(15),
    marginHorizontal: DeviceUtils.scale(20),
    marginVertical: DeviceUtils.scale(20),
  },
  googleButton: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: DeviceUtils.scale(15),
    marginHorizontal: DeviceUtils.scale(20),
  },
  signinButtonLogo: {
    height: DeviceUtils.scale(18),
    width: DeviceUtils.scale(18),
  },
  signinButtonLogoContainer: {
    borderRadius: 3,
    position: 'absolute',
    left: DeviceUtils.scale(25),
    padding: DeviceUtils.scale(2),
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  socialButtonsContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialSigninButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.fontScale(13),
    lineHeight: DeviceUtils.fontScale(13) * 1.4,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    color: Colors.DEFAULT_RED,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.fontScale(10),
    lineHeight: DeviceUtils.fontScale(10) * 1.4,
    marginTop: DeviceUtils.fontScale(3),
    marginBottom: DeviceUtils.fontScale(10),
    marginHorizontal: DeviceUtils.fontScale(10),
  },
});
