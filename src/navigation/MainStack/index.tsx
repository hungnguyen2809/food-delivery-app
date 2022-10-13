import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DEFAULT_OPTION, SCREEN_NAME} from 'src/constants';
import {HomeScreen} from 'src/screens';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_OPTION} initialRouteName={SCREEN_NAME.HomeScreen}>
      <Stack.Screen name={SCREEN_NAME.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
