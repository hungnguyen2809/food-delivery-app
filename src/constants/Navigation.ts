import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const DEFAULT_OPTION: NativeStackNavigationOptions = {
  headerShown: false,
};

export enum SCREEN_NAME {
  SplashScreen = 'SplashScreen',

  WellcomeScreen = 'WellcomeScreen',
  SigninScreen = 'SigninScreen',
  SignUpScreen = 'SignUpScreen',
  ForgotPasswordScreen = 'ForgotPasswordScreen',
  RegisterPhoneScreen = 'RegisterPhoneScreen',
  VerificationScreen = 'VerificationScreen',

  HomeScreen = 'HomeScreen',
  RestaurantScreen = 'RestaurantScreen',
}
