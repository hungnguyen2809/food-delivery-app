import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, DEFAULT_OPTION, SCREEN_NAME} from 'src/constants';
import {CartScreen, HomeScreen} from 'src/screens';
import {scale} from 'src/utils';

const Tabs = createBottomTabNavigator();

type TabBarIconProp = {focused: boolean; color: string; size: number};

const HomeIcon = ({color}: TabBarIconProp) => {
  return <Ionicons name="home-outline" size={scale(23)} color={color} />;
};

const CartIcon = ({color}: TabBarIconProp) => {
  return <Ionicons name="cart-outline" size={scale(25)} color={color} />;
};

const HomeTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        ...DEFAULT_OPTION,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: scale(70),
          position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: Colors.DEFAULT_WHITE,
        },
        tabBarActiveTintColor: Colors.DEFAULT_GREEN,
        tabBarInactiveTintColor: Colors.INACTIVE_GREY,
      }}
    >
      <Tabs.Screen
        component={HomeScreen}
        name={SCREEN_NAME.HomeScreen}
        options={{tabBarIcon: HomeIcon}}
      />
      <Tabs.Screen
        component={CartScreen}
        name={SCREEN_NAME.CartScreen}
        options={{tabBarIcon: CartIcon}}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
