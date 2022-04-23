import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './auth';
import AppStackNavigation from './app';
import {useSelector} from 'react-redux';
import {RootState} from '@core/types/redux';

export default () => {
  const {isAuth} = useSelector((state: RootState) => state.auth);
  return (
    <NavigationContainer>
      {isAuth ? <AppStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};
