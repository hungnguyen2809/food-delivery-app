import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DEFAULT_OPTION, SCREEN_NAME} from 'src/constants';
import {HomeScreen, RestaurantScreen} from 'src/screens';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_OPTION}>
      <Stack.Screen name={SCREEN_NAME.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={SCREEN_NAME.RestaurantScreen} component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
