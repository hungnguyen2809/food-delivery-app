import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DEFAULT_OPTION, SCREEN_NAME} from 'src/constants';
import {RestaurantScreen} from 'src/screens';
import BottomTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_OPTION}>
      <Stack.Screen name={SCREEN_NAME.HomeBottomTabs} component={BottomTabs} />
      <Stack.Screen name={SCREEN_NAME.RestaurantScreen} component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
