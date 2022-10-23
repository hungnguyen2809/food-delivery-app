import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DEFAULT_OPTION, SCREEN_NAME} from 'src/constants';
import {
  ForgotPasswordScreen,
  RegisterPhoneScreen,
  SigninScreen,
  SignUpScreen,
  VerificationScreen,
  WellcomeScreen,
} from 'src/screens';

const Stack = createNativeStackNavigator();

const OnboardingStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_OPTION}>
      <Stack.Screen name={SCREEN_NAME.WellcomeScreen} component={WellcomeScreen} />
      <Stack.Screen name={SCREEN_NAME.SigninScreen} component={SigninScreen} />
      <Stack.Screen name={SCREEN_NAME.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen name={SCREEN_NAME.ForgotPasswordScreen} component={ForgotPasswordScreen} />
      <Stack.Screen name={SCREEN_NAME.RegisterPhoneScreen} component={RegisterPhoneScreen} />
      <Stack.Screen name={SCREEN_NAME.VerificationScreen} component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
