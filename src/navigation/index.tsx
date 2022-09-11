import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DEFAULT_OPTION, SCREEN_NAME} from 'src/constants';
import {SplashScreen} from 'src/screens';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={DEFAULT_OPTION}>
        <Stack.Screen name={SCREEN_NAME.SplashScreen} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
