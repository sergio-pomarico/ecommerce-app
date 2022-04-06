import React from 'react';
import {compose} from 'redux';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {AuthRoutes, StackNavigationProps} from '@core/types/navigation';
import {Box, Container, Loading, Text} from '@components';
import {useTheme} from '@config/theme';
import LoginForm from '@forms/login';
import {loginAttempt} from '@store/auth/actions';
import {useTranslation} from 'react-i18next';

const LoginScreen = ({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Login'>) => {
  const theme = useTheme();
  const {t} = useTranslation();
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
          {t('auth.welcomeBack')}
        </Text>
      </Box>
      <LoginForm
        onSubmit={form => dispatch(loginAttempt(form))}
        onPressForgot={() => {}}
        onPressCreate={() => navigate('SignUp')}
      />
    </Container>
  );
};

export default compose(Loading)(LoginScreen);
