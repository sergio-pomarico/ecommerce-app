import React from 'react';
import {compose} from 'redux';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {AuthRoutes, StackNavigationProps} from '@core/types/navigation';
import {Box, Container, Loading, Text} from '@components';
import {useTheme} from '@config/theme';
import LoginForm from '@forms/login';
import {showLoading} from '@store/ui/actions';

const LoginScreen = ({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Login'>) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {navigate} = navigation;
  return (
    <Container background={theme.colors.primary}>
      <Box
        style={StyleSheet.absoluteFill as object}
        backgroundColor="primary"
      />
      <Box paddingHorizontal="l" paddingVertical="xl">
        <Text variant="hero" textAlign="left">
          Welcome Back
        </Text>
      </Box>
      <LoginForm
        onSubmit={() => dispatch(showLoading(true))}
        onPressForgot={() => {}}
        onPressCreate={() => navigate('SignUp')}
      />
    </Container>
  );
};

export default compose(Loading)(LoginScreen);
