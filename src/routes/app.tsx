import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {AppRoutes} from '@core/types/navigation';
import HomeScreen from '@screens/home';
import {BottomNavbar} from '@components';

const AppStack = createBottomTabNavigator<AppRoutes>();

const AuthStackNavigation = () => (
  <AppStack.Navigator
    tabBar={(props: BottomTabBarProps) => <BottomNavbar {...props} />}>
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </AppStack.Navigator>
);

export default AuthStackNavigation;
