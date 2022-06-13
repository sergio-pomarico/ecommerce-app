import React from 'react';
import {compose} from 'redux';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {AuthRoutes, StackNavigationProps} from '@core/types/navigation';
import {Container, Loading, Text} from '@components';
import {useTheme} from '@config/theme';
import SignUpForm from '@forms/signup';
import {showLoading} from '@store/ui/actions';
import {useTranslation} from 'react-i18next';
import {Box} from '@atoms';

const SignUpScreen = ({
  navigation,
}: StackNavigationProps<AuthRoutes, 'SignUp'>) => {
  const {navigate} = navigation;
  const theme = useTheme();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  return (
    <Container background={theme.colors.primary}>
      <Box
        style={StyleSheet.absoluteFill as object}
        backgroundColor="primary"
      />
      <Box paddingHorizontal="l" paddingVertical="xl">
        <Text variant="hero" textAlign="left">
          {t('auth.create_account')}
        </Text>
      </Box>
      <SignUpForm
        onSubmit={() => dispatch(showLoading(true))}
        onPressLogin={() => navigate('Login')}
      />
    </Container>
  );
};

export default compose(Loading)(SignUpScreen);
