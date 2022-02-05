import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthRoutes} from '@core/types/navigation';
import OnboardingScreen from '@screens/onboarding';
import SignUpScreen from '@screens/signup';

const AuthStack = createNativeStackNavigator<AuthRoutes>();

const AuthStackNavigation = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default AuthStackNavigation;
