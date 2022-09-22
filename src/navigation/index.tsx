import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DEFAULT_OPTION, SCREEN_NAME} from 'src/constants';
import {
  ForgotPasswordScreen,
  RegisterPhoneScreen,
  SigninScreen,
  SignUpScreen,
  SplashScreen,
  WellcomeScreen,
} from 'src/screens';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={DEFAULT_OPTION} initialRouteName={SCREEN_NAME.SplashScreen}>
        <Stack.Screen name={SCREEN_NAME.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={SCREEN_NAME.WellcomeScreen} component={WellcomeScreen} />
        <Stack.Screen name={SCREEN_NAME.SigninScreen} component={SigninScreen} />
        <Stack.Screen name={SCREEN_NAME.SignUpScreen} component={SignUpScreen} />
        <Stack.Screen name={SCREEN_NAME.ForgotPasswordScreen} component={ForgotPasswordScreen} />
        <Stack.Screen name={SCREEN_NAME.RegisterPhoneScreen} component={RegisterPhoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
