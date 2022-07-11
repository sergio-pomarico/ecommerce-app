import React from 'react';
import {compose} from 'redux';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {AuthRoutes, StackNavigationProps} from '@core/types/navigation';
import {Container, Loading, Text} from '@components';
import {useTheme} from '@config/theme';
import LoginForm from '@forms/login';
import {loginAttempt} from '@store/auth';
import {useTranslation} from 'react-i18next';
import {Box} from '@atoms';

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
          {t('auth.welcome_back')}
        </Text>
      </Box>
      <LoginForm
        onSubmit={form => dispatch(loginAttempt(form))}
        onPressForgot={() => {}}
        onPressSignUp={() => navigate('SignUp')}
      />
    </Container>
  );
};

export default compose(Loading)(LoginScreen);
