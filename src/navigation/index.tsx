import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DEFAULT_OPTION, SCREEN_NAME} from 'src/constants';
import {SigninScreen, SplashScreen, WellcomeScreen} from 'src/screens';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={DEFAULT_OPTION} initialRouteName={SCREEN_NAME.SplashScreen}>
        <Stack.Screen name={SCREEN_NAME.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={SCREEN_NAME.WellcomeScreen} component={WellcomeScreen} />
        <Stack.Screen name={SCREEN_NAME.SigninScreen} component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
