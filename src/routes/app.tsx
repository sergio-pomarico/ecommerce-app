import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {AppRoutes, HomeRoutes} from '@core/types/navigation';
import HomeScreen from '@screens/home';
import ProductDetailScreen from '@screens/detail';
import {BottomNavbar} from '@components';

const AppStack = createBottomTabNavigator<AppRoutes>();
const HomeStack = createSharedElementStackNavigator<HomeRoutes>();

const HomeStackNavigation = () => (
  <HomeStack.Navigator initialRouteName="List">
    <HomeStack.Screen
      name="List"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Detail"
      component={ProductDetailScreen}
      sharedElements={route => {
        return [route.params.product.id];
      }}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

const AppStackNavigation = () => (
  <AppStack.Navigator
    tabBar={(props: BottomTabBarProps) => <BottomNavbar {...props} />}>
    <AppStack.Screen
      name="Home"
      component={HomeStackNavigation}
      options={{
        headerShown: false,
      }}
    />
  </AppStack.Navigator>
);

export default AppStackNavigation;
