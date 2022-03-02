import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './auth';

export default () => {
  return (
    <NavigationContainer>
      <AuthStackNavigation />
    </NavigationContainer>
  );
};
